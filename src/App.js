import React from "react";
import "./App.css";

import "./tailwind.output.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Products from "./components/products/products";
import Payment from "./components/payment/payment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Login from './components/login/login';
import { ProductsInCartProvider } from "./context/productInCartContext";
import {AuthProvider} from './context/auth';
import Header from "./components/header/header";
import { isAuthenticated } from "./lib/session";



function App() {
  return (
    <AuthProvider>
    <Router>
      <ProductsInCartProvider>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <PrivateRoute path="/payment">
            <Payment />
          </PrivateRoute>

          <PrivateRoute  path="/products">
            <Products />
          </PrivateRoute>
        </Switch>
      </ProductsInCartProvider>
    </Router>
    </AuthProvider>
  );
}


function PrivateRoute({ children, ...rest }) {
 
  return (
    <Route
      {...rest}
      render={({ location }) =>
       isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
