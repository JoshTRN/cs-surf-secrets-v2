import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import dayjs from "dayjs";

import { connect } from "react-redux";
class Profile extends Component<any, any> {
  render() {
    const {
      user: {
        credentials: { handle, createdAt, imageUrl, bio, steam, location },
        loading,
        authenticated,
      },
    } = this.props;

    let profileMarkup = !loading ? (
      authenticated ? (
        <div>
          <div className="profile-image">
            <img height="50px" width="50px" src={`${imageUrl}`} alt="profile" />
          </div>
          <hr />
          <div className="profile-details">
            <Link to={`users/${handle}`}>{handle}</Link>
            <hr />
            {bio && <p>{bio}</p>}
            <hr />
            {location && <p>{location}</p>}
            <hr />
            {steam && <p>{steam}</p>}
            <hr />
            <p>{dayjs(createdAt).format("MMM YYYY")}</p>
          </div>
        </div>
      ) : (
        <p>No profile found, please login</p>
      )
    ) : (
      <p>loading...</p>
    );

    return profileMarkup;
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);
