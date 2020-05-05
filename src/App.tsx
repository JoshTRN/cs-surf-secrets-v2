import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import jwtDecode from "jwt-decode";

import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import { List } from "./components/List";

import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";

const Home = (props: RouteComponentProps) => <HomePage />;
const Profile = (props: RouteComponentProps) => <ProfilePage />;
const Signup = (props: RouteComponentProps) => <SignupPage />;
const Login = (props: RouteComponentProps) => <LoginPage />;

// conditional Routing TODO
let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken: any = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <div>
      <MyHeader />
      <MyNav />
      <Router>
        <Home path="/" />
        <Profile path="profile" />
        <Signup path="signup" />
        <Login path="login" />
      </Router>
      <br />
      <List />
    </div>
  );
}

export default App;
