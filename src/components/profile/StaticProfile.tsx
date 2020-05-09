import React from "react";
import dayjs from "dayjs";
import { Link } from "@reach/router";

const StaticProfile = (props: any) => {
  const {
    profile: { handle, createdAt, imageUrl, bio, steam, location },
  } = props;

  return (
    <div>
      <div className="profile-image">
        <img height="50px" width="50px" src={`${imageUrl}`} alt="profile" />
      </div>
      <hr />
      <div className="profile-details">
        <Link to={`users/${handle}`}>{handle}</Link>
        <hr />
        {bio && <p>{bio}</p>}
        <hr />
        {location && <p>{location}</p>}
        <hr />
        {steam && <p>{steam}</p>}
        <hr />
        <p>{dayjs(createdAt).format("MMM YYYY")}</p>
      </div>
    </div>
  );
};

export default StaticProfile;
