import React from "react";
import { Link } from "react-router-dom";
import { FLOWERS } from "../config/paths";
import { colors } from "../config/constants";

export default () => (
  <div
    className={` bg-${colors.BASE_COLOR} h-100 d-flex justify-content-center align-items-center`}
  >
    <div className="text-center">
      <h1 className="text-white">404</h1>
      <p className="text-white">The page you are looking for does not exist</p>
      <p>
        <Link to={FLOWERS}>
          <a className="text-white">Back To Home</a>
        </Link>
      </p>
    </div>
  </div>
);
