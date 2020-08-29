import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import LoginPage from "./Pages/login/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
