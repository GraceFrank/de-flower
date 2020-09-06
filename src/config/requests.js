import { API_USERS, API_FLOWERS, API_ADD_NAMES } from "./urls";

export const getAllUsers = (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  return fetch(API_USERS, options).then((response) => {
    if (response.ok) return response.json().then((data) => data.data);
  });
};

export const createUser = (token, data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify(data),
  };

  return fetch(API_USERS, options).then((response) => {
    if (!response.ok) throw new Error();

    return response.json().then((data) => data.data);
  });
};

export const getFlowers = (token, status) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  const url = status ? `${API_FLOWERS}?status=${status}` : API_FLOWERS;

  return fetch(url, options).then((response) => {
    if (!response.ok) throw new Error();

    return response.json().then((data) => {
      return data.data;
    });
  });
};

export const addNames = (token, names) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify(names),
  };

  return fetch(API_ADD_NAMES, options).then((response) => {
    if (!response.ok) throw new Error();

    return true;
  });
};
//Todo! Logout users if response is 401
