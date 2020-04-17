import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div>
      <MyHeader />
      <MyNav />
      <Router>
        <Home path="/" />
        <Profile path="Profile" />
        <Signup path="Signup" />
      </Router>
    </div>
  );
}

/* function App() {
  return (
    <Router>
      <div>
        <MyHeader />
        <MyNav />
        <Switch>
          <Route path="/Signup" component={Signup} />
          <Route path="/Profile" component={Profile} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
} */

export default App;
