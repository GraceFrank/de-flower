import React from "react";
import Loader from "../../components/Loader";
import { statuses } from "../../config/constants";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeletUserModal";
import CreateUserModal from "./CreateUserModal";

const { NEUTRAL, FAILURE, SUCCESS } = statuses;

const UserModal = ({
  state,
  handleCreateUser,
  handleEditUser,
  handleChange,
  handleDeleteUser,
  user,
  loading,
  status,
  handleModalClose,
}) => {
  const modalContent = {
    edit: {
      title: "Edit",
      content: <EditUserModal handleChange={handleChange} user={user} />,
      submitText: "Save Changes",
      handleSubmit: handleEditUser,
      errorMessage: "Updating",
      successMessage: "Updated",
    },
    delete: {
      title: "Delete",
      content: <DeleteUserModal user={user} />,
      submitText: "Delete User",
      handleSubmit: handleDeleteUser,
      errorMessage: "Deleting",
      successMessage: "Deleted",
    },

    create: {
      title: "Create",
      content: <CreateUserModal handleChange={handleChange} user={user} />,
      submitText: "Create User",
      handleSubmit: handleCreateUser,
      errorMessage: "Creating",
      successMessage: "Created",
    },
  };

  return (
    <div
      class="modal fade"
      id="create-user-modal"
      tabindex="-1"
      aria-labelledby="create-user-modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="create-user-modalLabel">
              {modalContent[state].title} a User
            </h5>
            <button
              type="button"
              onClick={handleModalClose}
              disabled={loading}
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {loading && <Loader />}

            {!loading && status === NEUTRAL && (
              <form onSubmit={modalContent[state].handleSubmit}>
                {modalContent[state].content}
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-info">
                    {modalContent[state].submitText}
                  </button>
                </div>
              </form>
            )}

            {!loading && status === SUCCESS && (
              <div>
                <h5 className="text-success">SUCCESS </h5>
                {modalContent[state].successMessage} User with email{" "}
                {user.email}
              </div>
            )}
            {!loading && status === FAILURE && (
              <div>
                <h5>FAILURE</h5>
                Error {modalContent[state].errorMessage} User
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
