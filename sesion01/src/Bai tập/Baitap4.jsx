import React, { Component } from "react";
import Baitap4card from "./Baitap4card";
import Baitap4tinhtien from "./Baitap4tinhtien";
class Baitap4 extends Component {
  render() {
    return (
      <div>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="mb-3">
                          <a href="#!" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2" />
                            Continue shopping
                          </a>
                        </h5>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-1">Shopping cart</p>
                            <p className="mb-0">
                              You have 4 items in your cart
                            </p>
                          </div>
                          <div>
                            <p className="mb-0">
                              <span className="text-muted">Sort by:</span>{" "}
                              <a href="#!" className="text-body">
                                price <i className="fas fa-angle-down mt-1" />
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="card mb-3">
                        
                        </div>
                        <div className="card mb-3">
                        <Baitap4card/>
                        </div>
                        <div className="card mb-3">
                        <Baitap4card/>
                        </div>
                        <div className="card mb-3 mb-lg-0">
                        <Baitap4card/>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="card bg-primary text-white rounded-3">
                        <Baitap4tinhtien/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Baitap4;
