import React, { Component } from "react";
import axios from "axios";
import Post from "../components/post/Post";
import StaticProfile from "../components/profile/StaticProfile";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

class User extends Component<any, any> {
  state = {
    profile: null,
    postIdParam: null,
  };

  componentDidMount() {
    const url = window.location.href;
    const handleAndPost = url.slice(28);
    const urlArr = handleAndPost.split("/");
    const handle = urlArr[0];
    const postId = urlArr[2];
    console.log(handle);
    console.log(postId);

    if (postId) this.setState({ postIdParam: postId });

    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { posts, loading } = this.props.data;
    const { postIdParam } = this.state;

    const postsMarkup = loading ? (
      <p>Loading data...</p>
    ) : posts === null ? (
      <p>No Posts from this User</p>
    ) : !postIdParam ? (
      posts.map((post: any) => <Post key={post.postId} post={post} />)
    ) : (
      posts.map((post: any) => {
        if (post.postId !== postIdParam) {
          return <Post key={post.postId} post={post} />;
        } else return <Post key={post.postId} post={post} openDialog />;
      })
    );

    return (
      <div className="user">
        <h1>Posts</h1>
        <h2>{postsMarkup}</h2>
        {this.state.profile === null ? (
          <p>Loading Profile...</p>
        ) : (
          <StaticProfile profile={this.state.profile} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(User);
