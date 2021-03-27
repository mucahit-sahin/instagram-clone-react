import React from "react";
import "./ExploreVideoRow.scss";

const ExploreVideoRow = () => {
  return (
    <div className="exploreBigRowCards">
      <div className="exploreSmallCards">
        <div className="exploreSmallItem">
          <img src="https://picsum.photos/300" alt="explore card" />
        </div>
        <div className="exploreSmallItem">
          <img src="https://picsum.photos/300" alt="explore card" />
        </div>
      </div>
      <div className="exploreBigCard">
        <div className="exploreBigCardItem">
          <img src="https://picsum.photos/1000" alt="explore video" />
        </div>
      </div>
    </div>
  );
};

export default ExploreVideoRow;
