import React, { Component } from "react";
import Baitap6Head from "./Baitap6Head";
import Baitap6Main1 from "./Baitap6Main1";
import Baitap6Main2 from "./Baitap6Main2";
import Baitap6List from "./Baitap6List";
import "./telephone_shop_template/style.css";
class Baitap6 extends Component {
  render() {
    return (
      <div>
        <Baitap6Head />
        <Baitap6Main1 />
        <Baitap6Main2 />
        <div className="single-product-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
              <div className="col-md-3 col-sm-6">
                <Baitap6List />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Baitap6;
