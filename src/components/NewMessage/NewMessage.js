import React from "react";
import { Direct } from "../icons";
import "./NewMessage.scss";
const NewMessage = () => {
  return (
    <div className="newMessage">
      <Direct />
      <span>Your Messages</span>
      <span>Send private photos and messages to a friend or group.</span>
      <button>Send Message</button>
    </div>
  );
};

export default NewMessage;
