import React from "react";
import "./profile.css";
import log from "./logo1.png";
import Typewriter from "typewriter-effect";

const Profile = () => {
  
  return (
    <div className="container">
      <div className="logo">
        <img src={log} alt="" />
      </div>
      <div className="image_space"></div>
      <div className="profile">
        <div className="typewriter_container">
        Hello World, I'm Ajeet Gupta And I'm a
        <Typewriter
          options={{
            strings: ["Competitive Programmer", "Designer", "Backend developer"],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
      </div>
    </div>
  );
};

export default Profile;
