import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Nav from "../../components/Navbar";
import Header from "./Header";
import ActiveFlowers from "./ActiveFlowers";
import { flowerStatues } from "../../config/constants";
import { getFlowers } from "../../config/requests";

const { IN_PROGRESS, COMPLETED } = flowerStatues;

const FlowersPage = (props) => {
  const { tokenContext } = useContext(AuthContext);
  const [token] = tokenContext;

  //type of flowers to load, active or disabled flowers
  const [flowerStatus, setFlowerStatus] = useState(IN_PROGRESS);
  const [flowerData, setFlowerData] = useState([]);

  useEffect(() => {
    //!todo provide all flowers's context if needed
    getFlowers(token, flowerStatues).then((data) => {
      setFlowerData([...data]);
    });
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      <ActiveFlowers data={flowerData} />
    </div>
  );
};

export default FlowersPage;
