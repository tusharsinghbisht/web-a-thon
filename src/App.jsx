import React from "react";
import "./App.css";
import { Taskbar, Navbar, SocialMenu, TabManager, Loading } from "./components";
import { useStore } from "./context/AppContext";

const App = () => {
  const { loading } = useStore()

  return (
    <main className="main">
      { loading && <Loading /> }
      
      <Navbar />

      <div className="home">
        <div>
          <h1>Spacecon Travels</h1>
          <p>For Others, Earth is the Limit. For Us, It's Just the Beginning.</p>
          <button className="start-btn">Get Started</button>
        </div>
        <div>
          {/* <img src="/img/rocket.png" alt="Spacecon" /> */}
        </div>
      </div>
      <TabManager />

      <Taskbar />
      <SocialMenu />
    </main>
  );
};

export default App;
