import React from "react";
import PaymentForm from "./paymentForm";
import PaymentCart from "./paymentCart";

export default function Payment() {
  return (
    <div className=' flex flex-wrap overflow-scroll'>
      <PaymentForm />
      <PaymentCart />
    </div>
  );
}
