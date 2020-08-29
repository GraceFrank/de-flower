import React from "react";

const LoginForm = ({ handleSubmit, handleChange, email, password }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={email}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
          value={password}
          required
        />
      </div>

      <button type="submit" className="btn btn-info  btn-block">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
