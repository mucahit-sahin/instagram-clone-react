import React from "react";
import "./Suggestions.scss";
import SuggestionUsersItem from "./SuggestionUsersItem/SuggestionUsersItem";
const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="userSwitch">
        <div className="userSwitchAvatar">
          <img
            src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4"
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
