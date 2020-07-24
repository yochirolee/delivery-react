import React,{useState, useContext} from 'react';
import {ProductsInCartContext} from '../../../context/productInCartContext';

const ShoppingCartButton = ({ HandleOpen }) => {
    
  const [productsInCart,setProductsInCart]=useContext(ProductsInCartContext);

  return (
      <div className='flex flex-col border-l '> 
       <span className='fixed w-5 h-5 ml-6 -mt-2  text-center text-xs text-white rounded-full bg-red-600 '>{productsInCart.length}</span>
        <button
          onClick={HandleOpen}
          className="border-none text-2xl flex items-center px-3  border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <i className="fa fa-shopping-cart"></i>
        </button>
       
      </div>
    );
  };

  export default ShoppingCartButton;