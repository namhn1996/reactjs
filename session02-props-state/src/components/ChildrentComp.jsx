import React, { Component } from "react";

class ChildrentComp extends Component {
  // State
  // State dùng để lưu trữ dữ liệu trong component đó => có thể thay đổi đc dữ liệu
  // Để sử dụg đc state cần khai báo lớp bằng constructor
  // Và sử dụng super để gọi lớp
  // Để cập nhật lại state => sử dụng setState
  constructor() {
    super();
    this.state = {
      studentA: "Nam Anh",
      question: "Có hay trốn không?",
      anwser: "không",
      display: true,
    };
    // Khi dùng funciton thường sẽ phải định nghĩa từ khóa this
    // this.handleChangeState = this.handleChangeState.bind(this); 
  }
handleChangeState = () => {
  this.setState({
    anwser: "có",
  });
};
// Function thường
// handleChangeState() {
//   this.setState({
//         anwser: "có",
//       })
// }

  handleToggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    return (
      <div>
        {/* Nhận props từ Parent cha */}
        <h2>
          {this.props.titleParent} - Khóa học: {this.props.course}
        </h2>
        <p>{this.props.children}</p>
        <h2>State</h2>
        <p>
          {this.state.studentA}
          <p />
          <p></p> {this.state.question}
          {this.state.anwser}{" "}
        </p>
        {/* Quy tắc đặt tên với các hàm xử lí 1 việc gì đó => sẽ có tiền tố trc là handle
        Với các hàm xử lí 1 sự kiện gì đó => sẽ có tiền tố là on */}
        <button onClick={this.handleChangeState}>Click !!!</button>
        {/* Cập nhật state liên tục */}
        {this.state.display ? (
          <div>
            <p>Anh Bách sp có nhiệt tình không?</p>
            <p>có</p>
            <button onClick={this.handleToggleDisplay} >Click !!</button>
          </div>
        ) : (
          <div>
            <p>Anh Bách sp có nhiệt tình không?</p>
            <p>rất nhiệt tình</p>
            <button onClick={this.handleToggleDisplay}>Click !!</button>
          </div>
        )}
      </div>
    );
  }
}

export default ChildrentComp;
