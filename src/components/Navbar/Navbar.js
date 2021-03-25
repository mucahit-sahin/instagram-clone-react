import React from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import {
  Change,
  Direct,
  Explore,
  Heart,
  Home as HomeIcon,
  Saved,
  Settings,
  User,
} from "../../components/icons";
import NotificationsCard from "../NotificationsCard/NotificationsCard";
const Navbar = () => {
  let path = useLocation().pathname;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [activeIcon, setActiveIcon] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    if (path === "/home") setActiveIcon(1);
    else if (path === "/direct" || path.split("/")[1] === "direct")
      setActiveIcon(2);
  }, []);
  return (
    <nav>
      <div className="navbar">
        <div className="navLogo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram Logo"
          />
        </div>
        <div className={`navSearchInput ${searchValue !== "" && "labelHide"}`}>
          <input
            id="searchInput"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <label for="searchInput">Search</label>
        </div>
        <div className="navMenu">
          <Link to="/home" onClick={() => setActiveIcon(1)}>
            <HomeIcon active={activeIcon === 1 && true} />
          </Link>
          <Link to="/direct" onClick={() => setActiveIcon(2)}>
            <Direct active={activeIcon === 2 && true} />
          </Link>
          <Link onClick={() => setActiveIcon(3)}>
            <Explore active={activeIcon === 3 && true} />
          </Link>
          <div
            className="heart"
            onClick={() => {
              setNotificationOpen(true);
              setActiveIcon(4);
            }}
          >
            <Heart active={notificationOpen && true} />
            {notificationOpen && <NotificationsCard />}
          </div>
          <div
            className={`closePanel ${
              menuOpen || notificationOpen ? "active" : ""
            }`}
            onClick={() => {
              setMenuOpen(false);
              setNotificationOpen(false);
            }}
          ></div>
          <div className="navProfilePhoto" onClick={() => setMenuOpen(true)}>
            <img
              src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117604855_289926268957956_1022152245096700514_n.jpg?tp=1&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_ohc=1g6LJ4YP0F0AX9vD36T&ccb=7-4&oh=01038f2f288666f3684a6dc675bbc088&oe=60819413&_nc_sid=7bff83"
              alt="profile"
            />
            {menuOpen && (
              <>
                <div className="navProfilPhotoMenu arrow-top">
                  <div>
                    <User />
                    <span>Profil</span>
                  </div>
                  <div>
                    <Saved />
                    <span>Kaydedildi</span>
                  </div>
                  <div>
                    <Settings />
                    <span>Ayarlar</span>
                  </div>
                  <div>
                    <Change />
                    <span>Hesap Değiştir</span>
                  </div>
                  <div>
                    <span>Çıkış Yap</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
