import React, { Component } from 'react';

class Baitap2 extends Component {
    constructor(){
        super()
        this.state = {
            text : 'Rikkei Academy'
        }
    }
    handleChange =(e)=>{
        this.setState(
            {
            text : this.state.text == 'Rikkei Academy'? 'React Khó vl' : 'Rikkei Academy'
            }
        )
    }
    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.handleChange} >Change</button>
            </div>
        );
    }
}

export default Baitap2;