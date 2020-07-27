import React from "react";
import "./App.css";

import "./tailwind.output.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Products from "./components/products/products";
import { ProductsProvider } from "./context/productsContext";

function App() {
  return (
    
      <Products />
 
  );
}

export default App;
