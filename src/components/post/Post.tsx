import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import DeletePost from "./DeletePost";
import PostDialog from "./PostDialog";
import LikeButton from "./LikeButton";
import { Link } from "@reach/router";

import { connect } from "react-redux";

class Post extends Component<any, any> {
  render() {
    dayjs.extend(relativeTime);
    const {
      post: {
        body,
        createdAt,
        userImage,
        userHandle,
        likeCount,
        commentCount,
        postId,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeletePost postId={postId} />
      ) : null;

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
        <Link to={`/users/${userHandle}`}>{userHandle}</Link>
        {deleteButton}
        <p>{dayjs(createdAt).fromNow()}</p>
        <p>{body}</p>
        <LikeButton postId={postId} />
        <span>{likeCount} Likes</span>
        <br />
        <span>{commentCount} Comments</span>
        <PostDialog postId={postId} userHandle={userHandle} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Post);
