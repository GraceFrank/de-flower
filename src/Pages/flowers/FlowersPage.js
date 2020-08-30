import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Nav from "../../components/Navbar";

const FlowersPage = (props) => {
  const { userContext } = useContext(AuthContext);
  const [user] = userContext;

  return (
    <div>
      <Nav />
    </div>
  );
};

export default FlowersPage;
