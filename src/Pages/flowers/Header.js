import React from "react";
import { flowerStatues } from "../../config/constants";
const { COMPLETED, IN_PROGRESS } = flowerStatues;

const Header = ({ flowerStatus, setFlowerStatus }) => {
  return (
    <div
      style={{ height: "80px" }}
      className="shadow-sm bg-white container-fluid w-100"
    >
      <div className=" container d-flex h-100 justify-content-between align-items-end ">
        <div className=" d-flex ">
          <h3 className="text-dark mr-5">Flowers</h3>

          <ul class="nav nav-tabs ">
            <li onClick={() => setFlowerStatus(IN_PROGRESS)} class="nav-item">
              <a
                class={`nav-link ${flowerStatus === IN_PROGRESS && "active"}`}
                href="#"
              >
                In Progress
              </a>
            </li>
            <li onClick={() => setFlowerStatus(COMPLETED)} class="nav-item">
              <a
                class={`nav-link ${flowerStatus === COMPLETED && "active"}`}
                href="#"
              >
                Completed
              </a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="btn btn-info  btn-sm"
          data-toggle="modal"
          data-target="#add-name-modal"
        >
          + Add Names
        </button>
      </div>
    </div>
  );
};

export default Header;
