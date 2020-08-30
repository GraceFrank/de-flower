import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Nav from "../../components/Navbar";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  const { userContext } = useContext(AuthContext);
  const [user] = userContext;

  const users = [
    {
      email: "frank.grace@gmail.com",
      firstName: "Grace",
      lastName: "Frank",
      role: "Admin",
    },
    {
      email: "Jimoh.Kaz@gmail.com",
      firstName: "Jimoh",
      lastName: "Kaz",
    },
    {
      email: "lawerence.vaghun@gmail.com",
      firstName: "Lawerence",
      lastName: "Vaghun",
    },
  ];

  return (
    <div style={{ background: "#F0FDFF", height: "100vh" }}>
      <Nav />
      <UsersTable data={users} />
    </div>
  );
};

export default UsersPage;
