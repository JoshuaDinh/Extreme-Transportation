import React from "react";
import "./sectionthree.css";
import truck from "../../Images/corevalues.jpeg";

export const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="section-three-content">
        <h2 className="section-three-header">Core Values</h2>
        <p className="section-three-sub-header">
          Loyalty - Quality - Integrity - Honor - Service
        </p>
        <p className="section-three-text">
          Our values define our company. We will apply these values to our
          everyday decisions, actions and activities. Our Reputation is of vital
          importance to us. We take ourselves and our mission seriously.
        </p>
      </div>
      <div className="section-three-image-container">
        <img className="section-three-img" src={truck}></img>
      </div>
    </div>
  );
};
