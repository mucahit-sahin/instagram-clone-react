import React from "react";
import ChatInputs from "../ChatInputs/ChatInputs";
import FromMessage from "../FromMessage/FromMessage";
import { Info } from "../icons";
import MyMessage from "../MyMessage/MyMessage";
import "./Chat.scss";
const Chat = () => {
  React.useEffect(() => {
    var element = document.querySelector(".chatMessages");
    element.scrollTop = element.scrollHeight;
  }, []);

  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeaderAvatar">
          <img
            src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
            alt="chatHeaderAvatar"
          />
        </div>
        <div className="chatHeaderUsername">
          <span>cnecati</span>
        </div>
        <Info />
      </div>
      <div className="chatMessages">
        <FromMessage
          userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
          message="merhabaa"
        />
        <FromMessage
          userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
          message="merhabaa"
        />
        <FromMessage
          userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
          message="merhabaa"
        />
        <MyMessage message="selam" />
        <FromMessage
          userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
          message="merhabaa"
        />
        <MyMessage message="selam" />
        <FromMessage
          userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
          message="merhabaa"
        />
        <MyMessage message="selam" />
      </div>
      <ChatInputs />
    </div>
  );
};

export default Chat;
