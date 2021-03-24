import React from "react";
import { More } from "../icons";
import "./FromMessage.scss";
const FromMessage = ({ userImage, message }) => {
  return (
    <div className="fromMessageItem">
      <img src={userImage} alt="chatHeaderAvatar" />
      <div className="fromMessage">
        <span>{message}</span>
      </div>
      <More />
    </div>
  );
};

export default FromMessage;
