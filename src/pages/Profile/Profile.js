import React from "react";
import "./Profile.scss";
import HomeBox from "../../components/HomeBox/HomeBox";
import { Igtv, Posts, Saved, Settings, Tagged } from "../../components/icons";
import ExploreRowCards from "../../components/ExploreRowCards/ExploreRowCards";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import { useParams } from "react-router";

const Profile = () => {
  let { id } = useParams();
  const [userImage, setUserImage] = React.useState();
  React.useEffect(() => {
    if (id === "mucahitsah") {
      //my profile photo
      setUserImage(
        "https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=gAgXdD6fTW4AX-WCAFY&tn=RX4pWVV_5Okc-K47&edm=ABfd0MgAAAAA&ccb=7-4&oh=eda0b6d3005e678b97b99783ffcb5f1a&oe=60897D13&_nc_sid=7bff83"
      );
    } else {
      //random profilPhoto
      setUserImage("https://picsum.photos/200");
    }
  }, [id]);
  return (
    <HomeBox>
      <div className="profile">
        <header className="profileHeaderRow">
          <div className="profilePhotoCol">
            <img src={userImage} alt="profile" />
          </div>
          <div className="profileContentCol">
            <div className="title">
              <div className="username">
                <span>{id}</span>
              </div>
              <div className="editProfile">
                <span>Edit Profile</span>
              </div>
              <div className="settings">
                <Settings />
              </div>
            </div>
            <div className="counter">
              <div>
                <span>3&nbsp;</span>
                posts
              </div>
              <div>
                <span>150&nbsp;</span>
                followers
              </div>
              <div>
                <span>200&nbsp;</span>following
              </div>
            </div>
            <div className="biographyRow">
              <div className="displayName">
                <span>{id}</span>
              </div>
              <div className="biography">
                <span>Frontend Developer</span>
              </div>
            </div>
          </div>
        </header>
        <div className="profileTabs">
          <div className="tabItem active">
            <Posts />
            <span>Posts</span>
          </div>
          <div className="tabItem">
            <Igtv />
            <span>IGTV</span>
          </div>
          <div className="tabItem">
            <Saved />
            <span>Saved</span>
          </div>
          <div className="tabItem">
            <Tagged />
            <span>Tagged</span>
          </div>
        </div>
        <div className="profilePosts">
          <ExploreRowCards />
          <ExploreRowCards />
        </div>
        <BottomNavigation />
      </div>
    </HomeBox>
  );
};

export default Profile;
