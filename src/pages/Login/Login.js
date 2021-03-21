import React from "react";
import { Link } from "react-router-dom";
import AppLinks from "../../components/AppLinks/AppLinks";
import PhoneSlide from "../../components/PhoneSlide/PhoneSlide";
import TextInput from "../../components/TextInput/TextInput";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login">
      <PhoneSlide />
      <div className="loginPanels">
        <div className="loginPanel">
          <div className="logo">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
              alt="instagramLogo"
            />
          </div>
          <form>
            <TextInput
              id="email"
              type="text"
              label="Telefon numarası veya e-posta"
            />
            <TextInput id="password" type="password" label="Password" />
            <div className="loginBt">
              <button disabled>Giriş Yap</button>
            </div>
          </form>
          <div className="or">
            <div className="orBorder"></div>
            <div>
              <span>YA DA</span>
            </div>
            <div className="orBorder"></div>
          </div>
          <div className="facebookLogin">
            <span>Facebook ile Giriş Yap</span>
          </div>
          <div className="rememberPass">
            <span>Şifreni mi unuttum?</span>
          </div>
        </div>
        <div className="siginMiniPanel">
          <span>Hesabın yok mu? </span>
          <span>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Kaydol
            </Link>
          </span>
        </div>
        <AppLinks />
      </div>
    </div>
  );
};

export default Login;
