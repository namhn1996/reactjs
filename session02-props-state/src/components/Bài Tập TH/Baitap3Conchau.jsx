import React, { Component } from 'react';

class Baitap3Conchau extends Component {
    constructor(){
        super()
        this.state= {
            value:0
        }
    }
    cong1 = () =>{
        this.setState({
            value:this.state.value + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.cong1} >Click !!</button>
                <label>{this.state.value}</label>
            </div>
        );
    }
}

export default Baitap3Conchau;