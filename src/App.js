import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import LoginPage from "./Pages/login/LoginPage";
import FlowersPage from "./Pages/flowers/FlowersPage";
import FlowerByIdPage from "./Pages/flowers/ViewFlower";
import ProfilePage from "./Pages/Profile/ProfilePage";
import UsersPage from "./Pages/users/UsersPage";
import NotFound from "./Pages/NotFound";
import { FLOWERS, USERS, LOGIN, MY_PROFILE } from "./config/paths";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path={LOGIN} component={LoginPage} />
          <PrivateRoute path={`${FLOWERS}/:id`} component={FlowerByIdPage} />
          <PrivateRoute path={FLOWERS} component={FlowersPage} />
          <PrivateRoute path={MY_PROFILE} component={ProfilePage} />
          <AdminRoute path={USERS} component={UsersPage} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
