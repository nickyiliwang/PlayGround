import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

export default class PostInfinite extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      let slicedArray = [];

      // slices the array into chunks
      for (let i = 0; i < 100; i += 20) {
        slicedArray.push(res.data.slice(i, i + 20));
      }

      this.setState({ posts: slicedArray });
    });
  }

  render() {
    const loader = <div className="loader">Loading ...</div>;
    
    let items = [];

    this.state.posts[0].map((post, i) => {
      items.push(
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.body}</div>
          <div>{post.userId}</div>
        </div>
      );
    });

    return (
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.state.loadItems}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >
          <div>{items}</div>
        </InfiniteScroll>
      </div>
    );
  }
}
