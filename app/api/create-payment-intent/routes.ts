import convertToSubcurrency from "@/app/libs/convertToSubcurrency";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method!== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: convertToSubcurrency(amount), // assuming convertToSubcurrency is defined
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return res.json({ clientSecret: paymentIntent.clientSecret });
  } catch (error) {
    console.error("Internal Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}