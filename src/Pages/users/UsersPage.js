import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const UsersPage = (props) => {
  const { userContext } = useContext(AuthContext);
  const [user] = userContext;

  return (
    <div>
      <Nav />
    </div>
  );
};

export default UsersPage;
