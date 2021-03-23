import React from "react";
import "./SuggestionUsersItem.scss";
const SuggestionUsersItem = ({ userImage, username, displayName }) => {
  return (
    <div className="suggestionUsersItem">
      <div className="suggestionUsersItemAvatar">
        <img src={userImage} alt="userSwitchAvatar" />
      </div>
      <div className="suggestionUsersItemName">
        <span>{username}</span>
        <span>{displayName}</span>
      </div>
      <button>Follow</button>
    </div>
  );
};

export default SuggestionUsersItem;
