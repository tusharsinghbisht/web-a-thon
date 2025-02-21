import React from "react";
import "./taskbar.css";
import { FaRocket, FaUsers } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoMdPlanet } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { useStore } from "../../context/AppContext";
import HomeTab from "../tabs/home/HomeTab";
import AboutTab from "../tabs/about/AboutTab";
import ExploreTab from "../tabs/explore/ExploreTab";
import ReviewsTab from "../tabs/reviews/ReviewsTab";
import ContactTab from "../tabs/contact/ContactTab";

const Taskbar = () => {
  const { tabs, setTabs } = useStore();
  const tabContent = [<HomeTab/>, <AboutTab />, <ExploreTab />, <ReviewsTab />, <ContactTab/>];

  const setCurrTab = (page, id) => {
    // setPage(page);
    const tab_to_add = { id, title: page, content: tabContent[id] };
    const tabs_without_current = [];
    tabs.forEach((tab) => {
      if (tab.id != tab_to_add.id) {
        tabs_without_current.push(tab);
      }
    });

    setTabs([...tabs_without_current, tab_to_add]);
  };

  return (
    <div className="taskbar">
      <div className="task-list">
        <div
          onClick={() => setCurrTab("Home", 0)}
          className={
            tabs.length != 0 && tabs[tabs.length - 1].id == 0
              ? "task-item task-item-active"
              : "task-item"
          }
        >
          <div className="task-logo">
            <MdHome size={30} color="#FFFFFF" />
            <div className="task-name">Home</div>
          </div>
        </div>
        <div
          onClick={() => setCurrTab("About", 1)}
          className={
            tabs.length != 0 && tabs[tabs.length - 1].id == 1
              ? "task-item task-item-active"
              : "task-item"
          }
        >
          <div className="task-logo">
            <FaRocket size={30} color="#FFFFFF" />
            <div className="task-name">About Us</div>
          </div>
        </div>
        <div
          onClick={() => setCurrTab("Explore", 2)}
          className={
            tabs.length != 0 && tabs[tabs.length - 1].id == 2
              ? "task-item task-item-active"
              : "task-item"
          }
        >
          <div className="task-logo">
            <IoMdPlanet size={30} color="#FFFFFF" />
            <div className="task-name">Explore</div>
          </div>
        </div>
        <div
          onClick={() => setCurrTab("Reviews", 3)}
          className={
            tabs.length != 0 && tabs[tabs.length - 1].id == 3
              ? "task-item task-item-active"
              : "task-item"
          }
        >
          <div className="task-logo">
            <FaUsers size={30} color="#FFFFFF" />
            <div className="task-name">Reviews</div>
          </div>
        </div>
        <div
          onClick={() => setCurrTab("Contact", 4)}
          className={
            tabs.length != 0 && tabs[tabs.length - 1].id == 4
              ? "task-item task-item-active"
              : "task-item"
          }
        >
          <div className="task-logo">
            <IoCall size={30} color="#FFFFFF" />
            <div className="task-name">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
