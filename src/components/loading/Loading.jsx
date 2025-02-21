import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-screen">
        <img src="/img/earth.png" />
        <div className="loader"></div>
    </div>
  )
};

export default Loading;
