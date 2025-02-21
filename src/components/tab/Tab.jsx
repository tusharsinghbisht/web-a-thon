import React, { useState } from "react";
import "./tab.css"
import { useStore } from "../../context/AppContext";

const TabWindow = ({ curr, tabs, setTabs }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 200,
    y: Math.random() * 200,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 }); 

  const handleMouseDown = (e) => {
    const tabs_without_current = [];
    tabs.forEach((t) => {
      if (t.id != curr.id) {
        tabs_without_current.push(t);
      }
    });
    setTabs([...tabs_without_current, curr]);
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const closeTab = () => {
    const tabs_without_current = [];
    tabs.forEach((t) => {
      if (t.id != curr.id) {
        tabs_without_current.push(t);
      }
    });
    setTabs(tabs_without_current);
  };

  return (
    <div
      style={
        window.innerWidth > 700
          ? {
              top: `${position.y}px`,
              left: `${position.x}px`,
            }
          : {}
      }
      onMouseLeave={() => setIsDragging(false)}
      className="tab"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="tabTop">
        <h3 className="tabHead">{curr.title}</h3>
        <span className="tabClose" onClick={closeTab}>
          x
        </span>
      </div>

      <div className="tabContent">
        {curr.content}
      </div>
    </div>
  );
};

const TabManager = () => {
  const { tabs, setTabs } = useStore();

  return (
    <>
      {tabs.map((tab) => (
        <TabWindow key={tab.id} curr={tab} tabs={tabs} setTabs={setTabs} />
      ))}
    </>
  );
};

export default TabManager;
