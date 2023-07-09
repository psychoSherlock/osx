import React, { useState } from "react";
import "../styles/windows.css";
const LeftPanel = () => {
  return (
    <div className="finder-left-panel">
      <ul className="left-panel-items">
        <span className="left-panel-caption">Favorites</span>
        <li className="panel-item panel-item-active">
          <i className="fas fa-house"></i>
          <span>Home</span>
        </li>
        <li className="panel-item ">
          <i className="fas fa-laptop-code"></i>
          <span>Projects</span>
        </li>

        <li className="panel-item ">
          <i className="fas fa-file-lines" style={{ fontSize: "1.159em" }}></i>
          <span style={{ marginLeft: "1.3em" }}>Certificates</span>
        </li>
        <li className="panel-item ">
          <i className="fas fa-image" style={{ marginLeft: "1.1em" }}></i>
          <span style={{ marginLeft: "1.3em" }}>Pictures</span>
        </li>
        <li className="panel-item ">
          <i className="far fa-trash-can" style={{ marginLeft: "1.1em" }}></i>
          <span style={{ marginLeft: "1.4em" }}>Trash</span>
        </li>
      </ul>
    </div>
  );
};

const WindowActions = ({ handleClose, handleMin }) => {
  return (
    <div className="window-actions">
      <i
        className="window-close fa-solid fa-circle-xmark"
        onClick={handleClose}
      ></i>
      <i className="window-min fa-solid fa-minus" onClick={handleMin}></i>
      <i className="window-max fa-solid fa-up-right-and-down-left-from-center"></i>
    </div>
  );
};

function FinderWindow() {
  //------------------- Window Events - Handle Close----------------
  const [isActive, setIsActive] = useState(true);
  const [isWindowClosed, setIsWindowClosed] = useState(false);

  const handleClose = () => {
    setIsActive(false);
    console.log(isActive);
    setTimeout(() => {
      setIsWindowClosed(true);
      console.log(isWindowClosed);
    }, 500);
  };

  //------------------- Window Events - Handle Min----------------
  const [isMax, setIsMax] = useState(true);

  const handleMin = () => {
    setIsMax(false);
    console.log(isMax);
    setTimeout(() => {
      setIsWindowClosed(true);
      console.log(isWindowClosed);
    }, 500);
  };

  //---------------------- Window Events -----------------
  return (
    <div
      className={`finder-window ${isMax ? "" : "finder-closed"}  ${
        isWindowClosed ? "closed-window" : ""
      } ${isActive ? "window-active" : "window-inactive"}`}
    >
      <WindowActions handleClose={handleClose} handleMin={handleMin} />
      <LeftPanel />
      <div className="finder-explorer"></div>
    </div>
  );
}

export default FinderWindow;
