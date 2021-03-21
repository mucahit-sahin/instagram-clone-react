import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signin" component={Signin} />
    </Switch>
  );
}

export default App;
