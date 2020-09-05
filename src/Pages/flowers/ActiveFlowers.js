import React from "react";
import { colors } from "../../config/constants";
import Sunburst from "./sunburst";
import Spinner from "../../components/Spinner";
const { BASE_COLOR_CODE, ADMIN_COLOR_CODE, USER_COLOR_CODE } = colors;

const Flowers = ({ data }) => {
  const flowers = data.map((item) => {
    return (
      <div key={item._id}>
        <Sunburst chartId={item._id} chartData={[item.flower]} />
      </div>
    );
  });

  return <div>{data.length ? flowers : <Spinner />}</div>;
};

export default Flowers;
