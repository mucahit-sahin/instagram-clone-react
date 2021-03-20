import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="phoneImage">
        <img
          src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
          alt="phoneInstagram"
        />
      </div>
      <div className="loginPanel">
        <form>
          <div className="loginInput">
            <input type="text" id="username" />
            <label for="username">
              Telefon, numarası, kullanıcı adı veya e-posta
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
