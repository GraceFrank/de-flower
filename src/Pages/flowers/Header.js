import React from "react";

const Header = () => {
  return (
    <div
      style={{ height: "80px" }}
      className="shadow-sm bg-white container-fluid w-100"
    >
      <div className=" container d-flex h-100 justify-content-between align-items-center ">
        <h3 className="text-dark">Active Flowers</h3>
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
