import React from "react";
import $ from "jquery";
import "slick-carousel";

class Demo extends React.Component {
  constructor() {
    super();
    console.log("Khởi tạo Component");
    // khởi tạo trạng thái
    // Tính toán Props
  }

  state = {
    time: new Date(),
  };

  componentWillMount() {
    console.log("chạy trước hàm render");
  }

  render() {
    console.log("Render cấu trúc DOM");
    return (
      <div>
        <h1>Demo lifeCycle</h1>

        <p>Current time: {this.state.time.toLocaleString("vi-VN")}</p>

        <div className="carousel">
          <div className="carousel-item">item 1</div>
          <div className="carousel-item">item 2</div>
          <div className="carousel-item">item 3</div>
          <div className="carousel-item">item 4</div>
          <div className="carousel-item">item 5</div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // Từ react18 trở đi
    // ComponentDidmount sẽ auto gọi 2 lần

    this.timer = setInterval(() => {}, 1000);

    // $(".carousel").slick();
    // console.log("chạy sau khi render xong và hiển thị trên trình duyệt");
  }
}

export default Demo;

// componentDidMount (chỉ chạy duy nhất 1 lần sau khi render)
// componentDidUpload (chỉ chạy sau khi component cập nhật)

// => Đồng bộ trạng thái của ứng dụng React vs bên thứ 3
// hay còn gọi là thực hiện side effects

// componentWillUnMount
// Dọn dẹp các side effects

// componentWillUnmount
// Dọn dẹp các side effects (Bộ đếm, resquest, các event ở trên window)

// 1. Class dài dòng và không quen với người mới.
// 2. Hạn chế của lifeCycle menthods
//   - Lặp mã
//   - 1 lifeCycle method lại chứa quá nhiều logic.

// Ưu tiên sử dụng func component
// Trc đây gọi là Stateless component (có nghĩa là component không có trạng thái, chỉ render giao diện)
// Từ 16.8 trở lên thì ra mắt Hooks(useState, useMemo,useEffect ...)
// là các hàm đặc biệt cho phép func component có thể sử dụng được các tính năng của (React, lifecycle methods)

//  Tất cả các hooks bắt đầu bằng tiền tố use
// Cho phép tự tạo ra các hook riêng (customHooks)
