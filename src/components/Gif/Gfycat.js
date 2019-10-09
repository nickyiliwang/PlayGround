import React, { Component } from "react";
import axios from "axios";
// Todo: animating the gif on hover

export default class Gfycat extends Component {
  state = {
    term: "",
    gif: "https://media3.giphy.com/media/Xw0YvTTaSBP44/source.gif"
  };

  handleSearchRequest = () => {
let randomNumber = Math.floor(Math.random() * Math.floor(9))

    axios
      .get(
        `https://api.gfycat.com/v1/gfycats/search?search_text=${this.state.term}`
      )
      .then(res => {
        this.setState({ gif: res.data.gfycats[randomNumber].gifUrl });
        console.log(res.data.gfycats);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleSearchRequest();
  };

  render() {
    return (
      <div>
        <img src={this.state.gif} id="gif" alt="gif" />

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
