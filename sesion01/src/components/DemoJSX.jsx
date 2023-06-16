import React, { Component } from 'react';

class DemoJSX extends Component {
    render() {
        const greeting = 'Hello Word !!!'
        const people = {
            name : "Nam Anh",
            course:'ReactJS'
        }
        return (
            
            <div>
                {/* {phép nội suy trong jsx} */}
                {/* {Lưu ý
                + class => className
                + các thuộc tính sẽ được viết theo camelCase ví dụ
                background-color => backgroundColor
                + các sự kiện cũng viết theo camelCase ví dụ
                onclick = > onClick, onchange => onChange
                } */}
              
              <h1 style={{backgroundColor:"pink" ,color:"white"}} className='container'>{greeting}</h1>
              <p>studentName: {people.name} - Khóa học: {people.course}</p>
            </div>
        );
    }
}

export default DemoJSX;