import React from "react";
import Loader from "../../components/Loader";
import { statuses } from "../../config/constants";

const { NEUTRAL, FAILURE, SUCCESS } = statuses;

const EditUserModal = ({
  handleCreateUser,
  handleChange,
  user,
  loading,
  status,
  handleModalClose,
}) => {
  return (
    <div
      class="modal fade"
      id="edit-user-modal"
      tabindex="-1"
      aria-labelledby="edit-user-modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="edit-user-modalLabel">
              Edit User
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
              <form onSubmit={handleCreateUser}>
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input
                    onChange={handleChange}
                    value={user.firstName}
                    type="text"
                    class="form-control"
                    id="firstName"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="lastName">LastName</label>
                  <input
                    onChange={handleChange}
                    value={user.lastName}
                    type="text"
                    class="form-control"
                    id="lastName"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    onChange={handleChange}
                    value={user.email}
                    type="email"
                    class="form-control"
                    id="email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    onChange={handleChange}
                    value={user.password}
                    type="password"
                    class="form-control"
                    id="password"
                    required
                  />
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-info">
                    Create User
                  </button>
                </div>
              </form>
            )}

            {!loading && status === SUCCESS && (
              <div>
                <h5 className="text-success">SUCCESS </h5>
                Created User with email {user.email}
              </div>
            )}
            {!loading && status === FAILURE && (
              <div>
                <h5>FAILURE</h5>
                Error creating User
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
