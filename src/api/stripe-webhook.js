import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "")

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const sig = req.headers["stripe-signature"]
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !webhookSecret) {
    console.error("[v0] Missing webhook signature or secret")
    return res.status(400).json({ error: "Missing webhook signature" })
  }

  try {
    const event = stripe.webhooks.constructEvent(
      req.rawBody || JSON.stringify(req.body),
      sig,
      webhookSecret
    )

    console.log(`[v0] Webhook event received: ${event.type}`)

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object
        console.log(`[v0] Payment successful for session: ${session.id}`)
        // Here you can:
        // - Update database with order info
        // - Send confirmation email
        // - Trigger fulfillment process
        break

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object
        console.log(`[v0] Payment intent succeeded: ${paymentIntent.id}`)
        break

      case "payment_intent.payment_failed":
        const failedPayment = event.data.object
        console.log(`[v0] Payment failed: ${failedPayment.id}`)
        // Handle payment failure
        break

      default:
        console.log(`[v0] Unhandled event type: ${event.type}`)
    }

    res.status(200).json({ received: true })
  } catch (error) {
    console.error("[v0] Webhook error:", error)
    res.status(400).json({ error: error.message })
  }
}
