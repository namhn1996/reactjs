import React, { Component } from 'react';

class Baitap5 extends Component {
    constructor(){
        super()
        this.state={
            textInput : ''
        }
    }
    handleSubmit =  e =>{
        e.preventDefault()
        alert(this.state.textInput)
    }
    handleInput = e =>{
        this.setState({
            textInput : e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.textInput} onChange={this.handleInput} />
                    <button type='submit'>ok ok ok ok </button>
                </form>
            </div>
        );
    }
}

export default Baitap5;