import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Nav from "../../components/Navbar";
import UsersTable from "./UsersTable";
import { getAllUsers, createUser } from "../../config/requests";
import CreateUserModal from "./createUserModal";
import { statuses } from "../../config/constants";

const { NEUTRAL, SUCCESS, FAILURE } = statuses;

const UsersPage = () => {
  const { tokenContext } = useContext(AuthContext);
  const [token] = tokenContext;

  //load all users in the Begining
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //!todo provide all user's context if needed
    loadUsers(token, setUsers);
  }, []);

  //Create User
  const [creatingUser, setCreatingUser] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [creatingUserStatus, setCreatingUserStatus] = useState(NEUTRAL);
  const handleCreateUser = (e) => {
    e.preventDefault();
    setCreatingUser(true);
    createUser(token, newUser)
      .then(() => {
        setCreatingUser(false);
        setCreatingUserStatus(SUCCESS);
        loadUsers(token, setUsers);
      })
      .catch(() => {
        setCreatingUser(false);
        setCreatingUserStatus(FAILURE);
      });
  };

  const handleInputChange = (event) => {
    const { value, id } = event.target;
    console.log("IDDDDDDDD", id, value);
    setNewUser({ ...newUser, [id]: value });
  };

  const handleCloseCreateUserModal = () => {
    setCreatingUserStatus(NEUTRAL);
    setNewUser({});
  };

  return (
    <div style={{ background: "#F0FDFF", height: "100vh" }}>
      <Nav />
      <div
        style={{ height: "80px" }}
        className="shadow-sm bg-white container-fluid w-100"
      >
        <div className=" container d-flex h-100 justify-content-between align-items-center ">
          <h3 className="text-dark">Users</h3>
          <button
            type="button"
            className="btn btn-info  btn-sm"
            data-toggle="modal"
            data-target="#create-user-modal"
          >
            + Create User
          </button>
        </div>
      </div>
      <div className="container-fluid ">
        <div style={{ background: "#F0FDFF" }} className="w-80">
          <UsersTable data={users} />
        </div>
      </div>
      <CreateUserModal
        handleCreateUser={handleCreateUser}
        handleChange={handleInputChange}
        user={newUser}
        loading={creatingUser}
        status={creatingUserStatus}
        handleModalClose={handleCloseCreateUserModal}
      />
    </div>
  );
};

function loadUsers(token, setUsers) {
  getAllUsers(token).then((data) => {
    setUsers(data);
  });
}

export default UsersPage;
