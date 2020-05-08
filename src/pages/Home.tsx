import React, { Component } from "react";
import Post from "../components/post/Post";

import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";

class HomePage extends Component<any, any> {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.data;
    let recentPostsMarkup = !loading ? (
      posts.map((post: any) => <Post key={post.postId} post={post} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <h1>Posts</h1>
        <h2>{recentPostsMarkup}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getPosts })(HomePage);
