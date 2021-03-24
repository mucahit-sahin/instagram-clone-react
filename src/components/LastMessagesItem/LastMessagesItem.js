import React from "react";
import { Link } from "react-router-dom";
import "./LastMessagesItem.scss";
const LastMessagesItem = ({ userImage, username, lastMessage }) => {
  return (
    <Link
      to={`/direct/${username}`}
      className="lastMessagesItem"
      style={{ textDecoration: "none" }}
    >
      <div className="lastMessagesItemAvatar">
        <img src={userImage} alt="profilePhoto" />
      </div>
      <div className="lastMessagesItemName">
        <span>{username}</span>
        <span>{lastMessage}</span>
      </div>
    </Link>
  );
};

export default LastMessagesItem;
