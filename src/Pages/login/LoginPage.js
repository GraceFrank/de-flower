import React, { useState, useContext } from "react";
import { Redirect, Router } from "react-router-dom";
import LoginForm from "./loginform";
import Loader from "../../components/Loader";
import { API_LOGIN } from "../../config/urls";
import { AuthContext } from "../../contexts/AuthContext";
import { FLOWERS } from "../../config/paths";
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {
  let history = useHistory();

  const { tokenContext, userContext } = useContext(AuthContext);
  const setToken = tokenContext[1];
  const setUser = userContext[1];

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(API_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          setMessage("Invalid Email or Password");
          setSuccess(false);
          setLoading(false);
        }
        response.json().then((data) => {
          //Todo! Get the Actual User Content
          //Todo! remove hardcoded role
          console.log("data", data);
          setUser({ ...data, role: "superAdmin" });
          setToken(data.data.token);
          setSuccess(true);
          setMessage("Login Successful!");
          setLoading(false);
          history.push(FLOWERS);
        });
      })
      .catch(() => {
        //Todo set success to false remove user
        setToken("random token");
        setMessage("Error logging in. Please try again later");
        setSuccess(true);
        setLoading(false);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center text-info">Login</h5>
          <p
            className={`text-center py-3 text-${
              success ? "success" : "danger"
            }`}
          >
            {message}
          </p>
          {!loading && (
            <LoginForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
          {loading && (
            <div className="d-flex justify-content-center align-items-center h-100 py-4">
              <div>
                <p className="text-dark text-center">Logging In</p>
                <Loader />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
