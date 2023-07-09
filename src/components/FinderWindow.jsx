import React from "react";
import "../styles/windows.css";
const LeftPanel = () => {
  return (
    <div className="finder-left-panel">
      <ul className="left-panel-items">
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

const WindowActions = () => {
  return (
    <div className="window-actions">
      <i class="window-close fa-solid fa-circle-xmark"></i>
      <i class="window-min fa-solid fa-minus"></i>
      <i class="window-max fa-solid fa-up-right-and-down-left-from-center"></i>
    </div>
  );
};

function FinderWindow() {
  return (
    <div className="finder-window">
      <WindowActions />
      <LeftPanel />
      <div className="finder-explorer"></div>
    </div>
  );
}

export default FinderWindow;
