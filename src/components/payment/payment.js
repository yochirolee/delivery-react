import React, { useContext, useState } from "react";
import PaymentForm from "./paymentForm";
import PaymentCart from "./paymentCart";
import { ProductsInCartContext } from "../../context/productInCartContext";
import Header from "../header/header";

export default function Payment() {
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);
  return (
    <div >
  
      <main className="  bg-red-700  background h-full lg:h-screen ">
        <div className=" lg:pt-20  lg:mx-20 mx-10 pb-10 content-center flex lg:flex-row flex-col">
          <PaymentCart productsInCart={productsInCart} />
          <PaymentForm />
        </div>
      </main>
    </div>
  );
}
