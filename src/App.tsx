import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import { List } from './components/List';

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
	  <List />
    </div>
  );
}

export default App;
