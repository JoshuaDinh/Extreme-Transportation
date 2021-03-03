import React from "react";
import "./sectionone.css";
import truck from "../../Images/3.jpeg";

export const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="section-one-image-container">
        <img className="section-one-img" src={truck}></img>
      </div>
      <div className="section-one-content">
        <h2 className="section-one-header">Mission</h2>
        <p className="section-one-sub-header">
          Superior - Always On Time - Damage free
        </p>
        <p className="section-one-text">
          Become a valued member of our Extreme Transportation family! Drivers
          and employees are not just a number to us, but an integral asset to
          our company's success
        </p>
      </div>
    </div>
  );
};
