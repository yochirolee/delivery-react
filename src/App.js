import React from "react";
import "./App.css";

import "./tailwind.output.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Products from "./components/products/products";
import Payment from "./components/payment/payment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProductsInCartProvider } from "./context/productInCartContext";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <ProductsInCartProvider>
        <Header />
        <Switch>
          <Route path="/payment">
            <Payment />
          </Route>

          <Route exact path="/">
            <Products />
          </Route>
        </Switch>{" "}
      </ProductsInCartProvider>
    </Router>
  );
}

export default App;
