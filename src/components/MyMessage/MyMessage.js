import React from "react";
import { More } from "../icons";
import "./MyMessage.scss";
const MyMessage = ({ message }) => {
  return (
    <div className="myMessageItem">
      <More />
      <div className="myMessage">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default MyMessage;
