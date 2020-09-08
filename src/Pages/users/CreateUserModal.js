import React from "react";

const CreateUserModal = ({ handleChange, user }) => {
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
    </>
  );
};

export default CreateUserModal;
