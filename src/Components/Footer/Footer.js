import React from "react";
import "./footer.css";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <FacebookIcon fontSize="large" />
        <InstagramIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <LinkedInIcon fontSize="large" />
      </div>
      <div className="footer__info">
        {" "}
        <div className="footer__contact">
          <h5>Contact</h5>
          <hr></hr>
          <ul>
            <li>
              <RoomIcon />
              2434 Southport Way Ste F National City, CA 91950{" "}
            </li>
            <li>
              <PhoneIcon />
              (619) 292-2830
            </li>
          </ul>
        </div>
        <div className="footer__personal">
          <h5>License</h5>
          <hr></hr>
          <ul>
            <li> *SCAC - EXMJ</li>
            <li> *US DOT Number - 1415704</li>
            <li> *Motor Carrier Number</li>
            <li> *48 State Authority</li>
            <li> *NVCBD Certified</li>
            <li> *License Insured Bonded</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
