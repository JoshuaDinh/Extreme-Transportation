import React, { useState } from "react";
import "./navigation.css";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { ContactModal } from "../Contact/Contact";
import logo from "../../Images/logo.jpg";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import application from "../../Images/application.pdf";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const Navigation = ({ setModal, modal }) => {
  const [nav, setNav] = useState(false);

  return (
    <div className="nav">
      <div className="nav__menu-icon">
        {/* <MenuIcon fontSize="large" style={{ color: "rgb(0, 45, 114)" }} /> */}
        <img className="logo" src={logo} alt="" />
      </div>
      <ul className="nav-ul">
        <Link className="link-tag" to="/extremetransportation">
          <HomeIcon />
          Home
        </Link>
        <Link className="link-tag" to="/gallery">
          <PhotoLibraryIcon />
          Gallery
        </Link>
        <a className="application-nav" href={application} download>
          <PictureAsPdfIcon />
          Application
        </a>
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
          <Link className="link-tag" to="/extremetransportation">
            <HomeIcon />
            Home
          </Link>
          <Link className="link-tag" to="/gallery">
            <PhotoLibraryIcon />
            Gallery
          </Link>
          <a href={application} download>
            application
          </a>
          <a className="link-tag" href="tel:123-456-7890">
            <PhoneIcon />
            619-292-2830
          </a>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
