import React from "react";

function Posts(props: any) {
  return (
    <div className="posts">
      <h2>Posts</h2>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
}

export default Posts;
