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
      <p className="footer-contact-button">Contact</p>
      <div className="footer-content">
        <div className="footer-contact">
          <h5 className="footer-contact-header">Contact</h5>
          <p>2434 Southport Way Ste F National City, CA 91950</p>
          <p>(619) 292-2830</p>
          <div className="footer__icons">
            <FacebookIcon className="facebook-icon" fontSize="large" />
            <InstagramIcon className="instagram-icon" fontSize="large" />
            <TwitterIcon className="twitter-icon" fontSize="large" />
            <LinkedInIcon className="linkedin-icon" fontSize="large" />
          </div>
        </div>
        <div className="footer-personal">
          <h5 className="footer-personal-header">License</h5>
          <ul className="footer-personal-list">
            <li className="footer-personal-list-item"> *SCAC - EXMJ</li>
            <li className="footer-personal-list-item">
              *US DOT Number - 1415704
            </li>
            <li className="footer-personal-list-item">
              *Motor Carrier Number - 535840B
            </li>
            <li className="footer-personal-list-item"> *48 State Authority</li>
            <li className="footer-personal-list-item">
              *License - Insured - Bonded
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="footer__icons">
        <FacebookIcon className="facebook-icon" fontSize="large" />
        <InstagramIcon className="instagram-icon" fontSize="large" />
        <TwitterIcon className="twitter-icon" fontSize="large" />
        <LinkedInIcon className="linkedin-icon" fontSize="large" />
      </div> */
}
