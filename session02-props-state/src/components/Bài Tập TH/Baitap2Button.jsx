import React, { Component } from 'react';

class Baitap2Button extends Component {
    render() {
        return (
            <div>
                <button style={{color:this.props.color, background:this.props.background}}  >
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default Baitap2Button;