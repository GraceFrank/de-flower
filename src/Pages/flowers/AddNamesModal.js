import React from "react";
import Loader from "../../components/Loader";
import { statuses } from "../../config/constants";
import { ReactComponent as PlusIcon } from "../../images/more.svg";

const { NEUTRAL, FAILURE, SUCCESS } = statuses;

const CreateUserModal = ({
  handleSubmit,
  handleChange,
  handleAddNames,
  currentName,
  data,
  loading,
  status,
  handleModalClose,
  handleRemoveName,
}) => {
  const namesToAdd = data.map((name) => (
    <li class="list-group-item d-flex justify-content-between">
      {name}
      <span>
        <button
          onClick={() => handleRemoveName(name)}
          type="button"
          class="btn btn-danger btn-sm" 
        >
          -
        </button>
      </span>
    </li>
  ));

  return (
    <div
      class="modal fade"
      id="add-name-modal"
      tabindex="-1"
      aria-labelledby="add-name-modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          {/* title */}
          <div class="modal-header">
            <h5 class="modal-title" id="add-name-modalLabel">
              AddNames
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

          {/* content */}
          <div class="modal-body">
            {!loading && status === NEUTRAL && (
              <>
                <ul class="list-group list-group-flush">{namesToAdd}</ul>
                <form onSubmit={handleSubmit} className="my-4">
                  <div class="row">
                    <div class="col">
                      <input
                        onChange={handleChange}
                        type="text"
                        id="to-add-names"
                        class="form-control col-md-12"
                        placeholder="Johnny Drill"
                      />
                    </div>
                    <div class="col col-md-2">
                      <button
                        onClick={handleAddNames}
                        type="button"
                        disabled={!currentName}
                        class="btn btn-outline-info"
                      >
                        <PlusIcon
                          style={{
                            height: "20px",
                            width: "20px",
                            background: "white",
                          }}
                        />
                      </button>
                    </div>
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
                      type="submit"
                      class="btn btn-info"
                      disabled={data.length < 1}
                    >
                      Add Names
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* other renders */}
            {loading && <Loader />}
            {!loading && status === SUCCESS && (
              <div>
                <h5 className="text-success">SUCCESS </h5>
                Successfully Added Names
              </div>
            )}
            {!loading && status === FAILURE && (
              <div>
                <h5>FAILURE</h5>
                Error Adding Names Try Again Later
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;
