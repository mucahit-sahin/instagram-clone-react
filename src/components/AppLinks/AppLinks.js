import React from "react";
import "./AppLinks.scss";
const AppLinks = () => {
  return (
    <div className="appLinks">
      <span>Get the app.</span>
      <div>
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png"
          alt="Ios Instagram App"
        />
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png"
          alt="Android Instagram App"
        />
      </div>
    </div>
  );
};

export default AppLinks;
