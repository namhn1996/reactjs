import React, { Component } from "react";
import "./Baitap1.css";
class Baitap2 extends Component {
  render() {
    let a = 3;
    let b = 4;
    return (
      <div className="divdiv">
        <h2>
          Tổng của {a} và {b} là : {a + b}{" "}
        </h2>
      </div>
    );
  }
}

export default Baitap2;
