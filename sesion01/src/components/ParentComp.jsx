import React, { Component } from "react";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import SliderSection from "./SliderSection";
import DetailSection from "./DetailSection";
import Findsection from "./Findsection";
import ClientSection from "./ClientSection";
import SignSection from "./SignSection";
import InfoSection from "./InfoSection";
import ProdictItem from "./ProdictItem";

class ParentComp extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        { id: 1, src: "images/p1.png", price: "$120.00" },
        { id: 2, src: "images/p2.png", price: "$110.00" },
        { id: 3, src: "images/p3.png", price: "$150.00" },
        { id: 4, src: "images/p4.png", price: "$150.00" },
        { id: 5, src: "images/p5.png", price: "$150.00" },
        { id: 6, src: "images/p6.png", price: "$150.00" },
        { id: 7, src: "images/p7.png", price: "$150.00" },
        { id: 8, src: "images/p8.png", price: "$150.00" },
        { id: 9, src: "images/p9.png", price: "$150.00" },
        { id: 10, src: "images/p10.png", price: "$150.00" },
        { id: 11, src: "images/p11.png", price: "$150.00" },
        { id: 12, src: "images/p12.png", price: "$150.00" },
      ],
    };
  }
  render() {
    return (
      <>
        <div>
          <div className="hero_area">
            {/* header section strats */}
            <HeaderPage />
            {/* end header section */}
            {/* slider section */}
            <SliderSection />
            {/* end slider section */}
          </div>
          {/* detail section */}
          <DetailSection />
          {/* end detail section */}
          {/* products section */}
          <section className="products_section">
            <div className="heading_container">
              <h2>New Products In Store</h2>
              <p>Featured Product Just Arrived</p>
            </div>
            <div className="container layout_padding">
              <div className="product_container">
            {this.state.data.map((item,index) =>
             <ProdictItem key = {index}  price = {item.price} src = {item.src} />

            )}

            
              </div>
            </div>
          </section>
          {/* end products section */}
          {/* find section */}
          <Findsection />
          {/* end find section */}
          {/* client section */}
          <ClientSection />
          {/* end client section */}
          {/* sign section */}
          <SignSection />
          {/* end sign section */}
          {/* info section */}
          <InfoSection />
          {/* end info section */}
          {/* footer section */}
          <FooterPage />
        </div>
        ;
      </>
    );
  }
}

export default ParentComp;
