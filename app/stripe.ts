// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2022-11-15',
// });

// export async function createPaymentMethod(request: Request) {
//   const { paymentMethod } = await stripe.paymentMethods.create({
//     type: 'card',
//     card: {
//       number: '4242424242424242',
//       exp_month: 12,
//       exp_year: 2025,
//       cvc: '123',
//     },
//   });

//   return NextResponse.json(paymentMethod);
// }

// export async function createPaymentIntent(request: Request) {
//   const { listingId, totalPrice } = await request.json();

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: totalPrice,
//     currency: 'eur',
//     payment_method_types: ['card'],
//     setup_future_usage: 'off_session',
//   });

//   return NextResponse.json(paymentIntent);
// }

// export async function confirmPaymentIntent(request: Request) {
//   const { paymentIntentId } = await request.json();

//   const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

//   if (paymentIntent.status === 'requires_confirmation') {
//     await stripe.paymentIntents.confirm(paymentIntentId);
//   }

//   return NextResponse.json(paymentIntent);
// }