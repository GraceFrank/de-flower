import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Nav from "../../components/Navbar";
import UsersTable from "./UsersTable";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../config/requests";
import UserModal from "./UserModal";
import { statuses } from "../../config/constants";

const { NEUTRAL, SUCCESS, FAILURE } = statuses;

const UsersPage = () => {
  const { tokenContext, userContext } = useContext(AuthContext);
  const [token] = tokenContext;
  const [user] = userContext;

  //load all users in the Begining
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //!todo provide all user's context if needed
    loadUsers(token, setUsers);
  }, []);

  const [modalState, setModalState] = useState("create");
  //Create User
  const [modalLoading, setModalLoading] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [modalStatus, setModalStatus] = useState(NEUTRAL);
  const handleCreateUser = (e) => {
    e.preventDefault();
    setModalLoading(true);
    createUser(token, newUser)
      .then(() => {
        setModalLoading(false);
        setModalStatus(SUCCESS);
        loadUsers(token, setUsers);
        setNewUser({});
      })
      .catch(() => {
        setModalLoading(false);
        setModalStatus(FAILURE);
      });
  };

  const handleInputChange = (event) => {
    const { value, id } = event.target;
    console.log(value, id);
    console.log(newUser);
    setNewUser({ ...newUser, [id]: value });
  };

  const handleCloseCreateUserModal = () => {
    setModalStatus(NEUTRAL);
    setNewUser({});
  };

  const handleDeleteUser = (e) => {
    e.preventDefault();
    setModalLoading(true);
    deleteUser(token, newUser._id)
      .then(() => {
        setModalLoading(false);
        setModalStatus(SUCCESS);
        loadUsers(token, setUsers);
        setNewUser({});
      })
      .catch(() => {
        setModalLoading(false);
        setModalStatus(FAILURE);
      });
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    setModalLoading(true);
    updateUser(token, newUser)
      .then(() => {
        setModalLoading(false);
        setModalStatus(SUCCESS);
        loadUsers(token, setUsers);
        setNewUser({});
      })
      .catch(() => {
        setModalLoading(false);
        setModalStatus(FAILURE);
      });
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
          <UsersTable
            data={users}
            setUser={setNewUser}
            loggedInUser={user.email}
            setModalState={setModalState}
          />
        </div>
      </div>
      <UserModal
        state={modalState}
        handleCreateUser={handleCreateUser}
        handleChange={handleInputChange}
        user={newUser}
        loading={modalLoading}
        status={modalStatus}
        handleModalClose={handleCloseCreateUserModal}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
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
