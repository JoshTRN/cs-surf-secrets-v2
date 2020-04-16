import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import { fAuth } from "./config/fbConfig";

fAuth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user logged in: ", user);
  } else {
    console.log("user logged out");
  }
});

function App() {
  return (
    <Router>
      <div>
        <MyHeader />
        <MyNav />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Profile" component={Profile} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
