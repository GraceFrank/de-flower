import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Nav from "../../components/Navbar";
import Header from "./Header";
import ActiveFlowers from "./ActiveFlowers";

const FlowersPage = (props) => {
  return (
    <div>
      <Nav />
      <Header />
      <ActiveFlowers data={[1, 2, 3, 4, 6]} />
    </div>
  );
};

export default FlowersPage;
