import React from "react";
import "./missionstatement.css";
import ScheduleIcon from "@material-ui/icons/Schedule";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import RoomServiceIcon from "@material-ui/icons/RoomService";

export const MissionStatement = () => {
  return (
    <section className="missionstatement">
      {" "}
      <div className="mission-header">
        <p>Mission </p>
      </div>
      <div className="circle-container">
        <div className="circle">
          <RoomServiceIcon className="circle-icon" />
          <p>Superior Service</p>
        </div>
        <div className="circle">
          {" "}
          <ScheduleIcon className="circle-icon" />
          <p>Always on time</p>
        </div>
        <div className="circle">
          <SettingsApplicationsIcon className="circle-icon" />
          <p>Damage Free</p>
        </div>
      </div>{" "}
      <div className="mission-text">
        {" "}
        <p>
          Become a valued member of our Extreme Transportation family! Drivers
          and employees are not just a number to us, but an integral asset to
          our company&#39;s success.
        </p>
      </div>
    </section>
  );
};
