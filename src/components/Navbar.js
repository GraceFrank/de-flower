import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { colors } from "../config/constants";
import { FLOWERS, USERS } from "../config/paths";
import { ReactComponent as ProfileIcon } from "../images/user.svg";

const { BASE_COLOR } = colors;

const NavBar = () => {
  const { userContext, tokenContext } = useContext(AuthContext);
  const [user, setUser] = userContext;
  const setToken = tokenContext[1];

  const menus = ["Flowers"];
  if (user.role) menus.push("Users");

  const logOut = () => {
    setToken("");
    setUser("");
  };

  const menuItems = menus.map((menu) => (
    <li className="nav-item active">
      <Link to={FLOWERS}>
        <a className="nav-link">{menu}</a>
      </Link>
    </li>
  ));

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${BASE_COLOR}`}>
      <a className="navbar-brand" href="#">
        De-Flower
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">{menuItems}</ul>

        <span className="navbar-text">
          <div className="dropdown">
            <a
              className="btn btn-info dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <ProfileIcon style={{ height: "20px", width: "25px" }} />
              {user.firstName}
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a onClick={logOut} className="dropdown-item text-dark" href="#">
                Log Out
              </a>
            </div>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
