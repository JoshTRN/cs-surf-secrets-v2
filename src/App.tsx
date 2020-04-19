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
      <br />
      <li>profile builder</li>
      <li>confirm password</li>
      <li>create posts</li>
      <li>view other posts</li>
      <li>comment on posts</li>
      <li>Redesign</li>
      <li>Reset Password</li>
      <li>todolists + completed</li>
      <li>saveloc loader</li>
      <li>ksf api</li>
      <li>like posts</li>
      <li>notifications</li>
      <li>Achievements + Friend Feed</li>
      <li>Twitch API</li>
      <li>Friending System</li>
      <li>Match Finder</li>
      <li>Profile Views</li>
      <li>Profile Comments</li>
    </div>
  );
}

export default App;
