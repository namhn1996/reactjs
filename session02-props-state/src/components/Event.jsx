import React, { Component } from 'react';

class Event extends Component {
    // Sự kiện với arrow function
    handleClick01 = () => {
        console.log('Click 01');
    }
    // Trong jsx khi sử dụng 1 sự kiện => nếu sử dụng gọi hàm luôn handleClick02() thì hàm sẽ đc chạy
    // ngay sau khi component render
    handleClick02 = () => {
        console.log('Click 02');
    }
    handleClick03 = () => {
        console.log('Click 03');
    }
    handleClick04 = (e) => {
        console.log('Click 04');
        console.log(e);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick01}>Click 1</button>
                <button onClick={this.handleClick02()}>Click 2</button>
                <button onClick={() => this.handleClick03}>Click 3</button>
                <button onClick={() =>this.handleClick04('Huhuhuhuh')}>Click 4</button>
            </div>
        );
    }
}

export default Event;