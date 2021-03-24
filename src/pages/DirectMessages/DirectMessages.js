import React from "react";
import Chat from "../../components/Chat/Chat";
import HomeBox from "../../components/HomeBox/HomeBox";
import LastMessages from "../../components/LastMessages/LastMessages";
import "./DirectMessages.scss";
const DirectMessages = () => {
  return (
    <HomeBox>
      <div className="directMessages">
        <LastMessages />
        <Chat />
      </div>
    </HomeBox>
  );
};

export default DirectMessages;
