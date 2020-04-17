import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";

import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";

let Home = (props: RouteComponentProps) => <HomePage />;
let Profile = (props: RouteComponentProps) => <ProfilePage />;
let Signup = (props: RouteComponentProps) => <SignupPage />;
let Login = (props: RouteComponentProps) => <LoginPage />;

function App() {
  return (
    <div>
      <MyHeader />
      <MyNav />
      <Router>
        <Home path="/" />
        <Profile path="Profile" />
        <Signup path="Signup" />
        <Login path="Login" />
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
