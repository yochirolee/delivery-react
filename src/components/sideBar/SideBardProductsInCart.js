import React, { useContext, useState } from "react";
import { ProductsInCartContext } from "../../context/productInCartContext";
import { Link } from "react-router-dom";

const SideBarProductsInCart = ({ open, HandleOpen }) => {
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
          ? " transition z-20 delay-150 overflow-scroll pb-20 duration-300 ease-in-out flex-wrap overflow transfom:right rounded fixed right-0 lg:w-1/5  mr-1 w-3/4 bg-gray-100 h-full mt-2 "
          : "hidden  "
      }
    >
      {productsInCart.map((product, index) => (
        <div
          key={index}
          className="flex flex-row mx-2  mt-4 text-center justify-center border-b "
        >
          <img
            className="w-8 h-8 cover-fill mx-auto rounded-full "
            src={product.pictureUrl}
            alt="Pizza"
          />
          <p className=" w-4/6 ml-1 py-2 text-sm font-bold text-gray-700  ">
            {product.name}
          </p>
          <p className="w-1/6 block ml-1 py-2 text-sm text-gray-700">
            {product.price}
          </p>
          <button
            onClick={() => HandleRemoveProduct(index)}
            className=" pl-1 w-1/6 py-2 text-sm text-red-700 font-bold  hover:text-red"
          >
            X
          </button>
        </div>
      ))}
      <div div className="flex flex-col my-2">
        <div className="  flex flex-row px-5  font-bold mt-2 mx-auto justify-end  ">
          <p className=" px-5 bolder w-full ">Total</p>
          <p>
            <span className="mr-1">$</span>
            {getTotal()}
          </p>
        </div>
        <Link className="w-48 mx-auto" to="/payment">
          <button
            onClick={HandleOpen}
            className=" bg-gray-600 w-48 mx-auto mt-2 rounded  shadow-2xl h-10 text-white"
          >
            Ordenar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBarProductsInCart;
