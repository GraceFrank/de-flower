import React from "react";
import { colors } from "../../config/constants";
import Sunburst from "./sunburst";
const { BASE_COLOR_CODE, ADMIN_COLOR_CODE, USER_COLOR_CODE } = colors;

const Flowers = (data) => {
  return (
    <div>
      <Sunburst chartId="david" chartData={getChartData()} />
      <Sunburst chartId="emmanuel" chartData={getChartData()} />
    </div>
  );
};

function getChartData() {
  return [
    {
      name: "Kazeem",
      color: "#6b2f00",
      children: [
        {
          name: "Dare",
          children: [
            {
              name: "Sodeeq",
              children: [
                {
                  name: "Mirabel",
                  value: 1000,
                },
                {
                  name: "Charles",
                  value: 1000,
                },
              ],
            },
            {
              name: "Grace",
              children: [
                {
                  name: "Kado",
                  value: 1000,
                },
                {
                  name: "Demi",
                  value: 1000,
                },
              ],
            },
          ],
        },
        {
          name: "Taiwo",
          children: [
            {
              name: "Yemi",
              children: [
                {
                  name: "Victor",
                  value: 1000,
                },
                {
                  name: "Eniola",
                  value: 1000,
                },
              ],
            },
            {
              name: "Oyin",
              children: [
                {
                  name: "Zidane",
                  value: 1000,
                },
                {
                  name: "Neyo",
                  value: 1000,
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}

export default Flowers;
