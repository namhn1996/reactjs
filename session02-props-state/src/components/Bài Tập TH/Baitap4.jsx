import React, { Component } from 'react';

class Baitap4 extends Component {
    constructor(){
        super()
        this.state= {
            count : 0
        }
    }
    handleCount=()=>{
     this.setState(
        {
            count: this.state.count +1
        }
     )   
    }
    render() {
        return (
            <div>
            <p>Số lần xuất hiện là :{this.state.count}</p>
            <button onClick={this.handleCount} >Xuất hiện</button>
            </div>
        );
    }
}

export default Baitap4;