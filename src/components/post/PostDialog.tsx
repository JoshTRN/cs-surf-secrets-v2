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
  };

  handleOpen = () => {
    this.setState({ open: true });
    this.props.getPost(this.props.postId);
  };

  handleClose = () => {
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
