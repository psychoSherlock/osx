import React from "react";
import "../styles/desktopapps.css";
import skills from "../script/skills";

const SkillIcon = ({ name, icon_url, url }) => {
  const openUrlInNewTab = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="skill" onClick={openUrlInNewTab}>
      <img className="skill-icon" src={icon_url} alt={name} />
      <span>{name}</span>
    </div>
  );
};

const DesktopApps = () => {
  return (
    <div className="desktop-container">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  );
};

export default DesktopApps;
