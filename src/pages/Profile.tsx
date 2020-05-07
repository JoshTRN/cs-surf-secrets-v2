import React, { Component } from "react";
import { Link } from "@reach/router";
import dayjs from "dayjs";

import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../redux/actions/userActions";

import EditDetails from "../components/EditDetails";
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
        <div>
          <div className="profile-image">
            <img height="50px" width="50px" src={`${imageUrl}`} alt="profile" />
            <input
              type="file"
              id="imageInput"
              onChange={this.handleImageChange}
            />
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
