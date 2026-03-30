import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-04-10",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ""

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const signature = req.headers["stripe-signature"] as string
    const body = typeof req.body === "string" ? req.body : JSON.stringify(req.body)

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message)
      return res.status(400).json({ error: "Invalid signature" })
    }

    // Handle different event types
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        console.log("Payment successful for session:", session.id)
        
        // You can add custom logic here to:
        // 1. Save order to database
        // 2. Send confirmation email
        // 3. Update inventory
        // etc.
        
        break
      }

      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge
        console.log("Payment refunded for charge:", charge.id)
        
        // Handle refund logic
        break
      }

      case "charge.failed": {
        const charge = event.data.object as Stripe.Charge
        console.error("Payment failed for charge:", charge.id)
        
        // Handle failed payment logic
        break
      }

      default:
        console.log("Unhandled event type:", event.type)
    }

    res.status(200).json({ received: true })
  } catch (error: any) {
    console.error("Webhook error:", error)
    res.status(500).json({
      error: error.message || "Webhook handler error",
    })
  }
}
