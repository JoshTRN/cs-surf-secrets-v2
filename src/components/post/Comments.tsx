import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";
import dayjs from "dayjs";

export class Comments extends Component<any, any> {
  render() {
    const { comments } = this.props;

    return (
      <div>
        {comments.map((comment: any) => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt}>
              <div className="post-user">
                <img
                  className="post-user-image"
                  height="30px"
                  width="30px"
                  src={`${userImage}`}
                  alt={`${userHandle} Profile`}
                />
                <Link className="nav-link" to={`/users/${userHandle}`}>
                  {userHandle}
                </Link>
              </div>
              <div>
                <p className="caption">
                  {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
                </p>

                <p className="font1">{body}</p>
              </div>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default Comments;
