import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Nav from "../../components/Navbar";
import UsersTable from "./UsersTable";
import { getAllUsers } from "../../config/requests";

const UsersPage = () => {
  const { userContext, tokenContext } = useContext(AuthContext);
  const [user] = userContext;
  const [token] = tokenContext;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    //!todo provide all user's context if needed
    getAllUsers(token).then((data) => {
      setUsers(data);
    });
  });

  return (
    <div style={{ background: "#F0FDFF", height: "100vh" }}>
      <Nav />
      <div className="container-fluid p-4">
        <div className="container p-4 bg-white">
          <UsersTable data={users} />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
