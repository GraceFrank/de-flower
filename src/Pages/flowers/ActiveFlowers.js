import React from "react";
import {Link} from 'react-router-dom'
import Sunburst from "./sunburst";
import Spinner from "../../components/Spinner";
import {FLOWERS} from '../../config/paths'

const Flowers = ({ data, loading, viewFlowerDetails }) => {
  const flowers = data.map((item) => {
    return (
      <div className="m-4" key={item._id}>
        <Link to={`${FLOWERS}/${item._id}`}>
        <button
          type="button"
          className="btn btn-info  btn-sm"
        >
          Details
        </button>  
        </Link>
        <Sunburst chartId={item._id} chartData={[item.flower]} />
        
            </div>
    );
  });

  return <div className="">{!loading ? flowers : <div className="d-flex justifyContents-center"><Spinner /></div> }</div>;
};

export default Flowers;
