import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { colors } from "../config/constants";
import { FLOWERS, USERS } from "../config/paths";
import { ReactComponent as ProfileIcon } from "../images/user.svg";

const { BASE_COLOR } = colors;

const NavBar = () => {
  const { userContext } = useContext(AuthContext);
  const [user] = userContext;

  const menus = ["Flowers"];
  if (user.role) menus.push("Users");

  const menuItems = menus.map((menu) => (
    <li class="nav-item active">
      <Link to={FLOWERS}>
        <a class="nav-link">{menu}</a>
      </Link>
    </li>
  ));

  return (
    <nav class={`navbar navbar-expand-lg navbar-dark bg-${BASE_COLOR}`}>
      <a class="navbar-brand" href="#">
        De-Flower
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">{menuItems}</ul>

        <span class="navbar-text">
          <div class="dropdown">
            <a
              class="btn btn-info dropdown-toggle"
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

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item text-dark" href="#">
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
