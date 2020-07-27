import React from "react";

export default function PaymentCart({ productsInCart, totalPrice, loading }) {
  return (
    <div>
      <div className="mx-1  flex flex-col ">
        {productsInCart.map((product) => (
          <div className="flex flex-row w-full flex-wrap overflow-scroll">
            <p className=" w-4/6 ml-1 py-2 text-sm text-gray-700  ">
              {product.name}
            </p>
            <p className="pl-20 block ml-1  py-2 text-sm text-gray-700">
              <span>$</span> {product.price}
            </p>
          </div>
        ))}
      </div>
      <div className=" flex flex-row justify-end mr-5 py-6 mr-20  border-0 border-t ">
        <p className="mr-2  bold ">Total</p>
        <p className="font-bold">
          <span>$</span>
          {totalPrice}
          <span className="font-bold ml-1 text-gray-500">CUC</span>
        </p>
      </div>
    </div>
  );
}
