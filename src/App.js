import React, { Component } from "react";
import Giphy from "./components/Giphy";
import Gfycat from "./components/Gfycat";
// import PostApp from './components/PostApp'
// import ReCAPTCHA from "react-google-recaptcha";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Giphy /> */}
        <Gfycat />
      </div>
    );
  }
}

export default App;
