import React from "react";
import navigation from "./navigation.css";
import MenuIcon from "@material-ui/icons/Menu";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__menu-icon">
        <MenuIcon fontSize="large" style={{ color: "white" }} />
      </div>
      <ul>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navigation;
