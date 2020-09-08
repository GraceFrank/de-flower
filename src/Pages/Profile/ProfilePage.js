import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Nav from "../../components/Navbar";
import Profile from "./Profle";
import { updateUser } from "../../config/requests";
import ProfileModal from "./ProfileModal";
import { statuses } from "../../config/constants";

const { NEUTRAL, SUCCESS, FAILURE } = statuses;

const ProfilePage = () => {
  const { tokenContext, userContext } = useContext(AuthContext);
  const [token] = tokenContext;
  const [user] = userContext;

  const initialUserObj = { id: user._id };
  const [modalLoading, setModalLoading] = useState(false);
  const [newUser, setNewUser] = useState({ ...initialUserObj });
  const [modalStatus, setModalStatus] = useState(NEUTRAL);

  const handleInputChange = (event) => {
    const { value, id } = event.target;
    setNewUser({ ...newUser, [id]: value });
  };

  const handleCloseCreateUserModal = () => {
    setModalStatus(NEUTRAL);
    setNewUser({ ...initialUserObj });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setModalLoading(true);
    delete newUser.password1;
    newUser._id = user._id;
    updateUser(token, newUser)
      .then(() => {
        setModalLoading(false);
        setModalStatus(SUCCESS);
        setNewUser({ ...initialUserObj });
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
          <h3 className="text-dark">Profile</h3>
          <button
            type="button"
            className="btn btn-info  btn-sm"
            data-toggle="modal"
            data-target="#create-user-modal"
          >
            Change Password
          </button>
        </div>
      </div>
      <div className="container-fluid ">
        <div style={{ background: "#F0FDFF" }} className="w-80">
          <Profile user={user} />
        </div>
      </div>

      <ProfileModal
        handleChange={handleInputChange}
        user={newUser}
        loading={modalLoading}
        status={modalStatus}
        handleModalClose={handleCloseCreateUserModal}
        handleChangePassword={handleChangePassword}
      />
    </div>
  );
};

export default ProfilePage;
