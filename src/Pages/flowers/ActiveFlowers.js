import React from "react";
import { colors } from "../../config/constants";
import Sunburst from "./sunburst";
import Spinner from "../../components/Spinner";
const { BASE_COLOR_CODE, ADMIN_COLOR_CODE, USER_COLOR_CODE } = colors;

const Flowers = ({ data, loading }) => {
  const flowers = data.map((item) => {
    return (
      <div className="m-4" key={item._id}>
        <Sunburst chartId={item._id} chartData={[item.flower]} />
      </div>
    );
  });

  return <div className="">{!loading ? flowers : <Spinner />}</div>;
};

export default Flowers;
