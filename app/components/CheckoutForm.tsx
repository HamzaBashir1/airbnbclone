// 'use client';

// import type Stripe from "stripe";
// import React, { useState } from "react";
// import * as config from "@/config";
// import { createCheckoutSession } from "@/actions/stripe";
// import getStripe from "@/utils/get-stripejs";
// import {
//   EmbeddedCheckout,
//   EmbeddedCheckoutProvider,
// } from "@stripe/react-stripe-js";

// interface CheckoutFormProps {
//   uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
// }

// export default function CheckoutForm(props: CheckoutFormProps): JSX.Element {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [donationAmount, setDonationAmount] = useState<number>(500); // Default value set to 1000
//   const [clientSecret, setClientSecret] = useState<string | null>(null);

//   const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//     setDonationAmount(parseInt(e.currentTarget.value, 10));
//   };

//   const formAction = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("uiMode", props.uiMode);
//     formData.append("customDonation", donationAmount.toString());

//     const { client_secret, url } = await createCheckoutSession(formData);

//     setLoading(false);
//     if (props.uiMode === "embedded") {
//       setClientSecret(client_secret);
//     } else {
//       window.location.assign(url as string);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={formAction}>
//         <input type="hidden" name="uiMode" value={props.uiMode} />
//         <label>
//            Amount:
//           <input
//             type="number"
//             min={config.MIN_AMOUNT}
//             max={config.MAX_AMOUNT}
//             step={config.AMOUNT_STEP}
//             value={donationAmount}
//             onChange={handleInputChange}
//           />
//         </label>
//         <button
//           className="checkout-style-background"
//           type="submit"
//           disabled={loading}
//         >
//           Pay Now 
//         </button>
//       </form>
//       {clientSecret && (
//         <EmbeddedCheckoutProvider stripe={getStripe()} options={{ clientSecret }}>
//           <EmbeddedCheckout />
//         </EmbeddedCheckoutProvider>
//       )}
//     </>
//   );
// }
