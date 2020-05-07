import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { connect } from "react-redux";
import { likePost, unlikePost } from "../redux/actions/dataActions";

class Post extends Component<any, any> {
  likedPost = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like: any) => like.postId === this.props.post.postId
      )
    )
      return true;
    else return false;
  };
  likePost = () => {
    this.props.likePost(this.props.post.postId);
  };
  unlikePost = () => {
    this.props.unlikePost(this.props.post.postId);
  };
  render() {
    dayjs.extend(relativeTime);
    const {
      post: { body, createdAt, userImage, userHandle, likeCount, commentCount },
      user: { authenticated },
    } = this.props;

    const likeButton = !authenticated ? (
      <div></div>
    ) : this.likedPost() ? (
      <button className="button" onClick={this.unlikePost}>
        UNLIKE
      </button>
    ) : (
      <button className="button" onClick={this.likePost}>
        LIKE
      </button>
    );

    return (
      <div className="posts">
        <div className="posts">
          <img
            height="50px"
            width="50px"
            src={`${userImage}`}
            alt={`${userHandle}`}
          />
        </div>
        <h4>{userHandle}</h4>
        <p>{dayjs(createdAt).fromNow()}</p>
        <p>{body}</p>
        {likeButton}
        <span>{likeCount} Likes</span>
        <br />
        <span>{commentCount} Comments</span>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapActionsToProps = {
  likePost,
  unlikePost,
};

export default connect(mapStateToProps, mapActionsToProps)(Post);
