import React, { Component } from 'react';

class Baitap6List extends Component {
    render() {
        return (
            <div>
               <div className="single-shop-product">
          <div className="product-upper">
            <img src="img/product-2.jpg" alt="" />
          </div>
          <h2>
            <a href="">Apple new mac book 2015 March :P</a>
          </h2>
          <div className="product-carousel-price">
            <ins>$899.00</ins> <del>$999.00</del>
          </div>
          <div className="product-option-shop">
            <a
              className="add_to_cart_button"
              data-quantity={1}
              data-product_sku=""
              data-product_id={70}
              rel="nofollow"
              href="/canvas/shop/?add-to-cart=70"
            >
              Add to cart
            </a>
          </div>
        </div>

            </div>
        );
    }
}

export default Baitap6List;