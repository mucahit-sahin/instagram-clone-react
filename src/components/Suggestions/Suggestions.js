import React from "react";
import "./Suggestions.scss";
import SuggestionUsersItem from "./SuggestionUsersItem/SuggestionUsersItem";
const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="userSwitch">
        <div className="userSwitchAvatar">
          <img
            src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
            alt="userSwitchAvatar"
          />
        </div>
        <div className="userSwitchName">
          <span>mucahitsah</span>
          <span>Mücahit Şahin</span>
        </div>
        <button>Switch</button>
      </div>
      <div className="suggestionUsers">
        <div className="suggestionUsersHeader">
          <span>Suggestions For You</span>
          <span>See All</span>
        </div>
        <SuggestionUsersItem
          userImage="https://picsum.photos/200"
          username="cnecati"
          displayName="Cihat Necati"
        />
        <SuggestionUsersItem
          userImage="https://picsum.photos/200"
          username="cnecati"
          displayName="Cihat Necati"
        />
        <SuggestionUsersItem
          userImage="https://picsum.photos/200"
          username="cnecati"
          displayName="Cihat Necati"
        />
        <SuggestionUsersItem
          userImage="https://picsum.photos/200"
          username="cnecati"
          displayName="Cihat Necati"
        />
      </div>
    </div>
  );
};

export default Suggestions;
