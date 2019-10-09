import React, { Component } from "react";

export default class RenderPost extends Component {

  render() {
    return (
      <div>
        <div>{this.props.post.title}</div>
        <div>{this.props.post.body}</div>
        <div>{this.props.post.userId}</div>
      </div>
    );
  }
}
