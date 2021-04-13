import React from "react";
import NewMessage from "../../components/NewMessage/NewMessage";
import HomeBox from "../../components/HomeBox/HomeBox";
import "./Direct.scss";
import LastMessages from "../../components/LastMessages/LastMessages";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Chat from "../../components/Chat/Chat";
const Direct = () => {
  let { id } = useParams();
  let messages = useSelector((state) => state.messages);
  let users = useSelector((state) => state.users);
  return (
    <HomeBox>
      <div className="direct">
        <LastMessages messages={messages} users={users} />
        {id ? <Chat messages={messages} users={users} /> : <NewMessage />}
      </div>
    </HomeBox>
  );
};

export default Direct;
