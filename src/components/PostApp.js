import React, { Component } from "react";
import axios from "axios";
import RenderPosts from "./components/RenderPosts";

export default class PostApp extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.posts !== null ? (
          <RenderPosts posts={this.state.posts} />
        ) : (
          "Loading ..."
        )}
      </div>
    );
  }
}
