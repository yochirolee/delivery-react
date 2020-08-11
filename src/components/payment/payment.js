import React, { useContext, useState, useEffect } from "react";
import PaymentForm from "./paymentForm";
import PaymentCart from "./paymentCart";
import { ProductsInCartContext } from "../../context/productInCartContext";
import OrderStatus from "../status/orderStatus";
import { Firebase } from "../../lib/firebase";
import { getLocaleStorage } from "../../lib/session";
import firebase from "firebase";
import { AuthContext } from "../../context/auth";

export default function Payment() {
  const { user } = useContext(AuthContext);
  const firebaseC = new Firebase();
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);
  const [loading, setLoading] = useState(false);
  const [envio, setEnvio] = useState(1);
  const [orderDone, setOrderDone] = useState(false);
  const [auxOrderId, setAuxOrderId] = useState(null);
  const [order, setOrder] = useState();

  const getTotal = () => {
    let Total = 0;
    productsInCart.map((product) => {
      Total += parseFloat(product.price);
    });
    Total += envio;
    return Total.toFixed(2);
  };

  useEffect(() => {
    const userOrder = getLocaleStorage("userOrder");
    if (userOrder) {
      setOrderDone(true);
      setAuxOrderId(userOrder.orderId);
    }

    console.log(userOrder, "USER ORDER FROM LOCAL STORAGE");
  });

  const saveOrderToLocalStorage = (userId, orderId) => {
    let userOrder = {
      userId,
      orderId,
    };
    localStorage.setItem("userOrder", JSON.stringify(userOrder));
  };

  const HandleSubmit = async (data) => {
    setLoading(true);

    try {
      data.userId = user.uid;
      data.products = productsInCart;
      data.date = firebase.firestore.FieldValue.serverTimestamp();
      data.status = "New";
      data.totalPrice = getTotal();
      let newOrder = await firebaseC.saveData({
        collection: "orders",
        data: data,
      });
      saveOrderToLocalStorage(user.uid, newOrder.id);
      setOrder(newOrder);
      setAuxOrderId(newOrder.id);

      document.getElementById("form-payment").reset();
     
      setOrderDone(true);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <main className="  bg-red-700  background min-h-screen ">
        <div className=" lg:pt-20  lg:mx-20 mx-10 pb-10 content-center flex lg:flex-row flex-col">
          {!orderDone ? (
            <>
              <PaymentCart
                productsInCart={productsInCart}
                loading={loading}
                getTotal={getTotal}
                envio={envio}
              />
              <PaymentForm HandleSubmit={HandleSubmit} user={user} />
            </>
          ) : (
            <OrderStatus orderId={auxOrderId} />
          )}
        </div>
      </main>
    </div>
  );
}
