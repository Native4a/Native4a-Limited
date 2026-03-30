# Stripe Integration Setup Guide

## Required Environment Variables

You need to set the following environment variables in your Vercel project:

### 1. Stripe API Keys

Get these from your Stripe Dashboard (https://dashboard.stripe.com/apikeys):

```
STRIPE_PUBLIC_KEY=pk_test_xxxx  # Your Stripe Publishable Key
STRIPE_SECRET_KEY=sk_test_xxxx  # Your Stripe Secret Key
```

### 2. Webhook Secret

After setting up the webhook endpoint in Stripe, you'll get:

```
STRIPE_WEBHOOK_SECRET=whsec_xxxx  # Your webhook signing secret
```

### 3. Site URL

```
SITE_URL=https://yourdomain.com  # Your production URL
```

## Setup Steps

### Step 1: Get Stripe API Keys

1. Go to https://dashboard.stripe.com/apikeys
2. Copy your Publishable Key and Secret Key
3. Save these to your Vercel environment variables

### Step 2: Create Webhook Endpoint

1. In Stripe Dashboard, go to Developers > Webhooks
2. Click "Add an endpoint"
3. Enter your webhook URL: `https://yourdomain.com/api/stripe-webhook`
4. Select events: `checkout.session.completed`, `charge.refunded`, `charge.failed`
5. Copy the signing secret and save to `STRIPE_WEBHOOK_SECRET`

### Step 3: Set Environment Variables in Vercel

1. Go to your Vercel project settings
2. Click "Environment Variables"
3. Add the three variables above
4. Deploy your project

## Testing

### Local Testing with Stripe CLI

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Run: `stripe listen --forward-to localhost:3000/api/stripe-webhook`
3. Copy the signing secret and set as `STRIPE_WEBHOOK_SECRET`
4. Use Stripe test cards: https://stripe.com/docs/testing

### Test Cards

- **Successful Payment**: 4242 4242 4242 4242
- **Failed Payment**: 4000 0000 0000 0002
- **Expiry**: Any future date (e.g., 12/25)
- **CVC**: Any 3 digits

## API Endpoints

- `POST /api/create-checkout-session` - Create Stripe checkout session
- `POST /api/stripe-webhook` - Webhook for payment events

## Customization

### Modify Payment Items

Edit `/src/api/create-checkout-session.ts` to customize:
- Currency (currently set to 'hkd')
- Success/Cancel URLs
- Customer email and metadata

### Handle Additional Events

Edit `/src/api/stripe-webhook.ts` to handle:
- Send confirmation emails
- Update order database
- Trigger other business logic

## Troubleshooting

1. **Checkout not redirecting**: Ensure `STRIPE_PUBLIC_KEY` is correctly set
2. **Webhook not firing**: Check webhook endpoint URL in Stripe Dashboard
3. **Payment failing**: Use Stripe test cards and check the logs

## Resources

- Stripe Documentation: https://stripe.com/docs
- Stripe Testing Guide: https://stripe.com/docs/testing
- Stripe Checkout: https://stripe.com/docs/payments/checkout
