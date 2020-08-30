import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { LOGIN, FLOWERS } from "./config/paths";

function AdminRoute({ component: Component, ...rest }) {
  const { tokenContext, userContext } = useContext(AuthContext);
  const [authToken] = tokenContext;
  const [user] = userContext;
  const { role } = user;

  return (
    <Route
      {...rest}
      render={(props) =>
        authToken && role ? (
          <Component {...props} />
        ) : authToken && !role ? (
          <Redirect to={FLOWERS} />
        ) : (
          <Redirect to={LOGIN} />
        )
      }
    />
  );
}

export default AdminRoute;
