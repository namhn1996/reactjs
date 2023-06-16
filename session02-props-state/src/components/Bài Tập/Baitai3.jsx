import React, { Component } from "react";

class Baitai3 extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      display: false,
    };
  }
  hanldeSubmit = (e) => {
    e.preventDefault();
    this.setState({
        display: true,
      });
  };
  hanldeInput = (e) => {
    this.setState({
      textInput: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.hanldeSubmit}>
          <input onChange={this.hanldeInput} value={this.state.textInput} />
          <button type="submit">Show</button>
        </form>
        <p>{this.state.display ? this.state.textInput : ""}</p>
      </div>
    );
  }
}

export default Baitai3;
