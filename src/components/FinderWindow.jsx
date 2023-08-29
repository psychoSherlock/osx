import React, { useState } from "react";
import "../styles/windows.css";
import FinderItems from "./FinderItems";
import { BiChevronLeft, BiChevronRight, BiSearchAlt } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
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

const WindowActions = ({ handleClose, handleMin, handleMax }) => {
  return (
    <div className="window-actions">
      <i
        className="window-close fa-solid fa-circle-xmark"
        onClick={handleClose}
      ></i>
      <i className="window-min fa-solid fa-minus" onClick={handleMin}></i>
      <i
        className="window-max fa-solid fa-up-right-and-down-left-from-center"
        onClick={handleMax}
      ></i>
    </div>
  );
};

const FinderNav = () => {
  return (
    <div className="finder-nav">
      <div className="finder-nav-left">
        <IconButton>
          <BiChevronLeft color="#fff" size={23} />
        </IconButton>
        <IconButton>
          <BiChevronRight color="#969797" size={23} />
        </IconButton>
        <IconButton>
          <IoHomeOutline color="rgba(255, 255, 255, 0.64)" size={18} />
        </IconButton>
        <span
          style={{
            fontSize: "0.9em",
            color: "white",
          }}
        >
          Home
        </span>
        <IconButton>
          <IoMdArrowDropdown color="white" size={20} />
        </IconButton>
      </div>

      <div className="finder-nav-right">
        <IconButton>
          <BiSearchAlt color="white" size={18} />
        </IconButton>
        <IconButton>
          <MdOutlineMenu color="white" size={18} />
        </IconButton>
        <IconButton>
          <IoMdArrowDropdown color="white" size={18} />
        </IconButton>
        <IconButton>
          <BsThreeDots size={18} color="white" />
        </IconButton>
      </div>
    </div>
  );
};

function FinderWindow() {
  //------------------- Window Events - Handle Close----------------
  const [isActive, setIsActive] = useState(true);
  const [isWindowClosed, setIsWindowClosed] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClose = () => {
    setIsActive(false);
    console.log(isActive);
    setTimeout(() => {
      setIsWindowClosed(true);
      console.log(isWindowClosed);
    }, 500);
  };

  //------------------- Window Events - Handle Min----------------
  const handleMax = () => {
    setIsMaximized(!isMaximized);
  };
  //--------------------------------------------------------------

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
      className={`finder-window window ${
        isMaximized ? "maximized-window" : ""
      } ${isMax ? "" : "finder-closed"}  ${
        isWindowClosed ? "closed-window" : ""
      } ${isActive ? "window-active" : "window-inactive"}`}
    >
      <WindowActions
        handleClose={handleClose}
        handleMin={handleMin}
        handleMax={handleMax}
      />
      <LeftPanel />
      <div className="finder-explorer">
        <FinderNav />
        {/* <FinderItems /> */}
      </div>
    </div>
  );
}

export default FinderWindow;
