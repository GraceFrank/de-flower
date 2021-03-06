import React from "react";
import { ReactComponent as AdminIcon } from "../../images/superAdmin.svg";
import { ReactComponent as StaffIcon } from "../../images/staff.svg";

const iconStyle = { height: "70px", width: "70px", marginRight: "20px" };

export default ({ user }) => {
  const { role, firstName, lastName, email } = user;

  return (
    <div style={{ background: "#F0FDFF" }}>
      <div key={user._id} class="card my-4">
        <div class="card-body">
          <div className="d-flex">
            <div>
              {role ? (
                <AdminIcon style={iconStyle} />
              ) : (
                <StaffIcon style={iconStyle} />
              )}
            </div>
            <div
              style={{ marginLeft: "20px", minWidth: "85%" }}
              className=" d-flex justify-content-between align-items-center"
            >
              <div>
                <h4 className="text-dark">
                  {firstName}&nbsp;{lastName}
                </h4>
                <h6 className="font-italic text-dark">{email}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
