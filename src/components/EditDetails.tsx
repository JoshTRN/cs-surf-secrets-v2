import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { editUserDetails } from "../redux/actions/userActions";

export class EditDetails extends Component<any, any> {
  state = {
    bio: "",
    steam: "",
    location: "",
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  mapUserDetailsToState = (credentials: any) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      steam: credentials.steam ? credentials.steam : "",
      location: credentials.location ? credentials.location : "",
    });
  };

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e: any) => {
    const userDetails = {
      bio: this.state.bio,
      steam: this.state.steam,
      location: this.state.location,
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };

  render() {
    const falseOpen = {
      display: "none",
    };

    const trueOpen = {
      display: "block",
    };
    return (
      <Fragment>
        <button className="button" onClick={this.handleOpen}>
          EDIT
        </button>
        <div style={this.state.open ? trueOpen : falseOpen}>
          <form noValidate className="signup-form" onSubmit={this.handleSubmit}>
            <div>
              <label>Bio</label>
              <input
                className="input"
                id="bio"
                name="bio"
                type="text"
                value={this.state.bio}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Steam</label>
              <input
                className="input"
                id="steam"
                name="steam"
                type="text"
                value={this.state.steam}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Location</label>
              <input
                className="input"
                id="location"
                name="location"
                type="text"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>

            <button className="button" type="submit">
              SAVE
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  credentials: state.user.credentials,
});

const mapActionsToProps = {
  editUserDetails,
};

export default connect(mapStateToProps, mapActionsToProps)(EditDetails);
