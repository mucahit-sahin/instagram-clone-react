import React from "react";
import HomeBox from "../../components/HomeBox/HomeBox";
import { Arrow } from "../../components/icons";
import LastMessagesItem from "../../components/LastMessagesItem/LastMessagesItem";
import NewMessage from "../../components/NewMessage/NewMessage";
import "./Direct.scss";
const Direct = () => {
  return (
    <HomeBox>
      <div className="direct">
        <div className="lastMessagesCol">
          <div className="lastMessagesHeader">
            <span>mucahitsah</span>
            <Arrow />
          </div>
          <div className="lastMessages">
            <LastMessagesItem
              userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
              username="cnecati"
              lastMessage="güle güle"
            />
            <LastMessagesItem
              userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
              username="cnecati"
              lastMessage="güle güle"
            />
            <LastMessagesItem
              userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
              username="cnecati"
              lastMessage="güle güle"
            />
          </div>
        </div>
        <NewMessage />
      </div>
    </HomeBox>
  );
};

export default Direct;
