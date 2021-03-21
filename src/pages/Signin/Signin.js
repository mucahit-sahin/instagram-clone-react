import React from "react";
import { Link } from "react-router-dom";
import AppLinks from "../../components/AppLinks/AppLinks";
import TextInput from "../../components/TextInput/TextInput";
import "./Signin.scss";
const Signin = () => {
  return (
    <div className="signin">
      <div className="signinPanel">
        <div className="logo">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
            alt="instagramLogo"
          />
        </div>
        <div className="signinPanelTitle">
          <span>
            Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
          </span>
        </div>
        <div className="signinFacebookLogin">
          <span>Facebook ile Giriş Yap</span>
        </div>
        <div className="or">
          <div className="orBorder"></div>
          <div>
            <span>YA DA</span>
          </div>
          <div className="orBorder"></div>
        </div>
        <form>
          <TextInput
            id="email"
            type="text"
            label="Telefon numarası veya e-posta"
          />
          <TextInput id="displayName" type="text" label="Adı ve Soyadı" />
          <TextInput id="username" type="text" label="Username" />
          <TextInput id="password" type="password" label="Password" />
          <div className="signinBt">
            <button disabled>Giriş Yap</button>
          </div>
        </form>
        <div className="acceptTerm">
          <span>
            Kaydolarak, Koşullar'ı, Veri İlkesi'ni ve Çerezler İlkesi'ni kabul
            etmiş olursun.
          </span>
        </div>
      </div>

      <div className="loginMiniPanel">
        <span>Hesabın var mı? </span>
        <span>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Giriş Yap
          </Link>
        </span>
      </div>

      <AppLinks />
    </div>
  );
};

export default Signin;
