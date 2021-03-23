import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import Suggestions from "../../components/Suggestions/Suggestions";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="content">
        <div className="feed">
          <div className="posts">
            <Post
              userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
              username="mucahitsah"
              displayName="Mücahit Şahin"
              postImage="https://picsum.photos/500"
              postDescription="güzel bir foto"
            />
            <Post
              userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
              username="mucahitsah"
              displayName="Mücahit Şahin"
              postImage="https://picsum.photos/500"
              postDescription="güzel bir foto"
            />
            <Post
              userImage="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=lb1Iq3iWIs0AX83dxNi&ccb=7-4&oh=5661ed1c3e9fca8b7a128cf2b1f280e0&oe=60858893&_nc_sid=7bff83"
              username="mucahitsah"
              displayName="Mücahit Şahin"
              postImage="https://picsum.photos/500"
              postDescription="güzel bir foto"
            />
          </div>
          <div className="widgets">
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
