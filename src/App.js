import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import _ from "lodash";

class App extends Component {
  state = {
    message: "",
    color: "blue"
  };
  handleClick() {
    axios
      .post("/zap", { message: this.state.message })
      .then(response => console.log(response.data));
  }

  handleColor = () => {
    console.log("runs?");
    console.log("nothing");
    if (this.state.color === "blue") {
      this.setState({ color: "yellow" });
    } else {
      this.setState({ color: "blue" });
    }
  };

  render() {
    const debounced = _.debounce(this.handleColor, 2000);
    return (
      <div className="container">
        <div>Webhooks</div>
        <div>This message will be sent to timmy.a.matthews@gmail.com</div>
        <input onChange={e => this.setState({ message: e.target.value })} />
        <button onClick={() => this.handleClick()}>Send</button>
        <br />
        <div>Debounce</div>
        <div style={{ color: this.state.color }}>Color</div>
        <button onClick={debounced}>Stop Changing</button>
      </div>
    );
  }
}

export default App;
