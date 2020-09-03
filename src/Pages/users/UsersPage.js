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

  const handleCreateUser = () => {};

  return (
    <div style={{ background: "#F0FDFF", height: "100vh" }}>
      <Nav />
      <div
        style={{ height: "80px" }}
        className="shadow-sm bg-white container-fluid w-100"
      >
        <div className=" container d-flex h-100 justify-content-between align-items-center ">
          <h3 className="text-dark">Users</h3>
          <button type="button" className="btn btn-info  btn-sm">
            + Create User
          </button>
        </div>
      </div>
      <div className="container-fluid ">
        <div style={{ background: "#F0FDFF" }} className="w-80">
          <UsersTable data={users} />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
