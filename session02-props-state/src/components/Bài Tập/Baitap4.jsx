import React, { Component } from 'react'

export default class Baitap4 extends Component {
  constructor(){
    super()
    this.state = {
      data : [
        {id:1,name:'Nam',age:18},
        {id:2,name:'Phuc',age:38},
        {id:3,name:'Long',age:28},
        {id:4,name:'Back',age:8},
        {id:5,name:'Lon',age:48},
        {id:6,name:'Meo Meo',age:58},
        {id:7,name:'Chim không to',age:68}
      ]
    }
  }
  render() {
    return (

      <div>
        <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {this.state.data.map((item,index) =>{
          
        })}
        <tr> 
          {/* <td>{this.state.data[1].id}</td>
          <td>{this.state.data[1].name}</td>
          <td>{this.state.data[1].age}</td> */}
        </tr>
        </table>
      </div>
    )
  }
}
