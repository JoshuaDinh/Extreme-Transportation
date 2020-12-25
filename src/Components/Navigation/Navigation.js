import React from "react";
import navigation from "./navigation.css";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__menu-icon">
        <MenuIcon fontSize="large" style={{ color: "rgb(0, 45, 114)" }} />
      </div>
      <ul>
        <li>
          <PhotoLibraryIcon />
          Gallery
        </li>
        <li>
          <PhoneIcon />
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
