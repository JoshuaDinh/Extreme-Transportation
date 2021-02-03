import React, { useEffect, useRef } from "react";
import "./contact.css";
import logo from "../../Images/logo.jpg";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import application from "../../Images/application.pdf";

export const ContactModal = ({ setModal }) => {
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref?.current?.contains(event.target)) {
        return;
      }
      setModal(false);
    };
    document.body.addEventListener("click", onBodyClick);
    // removes/turns off event listener / when removing dropdown on app.js ref.current can no longer be refered to (creates error with null.contains)
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, [setModal]);
  return (
    <div className="contact__container">
      <div ref={ref} className="contact">
        <img className="logo__contact" src={logo} alt="" />
        <h2 className="contact__address">
          Extreme Transportation 2434 Southport Way Ste F National City, CA
          91950
        </h2>
        <div className="contact__phone">
          <h1 className="contact__phone-desc">Call us today</h1>
          <a href="tel:6192922830" type="tel">
            <h1>(619)292-2830</h1>
          </a>
        </div>{" "}
        <a className="application" href={application} download>
          <PictureAsPdfIcon />
          Application
        </a>
      </div>
    </div>
  );
};
