// Profile.js
import React from "react";
import "./Profile.css";
import profilePic from "./Imgs/Nidhushan_BB.jpg";

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
        <div id="profile_top">
          <div id="about_me">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Faucibus scelerisque eleifend donec pretium vulputate. Lobortis elementum nibh tellus molestie nunc non. Justo nec ultrices dui sapien eget mi proin sed libero. Sit amet aliquam id diam maecenas ultricies mi. Mi quis hendrerit dolor magna eget est lorem. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Imperdiet dui accumsan sit amet nulla facilisi. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Egestas diam in arcu cursus euismod quis.</p>
          </div>
          <div id="askQue"></div>
        </div>
        <div id="profile_mid">
          <img id="profile_pic" src={profilePic} alt="profile picture"/>
        </div>
        <div id="profile_bot">
          <div id=""></div>
          <div id="contact_me">
            <img alt="Instagram"/>
            <img alt="LinkedIn"/>
            <img alt="Discord"/>
            <img alt="Github"/>
            <img alt="Gmail"/>
            <img alt=""/>
          </div>
        </div>

      
      {/* <h2>Profile</h2>
      <p>Your profile content goes here.</p> */}
    </section>
  );
};

export default Profile;
