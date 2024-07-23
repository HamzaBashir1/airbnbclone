// import { loadStripe } from "@stripe/stripe-js";
// export async function checkout(){
//     let stripepromise = null
//     let getstripe =({lineItems})=>{
//         if(!stripepromise){
//             stripepromise =loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
//         }
//         return stripepromise
//     }
//         const stripe = await getstripe()
//         await stripe.redirectToCheckout({
//             mode:"payment",
//             lineItems,
//             successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
//             cancelUrl:window.location.origin
//         })
        
// }
