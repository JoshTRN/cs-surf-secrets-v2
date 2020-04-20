import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import { List } from './components/List';

import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";

const Home = (props: RouteComponentProps) => <HomePage />;
const Profile = (props: RouteComponentProps) => <ProfilePage />;
const Signup = (props: RouteComponentProps) => <SignupPage />;
const Login = (props: RouteComponentProps) => <LoginPage />;

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
