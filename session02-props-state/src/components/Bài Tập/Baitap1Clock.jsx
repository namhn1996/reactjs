import React, { Component } from "react";
import Baitap1Time from "./Baitap1Time";
import Baitap1Button from "./Baitap1Button";

class Baitap1Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      isRunning: true,
    };
  }
  hanldSrart = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
    this.setState({ isRunning: true });
  };
  render() {
    const { time } = this.state;
    return (
      <div>
        <Baitap1Time time={time} />
        <Baitap1Button />
      </div>
    );
  }
}

export default Baitap1Clock;
