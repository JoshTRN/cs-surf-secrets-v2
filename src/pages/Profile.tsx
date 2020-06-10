import React, { Component } from "react";
import { Link } from "@reach/router";
import dayjs from "dayjs";

import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../redux/actions/userActions";

import EditDetails from "../components/profile/EditDetails";
class Profile extends Component<any, any> {
  handleImageChange = (event: any) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  handleLogout = (e: any) => {
    this.props.logoutUser();
  };

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
        <div className="profile">
          <div className="profile-image-container">
            <img
              className="user-image"
              height="100px"
              width="100px"
              src={`${imageUrl}`}
              alt="profile"
            />
            <Link className="nav-link" to={`users/${handle}`}>
              {handle}
            </Link>
            {location && <p className="caption">{location}</p>}
          </div>
          <div className="user-details">
            <input
              type="file"
              id="imageInput"
              onChange={this.handleImageChange}
            />

            <p className="caption">
              Member Since {dayjs(createdAt).format("DD MMM YYYY")}
            </p>
          </div>

          <div className="profile-details">
            <div className="bio-details">
              <h3>Bio</h3>
              {bio && <p>{bio}</p>}
            </div>

            {steam && <button className="button">STEAM</button>}
          </div>
          <button className="button" onClick={this.handleLogout}>
            LOGOUT
          </button>
          <EditDetails />
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

const mapActionsToProps = {
  logoutUser,
  uploadImage,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
