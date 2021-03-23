import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signin" component={Signin} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default App;
