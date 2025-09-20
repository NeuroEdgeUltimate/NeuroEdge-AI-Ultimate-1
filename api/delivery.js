const crypto = require('crypto');
const resend = require('resend').Resend(process.env.RESEND_API_KEY);
const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify webhook signature (best practice)
  const webhookId = process.env.PAYPAL_WEBHOOK_ID; // Add to Vercel env vars
  const signature = req.headers['paypal-transmission-signature'];
  const body = JSON.stringify(req.body);
  const computedSig = crypto
    .createHmac('sha256', process.env.PAYPAL_WEBHOOK_SECRET) // Set webhook secret in PayPal
    .update(body)
    .digest('hex');
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(computedSig))) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  const event = req.body.event_type;
  const details = req.body.resource;
  const email = details.payer.email_address;
  const name = details.payer.name.given_name || 'Customer';

  let product, filePath, subject;
  if (event === 'PAYMENT.CAPTURE.COMPLETED') {
    product = details.purchase_units[0].description; // e.g., 'NeuroEdge AI - ...'
    subject = `Welcome to NeuroEdge AI - Your EA Download`;
  } else if (event === 'BILLING.SUBSCRIPTION.ACTIVATED') {
    product = details.plan_id; // Map plan_id to product, e.g., via a switch
    subject = `NeuroEdge AI Subscription Activated - Access Your EA`;
  } else {
    return res.status(400).json({ error: 'Unsupported event' });
  }

  // Map product to file (customize as needed)
  let eaFile;
  switch (product) {
    case 'NeuroEdge AI - Entry-level AI-powered MT5 EA':
    case 'P-4H345618GE642320BNDHGWJA': // Basic plan
      eaFile = 'neuroedge-ai.ex5';
      break;
    case 'NeuroEdge AI Pro - Advanced AI-powered MT5 EA':
    case 'P-3AB04862PL207104TNDHGUZA': // Pro plan
      eaFile = 'neuroedge-pro.ex5';
      break;
    case 'NeuroEdge AI Ultimate - Premium AI-powered MT5 EA':
    case 'P-6N9864857H046771GNDHE7ZY': // Ultimate plan
      eaFile = 'neuroedge-ultimate.ex5';
      break;
    default:
      return res.status(400).json({ error: 'Unknown product' });
  }

  const filePath = path.join(process.cwd(), 'public/eas', eaFile);
  const instructionsPath = path.join(process.cwd(), 'public/eas/delivery-instructions.txt');
  const attachment = fs.readFileSync(filePath);
  const instructions = fs.readFileSync(instructionsPath, 'utf8');

  // Send email with attachment
  try {
    await resend.emails.send({
      from: 'NeuroEdge AI <noreply@your-vercel-app.com>', // Verify domain in Resend
      to: [email],
      subject: subject,
      html: `
        <h1>Hi ${name}!</h1>
        <p>Thank you for your purchase/subscription. Your NeuroEdge ${product.split(' - ')[0]} EA is attached.</p>
        <p><strong>Installation:</strong><br>${instructions}</p>
        <p>If you need support, reply to this email.</p>
      `,
      attachments: [
        {
          filename: `${eaFile}`,
          content: attachment.toString('base64'),
          contentType: 'application/octet-stream',
        },
      ],
    });
    console.log(`EA delivered to ${email} for ${product}`);
  } catch (error) {
    console.error('Email delivery failed:', error);
    return res.status(500).json({ error: 'Delivery failed' });
  }

  res.status(200).json({ status: 'OK' }); // Required for webhook success
}