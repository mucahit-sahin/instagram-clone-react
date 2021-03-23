import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="feed">
        <div className="posts">
          <Post />
          <Post />
        </div>
        <div className="widgets">
          <span>widgets</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
