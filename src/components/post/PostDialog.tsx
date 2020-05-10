import React, { Component, Fragment } from "react";
import dayjs from "dayjs";
import { Link } from "@reach/router";
import LikeButton from "./LikeButton";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

import { connect } from "react-redux";
import { getPost, clearErrors } from "../../redux/actions/dataActions";

class PostDialog extends Component<any, any> {
  state = {
    open: false,
    oldPath: "",
    newPath: "",
  };

  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    let oldPath = window.location.pathname;

    const { userHandle, postId } = this.props;
    const newPath = `/users/${userHandle}/post/${postId}`;

    if (oldPath === newPath) oldPath = `/users/${userHandle}`;

    window.history.pushState(null, "Surf Secrets Post", newPath);

    this.setState({ open: true, oldPath, newPath });
    this.props.getPost(this.props.postId);
  };

  handleClose = () => {
    window.history.pushState(null, "Surf Secrets", this.state.oldPath);
    this.setState({ open: false });
    this.props.clearErrors();
  };

  render() {
    const {
      post: {
        postId,
        body,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        userHandle,
        comments,
      },
      UI: { loading },
    } = this.props;

    const falseOpen = {
      display: "none",
    };

    const trueOpen = {
      display: "block",
    };

    const dialogMarkup = loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <img
          height="50px"
          width="50px"
          src={`${userImage}`}
          alt={`${userHandle} Profile`}
        />
        <Link to={`/users/${userHandle}`}>{userHandle}</Link>
        <hr />
        <p>{dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}</p>
        <hr />
        <p>{body}</p>
        <LikeButton postId={postId} />
        <span>{likeCount} likes</span>
        <br />
        <span>{commentCount} Comments</span>
        <hr />
        <CommentForm postId={postId} />
        <Comments comments={comments} />
      </div>
    );

    return (
      <Fragment>
        <button className="button" onClick={this.handleOpen}>
          EXPAND POST
        </button>
        {this.state.open ? (
          <div style={this.state.open ? trueOpen : falseOpen}>
            <button className="button" onClick={this.handleClose}>
              Cancel
            </button>
            {dialogMarkup}
          </div>
        ) : (
          <div></div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  post: state.data.post,
  UI: state.UI,
});

export default connect(mapStateToProps, { getPost, clearErrors })(PostDialog);
