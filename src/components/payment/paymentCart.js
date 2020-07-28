import React from "react";

export default function PaymentCart({
  productsInCart,
  loading,
  getTotal,
  envio,
}) {
  return (
    <div className="w-full lg:w-1/2 lg:ml-10 h-full bg-white rounded mt-20 lg:mt-0">
      <div className="mx-10 flex flex-col  ">
        {productsInCart.map((product) => (
          <div className="flex flex-row w-full flex-wrap ">
            <p className="lg:w-4/6 w-1/2 ml-1 py-2 text-sm text-gray-700  ">
              {product.name}
            </p>
            <p className="lg:pl-20 pl-4 block ml-1  py-2 text-sm text-gray-700">
              <span>$</span> {product.price}
            </p>
          </div>
        ))}
      </div>
      <div className=" flex flex-row justify-end mr-5 py-6 mr-20  border-0 border-t ">
        <p className="mr-2  bold ">Envio</p>
        <p className="font-bold">
          <span>$</span>
          {envio}
          <span className="font-bold ml-1 text-gray-500">CUC</span>
        </p>
      </div>
      <div className=" flex flex-row justify-end mr-5 py-6 mr-20  border-0 border-t ">
        <p className="mr-2  bold ">Total</p>
        <p className="font-bold">
          <span>$</span>
          {getTotal()}
          <span className="font-bold ml-1 text-gray-500">CUC</span>
        </p>
      </div>
    </div>
  );
}
