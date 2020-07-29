import React, { useState, useContext,useEffect } from 'react';
import {
    isAuthenticated,
    setLocalStorage,
    getLocaleStorage,
    removeLocaleStorage,
  } from "../../lib/session";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
  } from "react-router-dom";


import {AuthContext} from '../../context/auth';
        
export default function PrivateRoute({ children, ...rest }) {

const {userLoaded} = useContext(AuthContext);

    return (
      <Route
        {...rest}
        render={({ location }) =>
         userLoaded ? (
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
  
    
