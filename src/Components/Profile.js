import React from "react";
import MyImage from "../Images/20220730_174946.jpg";
import twitter from "../Images/twitter.png";
import slack from "../Images/slack.png";
import Anchor from "./ButtonComp";

const Profile = () => {
  return (
    <div className="image-div">
      <img src={MyImage} alt="Imag of Myself" id="profile__img" />
      <h2>Segun Owolabi</h2>
      <div id="socials">
        <a
          id="twitter"
          href="https://twitter.com/owzbi"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter logo" />
        </a>
        <a
          id="slack"
          href="https://slack.com/owzbi"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <img src={slack} alt="twitter logo" />
        </a>
      </div>

      <>
      <Anchor/>
      </>
    </div>
  );
};

export default Profile;
