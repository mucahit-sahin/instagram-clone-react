import React from "react";
import { Heart, Photo, Smile } from "../icons";
import "./ChatInputs.scss";
const ChatInputs = () => {
  return (
    <div className="chatInput">
      <Smile />
      <input type="text" placeholder="Message" />
      <Photo />
      <Heart />
    </div>
  );
};

export default ChatInputs;
