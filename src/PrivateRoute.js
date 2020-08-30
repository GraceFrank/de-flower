import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { LOGIN } from "./config/paths";

function PrivateRoute({ component: Component, ...rest }) {
  const { tokenContext } = useContext(AuthContext);
  const [authToken] = tokenContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        authToken ? <Component {...props} /> : <Redirect to={LOGIN} />
      }
    />
  );
}

export default PrivateRoute;
