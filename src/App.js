import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import { ProductsInCartProvider } from "./context/productInCartContext";
import ProductCard from "./components/products/productCard";
import firebase from "firebase/app";
import "firebase/firestore";
import "./tailwind.output.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Loading from "./components/loading/loading";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const config = {
    apiKey: "AIzaSyBBjKdrfUqYxzv8AuFezBLttmiUj6evhz0",
    authDomain: "testing-2b05e.firebaseapp.com",
    databaseURL: "https://testing-2b05e.firebaseio.com",
    projectId: "testing-2b05e",
    storageBucket: "testing-2b05e.appspot.com",
    messagingSenderId: "671346717916",
    appId: "1:671346717916:web:273e09a3717613e7c3b019",
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

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
      <ProductsInCartProvider>
        <Header />
        <main className="  bg-red-700  background  ">
          <div className=" flex flex w-full ">
            <div className="pt-20 flex  flex-row mx-auto w-5/6 flex-wrap">
              {loading ? (
               <Loading/>
              ) : (
                products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
              )}
            </div>
          </div>
        </main>
      </ProductsInCartProvider>

      
    </div>
  );
}

export default App;
