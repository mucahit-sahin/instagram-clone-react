import React from "react";
import { Arrow } from "../icons";
import "./NotificationsCard.scss";
import NotificationCardItem from "./NotificationCardItem/NotificationCardItem";

const NotificationsCard = () => {
  return (
    <div className="notificationCard arrow-top">
      <div className="followRequests">
        <div className="followRequestsAvatar">
          <img src="https://picsum.photos/200" alt="follow avatar" />
          <img src="https://picsum.photos/300" alt="follow avatar" />
        </div>
        <div className="followRequestsHeader">
          <span>Follow Requests</span>
          <span>Ahmet ve 20 others</span>
        </div>
        <div className="rightArrow">
          <Arrow />
        </div>
      </div>
      <div className="thisWeek">
        <span className="thisWeekHeader">This Week</span>
        <NotificationCardItem />
        <NotificationCardItem />
      </div>
      <div className="earlier">
        <span className="earlierHeader">Earlier</span>
        <NotificationCardItem />
      </div>
    </div>
  );
};

export default NotificationsCard;
