import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Nav from "../../components/Navbar";
import Header from "./Header";
import ActiveFlowers from "./ActiveFlowers";
import { flowerStatues } from "../../config/constants";
import { getFlowers, addNames } from "../../config/requests";
import AddNamesModal from "./AddNamesModal";
import { statuses } from "../../config/constants";

const { NEUTRAL, FAILURE, SUCCESS } = statuses;
const { IN_PROGRESS, COMPLETED } = flowerStatues;

const FlowersPage = (props) => {
  const { tokenContext } = useContext(AuthContext);

  const [token] = tokenContext;

  //type of flowers to load, active or disabled flowers
  const [flowerStatus, setFlowerStatus] = useState(IN_PROGRESS);
  const [flowerData, setFlowerData] = useState([]);
  const [loadingFlowers, setLoadingFlowers] = useState(false);

  const [addingNames, setAddingNames] = useState(false);
  const [addingNamesStatus, setAddingNamesStatus] = useState(NEUTRAL);
  const [namesToAdd, setNamesToAdd] = useState(new Set());
  const [currentName, setCurrentName] = useState("");
  const handleSubmitNames = (e) => {
    e.preventDefault();
    setAddingNames(true);
    addNames(token, [...namesToAdd])
      .then(() => {
        setAddingNames(false);
        setAddingNamesStatus(SUCCESS);
        loadFlowers(token, setLoadingFlowers, flowerStatus, setFlowerData);
      })
      .catch(() => {
        setAddingNames(false);
        setAddingNamesStatus(FAILURE);
      });
  };

  const handleInputChange = (event) => {
    setCurrentName(event.target.value);
  };

  const handleAddNames = () => {
    setNamesToAdd(new Set([...namesToAdd, currentName]));
  };

  const handleRemoveName = (name) => {
    const currentNames = new Set(namesToAdd);
    currentNames.delete(name);
    setNamesToAdd(currentNames);
  };

  const handleCloseAddNamesModal = () => {
    setAddingNamesStatus(NEUTRAL);
    setNamesToAdd(new Set());
  };

  useEffect(() => {
    //!todo provide all flowers's context if needed
    setLoadingFlowers(true);
    getFlowers(token, flowerStatus).then((data) => {
      setFlowerData([...data]);
      setLoadingFlowers(false);
    });
  }, [flowerStatus]);

  return (
    <div>
      <Nav />
      <Header flowerStatus={flowerStatus} setFlowerStatus={setFlowerStatus} />
      <ActiveFlowers data={flowerData} loading={loadingFlowers} />
      <AddNamesModal
        currentName={currentName}
        handleSubmit={handleSubmitNames}
        handleAddNames={handleAddNames}
        handleChange={handleInputChange}
        data={[...namesToAdd]}
        loading={addingNames}
        status={addingNamesStatus}
        handleModalClose={handleCloseAddNamesModal}
        handleRemoveName={handleRemoveName}
      />
    </div>
  );
};

function loadFlowers(token, setLoadingFlowers, flowerStatus, setFlowerData) {
  setLoadingFlowers(true);
  getFlowers(token, flowerStatus).then((data) => {
    setFlowerData([...data]);
    setLoadingFlowers(false);
  });
}

export default FlowersPage;
