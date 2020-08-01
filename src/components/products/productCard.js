import React, { useState, useContext } from "react";
import Counter from "./counter/counter";
import { ProductsInCartContext } from "../../context/productInCartContext";
import AddedAlert from "../alert/alert";

export default function ProductCard({ product }) {
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);
  const [showAlert, setShowAlert] = useState(false);
  let [value, setValue] = useState(1);
  const message='Producto Adicionado';

  const HandleDecrement = () => {
    let auxVal = value;
    if (value > 1) auxVal--;
    setValue(auxVal);
  };
  const HandleIncrement = (e) => {
    let auxVal = value;
    auxVal++;
    setValue(auxVal);
  };
  const HandleAddProductToCart = (product) => {
    setShowAlert(true);
    let auxProducts = [];
    auxProducts = [...productsInCart];

    if (value === 1) {
      auxProducts.push(product);
      setProductsInCart(auxProducts);
    } else {
      for (var i = 0; i < value; i++) {
        auxProducts.push(product);
        setProductsInCart(auxProducts);
      }
      setValue(1);
    }
  };
  const changeShowAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className=" rounded bg-white mx-2 shadow-lg w-full lg:w-64 mx-1 lg:mx-2 mb-10">
      <img
        className="w-48 h-48 cover-fill mx-auto mt-4 rounded-full  cover-fill "
        src={product.pictureUrl}
        alt="Pizza"
      />
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2 text-center">{product.name}</div>
        <div className="flex justify-between center w-10 mx-auto ">
          <img src="img/hoja.svg" alt="" />
          <img src="img/aji-picante.svg" alt="" />
        </div>

        <p className="text-gray-600 h-8 text-xs mt-2 text-center">
          {product.ingredients}
        </p>
        <div className="flex text-center mx-auto w-10 mt-2 pr-20">
          <p className="font-bold mt-1 text-gray-500">$</p>
          <p className=" font-bold text-xl ml-2 ">{product.price}</p>
          <p className="font-bold mt-1 ml-2 text-gray-500">CUC</p>
        </div>
      </div>
     
        <div className="px-6 py-2 ">
        {showAlert ? (
         <div className="px-6 py-2 ">
        <AddedAlert changeShowAlert={changeShowAlert} message={message} />
        </div>
      ) : (
          <Counter
            HandleDecrement={HandleDecrement}
            HandleIncrement={HandleIncrement}
            HandleAddProductToCart={HandleAddProductToCart}
            value={value}
            product={product}
          />    )}
        </div>
  
    </div>
  );
}
