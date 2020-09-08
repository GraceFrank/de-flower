import React from "react";
import Loader from "../../components/Loader";
import { statuses } from "../../config/constants";

const { NEUTRAL, FAILURE, SUCCESS } = statuses;

const ProfileModal = ({
  handleChangePassword,
  handleChange,
  user,
  loading,
  status,
  handleModalClose,
}) => {
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
              Change Password
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
              <form onSubmit={handleChangePassword}>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    onChange={handleChange}
                    value={user.password}
                    type="password"
                    class="form-control"
                    id="password"
                  />
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    onChange={handleChange}
                    value={user.password1}
                    type="password"
                    class="form-control"
                    id="password1"
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
                  <button
                    disabled={
                      !user.password || user.password !== user.password1
                    }
                    type="submit"
                    class="btn btn-info"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            )}

            {!loading && status === SUCCESS && (
              <div>
                <h5 className="text-success">SUCCESS </h5>
                Password Updated
              </div>
            )}
            {!loading && status === FAILURE && (
              <div>
                <h5>FAILURE</h5>
                Error updating password. Try again later!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
