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
    method: "post",
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
  const myHeaders = new Headers();
myHeaders.append("x-auth-token", token);
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({names: [...names]});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch(API_ADD_NAMES, requestOptions)
  .then(response => {
    if(!response.ok) throw new Error()
  })

};
//Todo! Logout users if response is 401
