import { API_USERS } from "./urls";

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
