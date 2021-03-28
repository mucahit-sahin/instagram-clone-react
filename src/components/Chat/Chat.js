import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ChatInputs from "../ChatInputs/ChatInputs";
import FromMessage from "../FromMessage/FromMessage";
import { Info } from "../icons";
import MyMessage from "../MyMessage/MyMessage";
import "./Chat.scss";

const Chat = ({ messages, users }) => {
  let { id } = useParams();
  const [messagesData, setMessagesData] = React.useState();
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    var element = document.querySelector(".chatMessages");
    element.scrollTop = element.scrollHeight;
  }, []);

  React.useEffect(() => {
    setMessagesData(messages.find((message) => message.to === id));
    setUser(users.find((user) => user.username === id));
  }, [id]);
  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeaderAvatar">
          <img src={user && user.userimage} alt="chatHeaderAvatar" />
        </div>
        <div className="chatHeaderUsername">
          <span>{user && user.username}</span>
        </div>
        <Info />
      </div>
      <div className="chatMessages">
        {messagesData &&
          messagesData.messages.map((message) => {
            if (message.from === user.username) {
              return (
                <FromMessage
                  userImage={user.userimage}
                  message={message.message}
                />
              );
            } else {
              return <MyMessage message={message.message} />;
            }
          })}
      </div>
      <ChatInputs to={user && user.username} />
    </div>
  );
};

export default Chat;
