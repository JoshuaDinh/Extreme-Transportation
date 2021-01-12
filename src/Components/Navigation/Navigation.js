import React, { useState, useEffect, useRef } from "react";
import navigation from "./navigation.css";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { ContactModal } from "../Contact/Contact";
import logo from "../../Images/logo.jpg";

const Navigation = ({ setModal, modal }) => {
  return (
    <div className="nav">
      <div className="nav__menu-icon">
        {/* <MenuIcon fontSize="large" style={{ color: "rgb(0, 45, 114)" }} /> */}
        <img className="logo" src={logo} alt="" />
      </div>
      <ul>
        {/* <li>
          <PhotoLibraryIcon />
          Gallery
        </li> */}
        <li onClick={() => setModal(true)}>
          <PhoneIcon />
          Contact
        </li>
      </ul>
      {modal && <ContactModal setModal={setModal} />}
    </div>
  );
};

export default Navigation;
