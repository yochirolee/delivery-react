import React, { useState, useEffect } from "react";
import Loading from "../loading/loading";
import Header from "../header/header";
import { ProductsInCartProvider } from "../../context/productInCartContext";
import ProductCard from "../products/productCard";
import firebase from "../../firebase";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    
    setLoading(true);
    const unsubcribe = firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(newProducts);
        setLoading(false);
      });

    return () => unsubcribe();
  }, []);

  return (
    <div>
     
        <main className="  bg-red-700  background  ">
          <div className=" flex flex w-full ">
            <div className="pt-20 flex  flex-row mx-auto w-5/6 flex-wrap">
              {loading ? (
                <Loading />
              ) : (
                products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
              )}
            </div>
          </div>
        </main>
    
    </div>
  );
}
