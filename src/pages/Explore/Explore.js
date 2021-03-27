import React from "react";
import ExploreRowCards from "../../components/ExploreRowCards/ExploreRowCards";
import ExploreVideoRow from "../../components/ExploreVideoRow/ExploreVideoRow";
import HomeBox from "../../components/HomeBox/HomeBox";
import "./Explore.scss";
const Explore = () => {
  return (
    <HomeBox>
      <div className="explore">
        <ExploreVideoRow />
        <ExploreRowCards />
        <ExploreRowCards />
        <ExploreRowCards />
      </div>
    </HomeBox>
  );
};

export default Explore;
