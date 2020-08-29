import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./loginform";
import Loader from "../../components/Loader";
import { API_LOGIN } from "../../config/urls";
import paths from "../../config/paths";

const LoginPage = () => {
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
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          setMessage("Invalid Email or Password");
          setSuccess(false);
          setLoading(false);
        }
        response.json().then((data) => {
          console.log(data);
          setSuccess(true);
          setMessage("Login Successful!");
          setLoading(false);
        });
      })
      .catch((error) => {
        setMessage("Error logging in. Please try again later");
        setSuccess(false);
        setLoading(false);
      });
  };

  if (success) {
    return <Redirect to={paths.FLOWERS} />;
  }

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
