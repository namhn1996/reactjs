import React, { Component } from "react";

class Baitap6 extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      array: [],
      total: 0,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      array: [...this.state.array, this.state.number],
      total: this.state.total + Number(this.state.number),
      number: "",
    });
  };
  handleInput = (e) => {
    this.setState({
      number: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="numer"
            value={this.state.number}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <span> Kết quả</span>
        {this.state.array.length != 0 ? (
          <p>
            {this.state.array.join("+")}={this.state.total}
          </p>
        ) : null}
      </div>
    );
  }
}

export default Baitap6;
