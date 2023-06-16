import React, { Component } from "react";
import ChildrentComp from "./ChildrentComp";

class ParentComp extends Component {
// Props:
// Props là viết tắt của properties
// Props dùng để lưu trữ các Attribute
// Giá trị props không thể thay đổi
// Props dùng để giao tiếp giữa các component với nhau(VD: từ cha xuống con)
// ParentComp => ChildrenComp


  render() {
    const title = 'Rikkei Academy'
    return <div >
        <ChildrentComp titleParent={title} course = {'ReactJS'}>Time: 15 buổi</ChildrentComp>
        </div>;
  }
}

export default ParentComp;
