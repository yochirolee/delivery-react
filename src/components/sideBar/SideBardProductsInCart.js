import React, { useContext, useState } from "react";
import { ProductsInCartContext } from "../../context/productInCartContext";
const SideBarProductsInCart = ({ open }) => {
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);

  const HandleRemoveProduct = (id) => {
    let auxProduct = [...productsInCart];
    auxProduct.splice(id, 1);
    setProductsInCart(auxProduct);
  };

  const getTotal = () => {
    let Total = 0;
    productsInCart.map((product) => {
      Total += parseFloat(product.price);
    });

    return Total.toFixed(2);
  };

  return (
    <div
      className={
        open
          ? " transition delay-150 duration-300 ease-in-out flex-wrap overflow transfom:right rounded fixed right-0 lg:w-1/5  mr-1 w-3/4 bg-gray-100 h-full mt-2 "
          : "hidden  "
      }
    >
      {productsInCart.map((product,index) => (
        <div key={index}  className="flex flex-row mx-2  mt-4 text-center justify-center border-b ">
          <img
            className="w-8 h-8 cover-fill mx-auto rounded-full "
            src={`img/${product.pictureUrl}`}
            alt="Pizza"
          />
          <p className=" w-4/6 ml-1 py-2 text-sm font-bold text-gray-700  ">
            {product.name}
          </p>
          <p className="w-1/6 block ml-1 py-2 text-sm text-gray-700">
            {product.price}
          </p>
          <button onClick={()=>HandleRemoveProduct(index)}  className=" pl-1 w-1/6 py-2 text-sm text-red-700 font-bold  hover:text-red">
            X
          </button>
        </div>
      ))}
      <div div className='flex flex-col my-2'>
        <div className="  flex flex-row px-5  font-bold mt-2 mx-auto justify-end  ">
          <p className=" px-5 bolder w-full ">Total</p>
          <p><span className='mr-1'>$</span>{getTotal()}</p>
        </div>

        <button className=" bg-gray-600 w-48 mx-auto mt-2 rounded  shadow-2xl h-10 text-white">
          Ordenar
        </button>
      </div>
    </div>
  );
};

export default SideBarProductsInCart;
