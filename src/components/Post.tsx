import React, { Component } from "react";
import { analytics } from "firebase";

class Post extends Component<any, any> {
  render() {
    const {
      post: {
        body,
        createdAt,
        userImage,
        userHandle,
        postId,
        likeCount,
        commentCount,
      },
    } = this.props;
    return (
      <div className="posts">
        <h2>Posts</h2>
        <h4>{userHandle}</h4>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
