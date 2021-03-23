import React from "react";
import Navbar from "../Navbar/Navbar";
import "./HomeBox.scss";
const HomeBox = ({ children }) => {
  return (
    <div className="home">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default HomeBox;
