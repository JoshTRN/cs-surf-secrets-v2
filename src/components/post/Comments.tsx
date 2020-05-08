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
              <div>
                <img
                  height="30px"
                  width="30px"
                  src={`${userImage}`}
                  alt={`${userHandle} Profile`}
                />
              </div>
              <div>
                <Link to={`/users/${userHandle}`}>{userHandle}</Link>
                <p>{dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}</p>
                <hr />
                <p>{body}</p>
              </div>
              <hr />
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default Comments;
