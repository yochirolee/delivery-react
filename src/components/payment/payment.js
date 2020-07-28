import React, { useContext, useState } from "react";
import PaymentForm from "./paymentForm";
import PaymentCart from "./paymentCart";
import { ProductsInCartContext } from "../../context/productInCartContext";
import OrderStatus from "../status/orderStatus";
import { Firebase } from "../../lib/firebase";

export default function Payment() {
  const firebase = new Firebase();
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);
  const [loading, setLoading] = useState(false);
  const [envio, setEnvio] = useState(1);
  const [orderDone, setOrderDone] = useState(false);
  const [order, setOrder] = useState();

  const getTotal = () => {
    let Total = 0;
    productsInCart.map((product) => {
      Total += parseFloat(product.price);
    });
    Total += envio;
    return Total.toFixed(2);
  };

  const HandleSubmit = async (data) => {
    setLoading(true);
    try {
      data.products = productsInCart;
      data.date = Date.now();
      data.status = "New";
      data.totalPrice = getTotal();
      setOrder(await firebase.saveData({ collection: "orders", data: data }));
      document.getElementById("form-payment").reset();
      setOrderDone(true);
    } catch {
      console.log("error something happen");
    }
    setLoading(false);
  };

  return (
    <div>
      <main className="  bg-red-700  background h-full lg:h-screen ">
        <div className=" lg:pt-20  lg:mx-20 mx-10 pb-10 content-center flex lg:flex-row flex-col">
          {orderDone ? (
            <>
              <PaymentCart
                productsInCart={productsInCart}
                loading={loading}
                getTotal={getTotal}
                envio={envio}
              />
              <PaymentForm HandleSubmit={HandleSubmit} />
            </>
          ) : (
            <OrderStatus />
          )}
        </div>
      </main>
    </div>
  );
}
