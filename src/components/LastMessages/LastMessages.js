import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Arrow } from "../icons";
import LastMessagesItem from "../LastMessagesItem/LastMessagesItem";
import "./LastMessages.scss";
const LastMessages = ({ messages, users }) => {
  let { id } = useParams();
  return (
    <div className={`lastMessagesCol ${id && "hide"}`}>
      <div className="lastMessagesHeader">
        <span>mucahitsah</span>
        <Arrow />
      </div>
      <div className="lastMessages">
        {messages.map((message) => {
          const user = users.find((user) => user.username === message.to);
          if (user) {
            return (
              <LastMessagesItem
                username={user.username}
                userImage={user.userimage}
                lastMessage={message.messages.slice(-1)[0].message}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default LastMessages;
