import React, { Component } from "react";
import axios from "axios";

export default class Giphy extends Component {
  state = {
    term: "",
    gif: "https://media3.giphy.com/media/Xw0YvTTaSBP44/source.gif"
  };

  handleSearchRequest = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=nuBhOOiMJ9eBZIFtN6IQ3PC8FnyhufUH&q=${this.state.term}&limit=3&offset=0&rating=G&lang=en`
      )
      .then(res => {
        console.log(res);
        this.setState({ gif: res.data.data[0].images.original.url });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleSearchRequest();
  };

  render() {
    return (
      <div>
        <img src={this.state.gif} id="image" alt="Gif" />

        <form onSubmit={this.handleSubmit}>
          <input
            onChange={e => {
              this.setState({ term: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}
