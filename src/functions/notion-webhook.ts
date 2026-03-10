import { createVercelDeploymentHook } from '../lib/vercelDeploy'

interface NotionWebhookPayload {
  object: string
  type: string
  parent: {
    type: string
    database_id: string
  }
  timestamp: string
}

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Verify the webhook is from Notion
  // In production, you should verify the signature header
  const signature = req.headers['x-notion-signature']
  
  try {
    const payload = req.body as NotionWebhookPayload

    // Only process database updates
    if (payload.object !== 'page' || !payload.parent.database_id) {
      return res.status(200).json({ message: 'Not a database page' })
    }

    // Check if this is our blog database
    const blogDatabaseId = process.env.NOTION_DATABASE_ID
    if (payload.parent.database_id !== blogDatabaseId) {
      return res.status(200).json({ message: 'Not the blog database' })
    }

    console.log('[v0] Notion webhook received:', {
      type: payload.type,
      timestamp: payload.timestamp,
    })

    // Trigger Vercel redeploy if webhook URL is configured
    if (process.env.VERCEL_REDEPLOY_HOOK) {
      try {
        const response = await fetch(process.env.VERCEL_REDEPLOY_HOOK, {
          method: 'POST',
        })

        if (response.ok) {
          console.log('[v0] Vercel redeploy triggered successfully')
          return res.status(200).json({ 
            message: 'Blog updated and redeploy triggered',
            redeployed: true,
          })
        } else {
          console.error('[v0] Failed to trigger redeploy:', response.statusText)
          return res.status(200).json({ 
            message: 'Blog update received but redeploy failed',
            redeployed: false,
          })
        }
      } catch (error) {
        console.error('[v0] Error triggering redeploy:', error)
        return res.status(200).json({ 
          message: 'Blog update received but redeploy error',
          redeployed: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        })
      }
    }

    return res.status(200).json({ 
      message: 'Blog update received',
      redeployed: false,
      note: 'VERCEL_REDEPLOY_HOOK not configured',
    })
  } catch (error) {
    console.error('[v0] Webhook error:', error)
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Webhook processing failed',
    })
  }
}
