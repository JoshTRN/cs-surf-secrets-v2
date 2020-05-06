import React, { Component } from "react";
import { Router, RouteComponentProps } from "@reach/router";
import jwtDecode from "jwt-decode";
import axios from "axios";

import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import { List } from "./components/List";

import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import Axios from "axios";

const Home = (props: RouteComponentProps) => <HomePage />;
const Profile = (props: RouteComponentProps) => <ProfilePage />;
const Signup = (props: RouteComponentProps) => <SignupPage />;
const Login = (props: RouteComponentProps) => <LoginPage />;

// conditional Routing TODO
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken: any = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component<any, any> {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
