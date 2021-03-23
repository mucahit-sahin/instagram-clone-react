import React from "react";
import "./LastMessagesItem.scss";
const LastMessagesItem = ({ userImage, username, lastMessage }) => {
  return (
    <div className="lastMessagesItem">
      <div className="lastMessagesItemAvatar">
        <img src={userImage} alt="profilePhoto" />
      </div>
      <div className="lastMessagesItemName">
        <span>{username}</span>
        <span>{lastMessage}</span>
      </div>
    </div>
  );
};

export default LastMessagesItem;
