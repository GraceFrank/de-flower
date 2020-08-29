import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const existingToken = localStorage.getItem("token");
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const [authToken, setAuthToken] = useState(existingToken);
  const [user, setUserDetails] = useState(savedUser);

  const setToken = (token) => {
    localStorage.setItem("token", token);
    setAuthToken(token);
  };

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUserDetails(user);
  };

  return (
    <AuthContext.Provider
      value={{
        tokenContext: [authToken, setToken],
        userContext: [user, setUser],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
