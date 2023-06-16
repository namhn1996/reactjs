import React, { Component } from 'react';

class Baitap3 extends Component {
    render() {
        let today = new Date ()
        let date = today.getHours()+'-'+(today.getMinutes()+1)+'-'+today.getSeconds();
       
        return (
            <div>
                <h1>Xin chào các bạn!</h1>
                <h2>Bây giờ là: {date}</h2>
            </div>
        );
    }
}

export default Baitap3;