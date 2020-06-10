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
      <div className="post">
        <div className="post-user">
          <img
            className="post-user-image"
            height="50px"
            width="50px"
            src={`${userImage}`}
            alt={`${userHandle}`}
          />
          <Link className="nav-link" to={`/users/${userHandle}`}>
            {userHandle}
          </Link>
        </div>

        {deleteButton}
        <p className="caption">{dayjs(createdAt).fromNow()}</p>
        <p className="font1">{body}</p>
        <LikeButton postId={postId} />
        <span className="caption">{likeCount} Likes </span>
        <span className="caption">{commentCount} Comments </span>
        <PostDialog
          postId={postId}
          userHandle={userHandle}
          openDialog={this.props.openDialog}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Post);
