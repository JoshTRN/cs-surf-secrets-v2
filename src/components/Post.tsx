import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

class Post extends Component<any, any> {
  render() {
    dayjs.extend(relativeTime);
    const {
      post: {
        body,
        createdAt,
        userImage,
        userHandle,
        /*         postId,
        likeCount,
        commentCount, */
      },
    } = this.props;
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
      </div>
    );
  }
}

export default Post;
