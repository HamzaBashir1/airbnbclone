import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  // apiVersion: '2022-11-15',
});

// Define the handler for POST requests
export async function POST(req: Request) {
  try {
    // Parse the JSON body from the request
    const { price } = await req.json();

    // Create a new checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Reservation',
            },
            unit_amount: price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    // Return the session ID
    return NextResponse.json({ id: session.id });
  } catch (err: unknown) {
    // Handle and return error message
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
