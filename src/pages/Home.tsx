import React, { Component } from "react";
import Post from "../components/post/Post";
import CreatePost from "../components/post/CreatePost";

import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";

import Hero from "../Assets/images/csgo-hero1.jpg";
class HomePage extends Component<any, any> {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.data;
    const { authenticated } = this.props;
    let recentPostsMarkup = !loading ? (
      posts.map((post: any) => <Post key={post.postId} post={post} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <div className="hero-container">
          <img className="hero-image" src={Hero} />
        </div>
        <div className="home">
          <h1>Posts</h1>
          {authenticated ? <CreatePost /> : null}

          <div className="post-container">{recentPostsMarkup}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  data: state.data,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { getPosts })(HomePage);
