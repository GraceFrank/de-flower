import React from "react";
import { ReactComponent as AdminIcon } from "../../images/superAdmin.svg";
import { ReactComponent as StaffIcon } from "../../images/staff.svg";

const iconStyle = { height: "20px", width: "25px" };

export default ({ data, handleEdit, handleDelete }) => {
  const users = data.map((user) => {
    const { email, firstName, lastName, role } = user;
    return (
      <tr key={email}>
        <th scope="row" key={`${email}role`}>
          {role ? (
            <AdminIcon style={iconStyle} />
          ) : (
            <StaffIcon style={iconStyle} />
          )}
        </th>
        <td key={`${email}fn`}>{firstName}</td>
        <td key={`${email}ln`}>{lastName}</td>
        <td key={`${email}email`}>{email}</td>
        <td key={`${email}edit`}>
          <button
            onClick={() => handleDelete(user)}
            type="button"
            className="btn btn-outline-danger"
          >
            Danger
          </button>
        </td>
        <td key={`${email}delete`}>
          <button
            onClick={() => handleEdit(user)}
            type="button"
            className="btn btn-info"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ background: "white" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{users}</tbody>
      </table>
    </div>
  );
};
