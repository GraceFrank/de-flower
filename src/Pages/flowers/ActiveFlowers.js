import React from "react";
import { Link } from "react-router-dom";
import Sunburst from "./sunburst";
import Spinner from "../../components/Spinner";
import { FLOWERS } from "../../config/paths";

const Flowers = ({ data, loading, viewFlowerDetails }) => {
  const flowers = data.map((item) => {
    return (
      <div className="col-lg-5 m-4 ml-10" key={item._id}>
        <Sunburst chartId={item._id} chartData={[item.flower]} />
        <Link to={`${FLOWERS}/${item._id}`}>
          <button type="button" className="btn btn-info  btn-sm">
            Details
          </button>
        </Link>
      </div>
    );
  });

  return (
    <div className="row">
      {!loading ? (
        flowers
      ) : (
        <div className="d-flex justifyContents-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Flowers;
