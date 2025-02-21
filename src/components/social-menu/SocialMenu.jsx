import React, { useState } from "react";
import "./social.css";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoClose, IoShareSocial } from "react-icons/io5";

const SocialMenu = () => {
  const [socialmenu, setsocialmenu] = useState(false);

  return (
    <>
      <button
        className="social"
        onClick={() => setsocialmenu(!socialmenu)}
      >
        {socialmenu ? (
          <IoClose fill="white" className="share" />
        ) : (
          <IoShareSocial fill="white" className="share" />
        )}
      </button>
      <div className={`socialMenu ${socialmenu ? "socialactive" : ""}`}>
        <div className="socialList">
          <a
            className="icon"
            href="https://github.com/tusharsinghbisht"
            target="__blank"
          >
            <FaGithub fill="white" />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/tushar_coder/"
            target="__blank"
          >
            <FaInstagram fill="white" />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/tushar-singh-bisht-289092306/"
            target="__blank"
          >
            <FaLinkedin fill="white" />
          </a>
          <a
            className="icon"
            href="https://discordapp.com/users/707421998078492744"
            target="__blank"
          >
            <FaDiscord fill="white" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMenu;
