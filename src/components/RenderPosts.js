import React, { Component } from "react";
import RenderPost from "./RenderPost";

export default class RenderPosts extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <RenderPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
