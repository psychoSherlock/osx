import React, { useEffect, useContext } from "react";
import TrashIcon from "../images/icons/trash.png";
import FinderIcon from "../images/icons/finder.png";
import SiriIcon from "../images/icons/siri.png";
import LaunchPadIcon from "../images/icons/launchpad.png";
import ContactsIcon from "../images/icons/contacts.png";
import NotesIcon from "../images/icons/notes.png";
import ReminderIcon from "../images/icons/reminders.png";
import PhotosIcon from "../images/icons/photos.png";
import FaceTimeIcon from "../images/icons/facetime.png";
import MessagesIcon from "../images/icons/messages.png";
import MusicIcon from "../images/icons/music.png";
import PodcastsIcon from "../images/icons/podcasts.png";
import TvIcon from "../images/icons/tv.png";
import AppStoreIcon from "../images/icons/appstore.png";
import SafariIcon from "../images/icons/safari.png";
import { observer } from "mobx-react";
import { StoreContext } from "../store";
const DockIcon = ({ src }) => {
  return (
    <div>
      <img className="ico" src={src} alt=""></img>
    </div>
  );
};

const LowerDock = observer(() => {
  const store = useContext(StoreContext);
  const handleFinderClick = () => {
    store.toggleMax();
  };
  useEffect(() => {
    const icons = document.querySelectorAll(".ico");
    const length = icons.length;

    icons.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => {
        focus(e.target, index);
      });
      item.addEventListener("mouseleave", () => {
        icons.forEach((item) => {
          item.style.transform = "scale(1) translateY(0px)";
        });
      });
    });

    const focus = (elem, index) => {
      let previous = index - 1;
      let previous1 = index - 2;
      let next = index + 1;
      let next2 = index + 2;

      if (previous === -1) {
        console.log("first element");
        elem.style.transform = "scale(1.5) translateY(-10px)";
      } else if (next === length) {
        elem.style.transform = "scale(1.5) translateY(-10px)";
        console.log("last element");
      } else {
        elem.style.transform = "scale(1.5) translateY(-10px)";
        try {
          icons[previous].style.transform = "scale(1.2) translateY(-6px)";
          icons[previous1].style.transform = "scale(1.1)";
          icons[next].style.transform = "scale(1.2) translateY(-6px)";
          icons[next2].style.transform = "scale(1.1)";
        } catch (error) {
          console.error(error); // There is a bug here that I need to fix later
        }
      }
    };
  }, []);
  return (
    <div className="dock">
      <div className="dock-container">
        <li className="li-1">
          <div className="name">Finder</div>
          <DockIcon src={FinderIcon} />
        </li>
        <li className="li-2">
          <div className="name">Siri</div>
          <DockIcon src={SiriIcon} />
        </li>
        <li className="li-3">
          <div className="name">LaunchPad</div>
          <DockIcon src={LaunchPadIcon} />
        </li>
        <li className="li-4">
          <div className="name">Contacts</div>
          <DockIcon src={ContactsIcon} />
        </li>
        <li className="li-5">
          <div className="name">Notes</div>
          <DockIcon src={NotesIcon} />
        </li>
        <li className="li-6">
          <div className="name">Reminders</div>
          <DockIcon src={ReminderIcon} />
        </li>
        <li className="li-7">
          <div className="name">Photos</div>
          <DockIcon src={PhotosIcon} />
        </li>
        <li className="li-8">
          <div className="name">Messages</div>
          <DockIcon src={MessagesIcon} />
        </li>
        <li className="li-9">
          <div className="name">FaceTime</div>
          <DockIcon src={FaceTimeIcon} />
        </li>
        <li className="li-10">
          <div className="name">Music</div>
          <DockIcon src={MusicIcon} />
        </li>
        <li className="li-11">
          <div className="name">Podcasts</div>
          <DockIcon src={PodcastsIcon} />
        </li>
        <li className="li-12">
          <div className="name">TV</div>
          <DockIcon src={TvIcon} />
        </li>
        <li className="li-12">
          <div className="name">App Store</div>
          <DockIcon src={AppStoreIcon} />
        </li>
        <li className="li-14">
          <div className="name">Safari</div>
          <DockIcon src={SafariIcon} />
        </li>
        <li className="li-bin li-15">
          <div className="name">Bin</div>
          <img className="ico ico-bin" src={TrashIcon} alt=""></img>
        </li>
      </div>
    </div>
  );
});

export default LowerDock;
