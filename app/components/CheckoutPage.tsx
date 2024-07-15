"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "../libs/convertToSubcurrency";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    setLoading(true);

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
     .then((res) => res.json())
     .then((data) => {
        setClientSecret(data.clientSecret);
        setLoading(false);
      })
     .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, [amount, stripe]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <PaymentElement id="payment-element" />
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default CheckoutPage;