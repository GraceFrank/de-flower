import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "../../components/Spinner";
import Sunburst from "./sunburst";
import Nav from "../../components/Navbar";
import { getFlowerById } from "../../config/requests";
import { FLOWERS } from "../../config/paths";

const ViewFlowerPage = (props) => {
  const { tokenContext } = useContext(AuthContext);
  const [token] = tokenContext;
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [flower, setFlower] = useState("");

  useEffect(() => {
    //!todo provide all flowers's context if needed
    setLoading(true);
    getFlowerById(token, id).then((data) => {
      setFlower({ ...flower, ...data });
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      {loading && Spinner}
      {!loading && flower && (
        <>
          <di>
            {" "}
            <Sunburst
              chartId={flower.flower._id}
              chartData={[flower.flower.flower]}
            />
          </di>
          <div>
            <h4>Parent</h4>
            <Sunburst
              chartId={flower.parent._id}
              chartData={[flower.parent.flower]}
            />
          </div>
          <div className="d-flex">
            {/* <Children children={flower.children}/> */}
          </div>
        </>
      )}
    </div>
  );
};

function Header() {
  return (
    <div
      style={{ height: "80px" }}
      className="shadow-sm bg-white container-fluid w-100"
    >
      <div className=" container d-flex h-100 align-items-center ">
        <Link to={FLOWERS}>
          <button type="button" className="btn btn-info  btn-sm">
            &larr; Flowers
          </button>
        </Link>
      </div>
    </div>
  );
}

function Children(children) {
  return children.map((child) => (
    <Sunburst chartId={child._id} chartData={[child.flower]} key={child._id} />
  ));
}
export default ViewFlowerPage;
