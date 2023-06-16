import React, { Component } from 'react';

class Baitap7 extends Component {
    constructor(){
        super();
        this.state = {
            color: ' red',
            isShow: true,
            fontSize :30,
            content : 'hellooo'
        }
    }
    handleShow = () => {
        {this.setState({
        isShow: !this.state.isShow
    })}

    }
    handleChange = () => {
        this.setState({
        color:this.state.color == 'red' ? 'black':'red',
        fontSize: this.state.fontSize == 30 ? 50 : 30,
    })
    }
    render() {
        return (
            <div>
                <h1>Show</h1>
                <button onClick={this.handleShow}>Ẩn hiện</button>
                <button onClick={this.handleChange}>Đổi màu</button>
                {this.state.isShow ? <p style={{color:this.state.color, fontSize:this.state.fontSize}}>{this.state.content}</p> : ''} 
            </div>
        );
    }
}

export default Baitap7;