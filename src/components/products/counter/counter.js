import React from 'react';
export default function Counter({
  HandleAddProductToCart,
  HandleDecrement,
  HandleIncrement,
  product,
  value,
}) {


  return (
    <div className="flex flex-row border-t  border-gray-400 pt-2">
      <div className="w-24 mx-auto flex flex-row border rounded-full border-gray-400  justify-between">
        <p
          onClick={HandleDecrement}
          className="px-2 text-gray-700 border-r font-bold hover: cursor-pointer"
        >
          -
        </p>
        <span className="font-bold text-gray-700 pt-1  w-full text-center">{value}</span>
        <p
          onClick={HandleIncrement}
          className="px-2 text-gray-700 border-l font-bold hover: cursor-pointer"
        >
          +
        </p>
      </div>
      <div className="mx-auto">
        <button className="border-none px-4 py-1 rounded bg-green-700 hover:border-transparent"
        onClick={e=>HandleAddProductToCart(product)}>
          <i className="fa fa-cart-plus text-gray-100"></i>
        </button>
      </div>
    </div>
  );
}
