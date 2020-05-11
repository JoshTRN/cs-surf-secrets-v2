import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

import Notifications from "./Notifications";
import CreatePost from "../post/CreatePost";

import { connect } from "react-redux";

class MyNav extends Component<any, any> {
  render() {
    const { authenticated } = this.props;
    return (
      <div className="nav">
        {authenticated ? (
          <Fragment>
            <ul>
              <Link to="/" className="nav-link">
                HOME
              </Link>
              <Link to="profile" className="nav-link">
                PROFILE
              </Link>
              <Notifications />
              <CreatePost />
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            <ul>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </ul>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(MyNav);
