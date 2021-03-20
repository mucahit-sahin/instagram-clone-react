import React from "react";
import PhoneSlide from "../../components/PhoneSlide/PhoneSlide";
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
            <div className="textInput ">
              <input type="text" id="username" />
              <label for="username">
                Telefon, numarası, kullanıcı adı veya e-posta
              </label>
            </div>
            <div className="textInput">
              <input type="password" id="password" />
              <label for="password">Password</label>
            </div>
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
          <span> Kaydol</span>
        </div>
        <div className="appLinks">
          <span>Uygulamayı indir.</span>
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
      </div>
    </div>
  );
};

export default Login;
