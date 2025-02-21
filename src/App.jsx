import React from "react";
import "./App.css";
import { Taskbar, Navbar, SocialMenu, TabManager } from "./components";

const App = () => {
  return (
    <main className="main">
      <Navbar />

      <div className=""></div>
      <TabManager />

      <Taskbar />
      <SocialMenu />
    </main>
  );
};

export default App;
