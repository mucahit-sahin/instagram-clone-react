import React from "react";
import "./NotificationCardItem.scss";
const ThisWeekItem = () => {
  return (
    <div className="notificationCardItem">
      <div className="notificationCardItemAvatar">
        <img src="https://picsum.photos/200" alt="avatar" />
      </div>
      <div className="notificationCardItemTitle">
        <span>cnecati</span>
        <span>&nbsp;liked your photo.</span>
        <span>&nbsp;3d</span>
      </div>
      <div className="notificationCardItemLikedphoto">
        <img src="https://picsum.photos/200" alt="post" />
      </div>
    </div>
  );
};

export default ThisWeekItem;
