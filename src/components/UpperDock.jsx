import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppleLogo from "../images/icons/apple-logo.png";
import macSoundLogo from "../images/icons/macSound.png";
import macControlCenterLogo from "../images/icons/macControlCenter.png";

const DockTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to update the current time every second
    const updateClock = () => {
      const currentDate = new Date();
      const day = currentDate.toLocaleString("en-US", { weekday: "short" });
      const date = currentDate.getDate();
      const month = currentDate.toLocaleString("en-US", { month: "short" });
      const hours = currentDate.getHours().toString().padStart(2, "0");
      const minutes = currentDate.getMinutes().toString().padStart(2, "0");
      const seconds = currentDate.getSeconds().toString().padStart(2, "0");
      const formattedTime = `${day} ${date} ${month} ${hours}:${minutes}:${seconds}`;
      setCurrentTime(formattedTime);
    };

    // Update the clock immediately and then every second
    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return <div className="menu-time">{currentTime}</div>;
};

const DockLeft = () => (
  <div className="left">
    <img alt="" src={AppleLogo} className="apple-logo"></img>
    <span className="menus active">Finder</span>
    <span className="menus">File</span>
    <span className="menus">Edit</span>
    <span className="menus">View</span>
    <span className="menus">Go</span>
    <span className="menus">Window</span>
    <span className="menus">Help</span>
  </div>
);

const DockRight = () => (
  <div className="right">
    <div className="menu-ico">
      <img alt="" src={macSoundLogo} className="vol"></img>
    </div>
    <div className="menu-ico">
      <i className="fab fa-bluetooth-b"></i>
    </div>
    <div className="menu-ico">
      <i className="fas fa-battery-half"></i>
    </div>
    <div className="menu-ico">
      <i className="fas fa-wifi"></i>
    </div>
    <div className="menu-ico">
      <i className="fas fa-search"></i>
    </div>
    <div className="menu-ico">
      <img alt="" src={macControlCenterLogo} className="control-center"></img>
    </div>
    <a
      href="https://github.com/psychoSherlock"
      rel="noreferrer"
      target="_blank"
    >
      <div className="menu-ico">
        <i className=" fa-brands fa-github"></i>
      </div>
    </a>

    <DockTime />
  </div>
);

function UpperDock() {
  return (
    <div className="menu-bar">
      <DockLeft />
      <DockRight />
    </div>
  );
}

export default UpperDock;
