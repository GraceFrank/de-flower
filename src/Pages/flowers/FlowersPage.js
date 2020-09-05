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
  const [loadingFlowers, setLoadingFlowers] = useState(false);

  useEffect(() => {
    //!todo provide all flowers's context if needed
    setLoadingFlowers(true)
    getFlowers(token, flowerStatus).then((data) => {
      setFlowerData([...data]);
      setLoadingFlowers(false)
    });
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      <ActiveFlowers data={flowerData} loading={loadingFlowers} />
    </div>
  );
};

export default FlowersPage;
