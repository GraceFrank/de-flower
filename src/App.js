import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./Pages/login/LoginPage";
import FlowersPage from "./Pages/flowers/FlowersPage";
import paths from "./config/paths";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path={paths.LOGIN} component={LoginPage} />
          <PrivateRoute path={paths.FLOWERS} component={FlowersPage} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
