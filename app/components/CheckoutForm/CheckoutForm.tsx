"use client"

import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

interface CheckoutFormProps {
  priceId: string
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_PUBLIC_KEY as string);

const CheckoutForm = (props: CheckoutFormProps) => {
  const { priceId } = props;
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        priceId
      })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}

export default CheckoutForm;