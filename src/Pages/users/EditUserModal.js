import React from "react";

const EditUserModal = ({ handleChange, user }) => {
  return (
    <>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          onChange={handleChange}
          value={user.firstName}
          type="text"
          class="form-control"
          id="firstName"
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
        />
      </div>

      <div class="form-group">
        <label for="email">Email address</label>
        <input
          disabled
          value={user.email}
          type="email"
          class="form-control"
          id="email"
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
        />
        <small id="passwordHelpBlock" class="form-text text-muted">
          Note! Edit only if you want to change User's Password
        </small>
      </div>
    </>
  );
};

export default EditUserModal;
