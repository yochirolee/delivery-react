import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export default function PrivateRoute({ children, ...rest }) {
  const { userLoaded } = useContext(AuthContext);

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
