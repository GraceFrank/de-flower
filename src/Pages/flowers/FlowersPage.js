import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const FlowersPage = (props) => {
  const { userContext } = useContext(AuthContext);
  const [user] = userContext;

  return (
    <div>
      <h1 className="text-info">{user.email}</h1>
    </div>
  );
};

export default FlowersPage;
