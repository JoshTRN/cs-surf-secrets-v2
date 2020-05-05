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
        <div className="posts">
          <img height="50px" width="50px" src={`${userImage}`} />
        </div>
        <h4>{userHandle}</h4>
        <p>{createdAt}</p>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
