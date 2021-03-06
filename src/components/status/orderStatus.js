import React, { useState, useEffect,useContext } from "react";
import { ProductsInCartContext } from "../../context/productInCartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import OrderStatusTrack from "./orderStatusTrack";

export default function OrderStatus({ orderId }) {
  
  let [orderStatus, setOrderStatus] = useState("");
  let [loading, setLoading] = useState(false);
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);

  useEffect(() => {
    setLoading(true);
    setProductsInCart([]);
    const unsubcribe = firebase
      .firestore()
      .collection("orders")
      .doc(orderId)
      .onSnapshot(async function (doc) {
        const order = await doc.data();
        setOrderStatus(order);
        setLoading(false);
      });

    return () => unsubcribe();
  }, []);

  return (
    <div className="bg-white mx-auto rounded p-4 lg:mt-0 mt-20 ">
    
      {loading ? (
        <div className='text-center'>...Loading</div>
      ) : (
        <div className="flex flex-col  border-t">
          <div className="border bg-white py-2">
            <p className=" mb-2 font-bold text-center">Estado de su Orden</p>
            <OrderStatusTrack status={orderStatus.status} />
          </div>
          <div className="flex flex-row mt-2">
            <p className="text-xs">Nombre: </p>
            <span className="block uppercase ml-2 tracking-wide text-gray-700 text-xs flex flex-row font-bold mb-2">
              <p>{orderStatus.name}</p>
            </span>
          </div>
          <div className="flex flex-row mt-2">
            <p className="text-xs">Phone: </p>
            <span className="block uppercase ml-2 tracking-wide text-gray-700 text-xs flex flex-row font-bold mb-2">
              <p>{orderStatus.phone}</p>
            </span>
          </div>
          <div className="flex flex-row mt-2">
            <p className="text-xs">Direccion de Entrega: </p>
            <span className="block uppercase ml-2 tracking-wide text-gray-700 text-xs flex flex-row font-bold mb-2">
              <p>{orderStatus.address}</p>
            </span>
          </div>
          <div className="flex lg:flex-row flex-col mt-2 lg:text-2xl justify-center bg-gray-800 text-center text-white ">
            <p className="">Total a Pagar </p>
            <span className="block uppercase ml-2 tracking-wide   font-bold mb-2">
              {orderStatus.totalPrice} cuc
            </span>
          </div>
         <div className='h-64 overflow-y-auto'>
          <p className="border-b font-bold my-2 text-center ">
            Productos de su Orden
          </p>
          {orderStatus.products ? (
            orderStatus.products.map((product, index) => (
              <div
                key={index}
                className="flex flex-row  justify-between tracking-wide text-gray-700 text-xs font-bold py-2 mr-4 border-b border-dashed"
              >
                <p className="">{product.name}</p>
                <p>{product.price}</p>
               
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
        </div>
      )}
      
    </div>
  );
}
