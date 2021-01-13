import React, { useState } from "react";
import navigation from "./navigation.css";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { ContactModal } from "../Contact/Contact";
import logo from "../../Images/logo.jpg";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const Navigation = ({ setModal, modal }) => {
  const [nav, setNav] = useState(false);

  return (
    <div className="nav">
      <div className="nav__menu-icon">
        {/* <MenuIcon fontSize="large" style={{ color: "rgb(0, 45, 114)" }} /> */}
        <img className="logo" src={logo} alt="" />
      </div>
      <ul className="nav-ul">
        <Link to="/">
          <HomeIcon />
          Home
        </Link>
        <Link to="/gallery">
          <PhotoLibraryIcon />
          Gallery
        </Link>
        <a href="tel:123-456-7890">
          <PhoneIcon />
          619-292-2830
        </a>
      </ul>
      {modal && <ContactModal setModal={setModal} />}
      <div className="mobile-nav-icon">
        <MenuIcon onClick={() => setNav(!nav)} />{" "}
      </div>
      {nav && (
        <ul className="mobile-nav">
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
          <Link to="/gallery">
            <PhotoLibraryIcon />
            Gallery
          </Link>
          <a className="phone" href="tel:123-456-7890">
            <PhoneIcon />
            619-292-2830
          </a>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
