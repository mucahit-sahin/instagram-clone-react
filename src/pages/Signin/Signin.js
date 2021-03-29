import React from "react";
import { Link, useHistory } from "react-router-dom";
import AppLinks from "../../components/AppLinks/AppLinks";
import "./Signin.scss";
const Signin = () => {
  const loginBt = React.useRef();
  let history = useHistory();
  const [email, setEmail] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  React.useEffect(() => {
    if (
      email !== "" &&
      password !== "" &&
      username !== "" &&
      displayName !== ""
    ) {
      loginBt.current.disabled = false;
    } else {
      loginBt.current.disabled = true;
    }
  }, [email, password]);

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/home");
  };

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
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={`textInput ${email.length > 0 && "active"}`}>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="email">Telefon numarası veya e-posta</label>
          </div>
          <div className={`textInput ${displayName.length > 0 && "active"}`}>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <label for="displayName">Adı ve Soyadı</label>
          </div>
          <div className={`textInput ${username.length > 0 && "active"}`}>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="username">Username</label>
          </div>
          <div className={`textInput ${password.length > 0 && "active"}`}>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password">Password</label>
          </div>
          <div className="signinBt">
            <button ref={loginBt} disabled>
              Üye Ol
            </button>
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
