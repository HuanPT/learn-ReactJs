import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Thay thế cho didmount
  // Cú pháp chung
  // useEffect(effectFunc, dependencies);
  // Dependencies là hàm chỉ chạy khi 1 trong các giá trị thay đổi.

  // useEffect(
  //   () => {
  //     console.log("mounted");
  //     setInterval(() => {
  //       setCount(count + 1);
  //     }, 1000);
  //   },
  //   []
  //   // Dependencies là 1 mảng rỗng
  // );

  // chạy lần đầu tiên, và mỗi khi một trong giá trị dependencies thay đổi.
  useEffect(
    () => {
      console.log("mounted");
      // setInterval(() => {
      //   setCount(count + 1);
      // }, 1000);
    },
    [count]
    // Dependencies là count thay đổi thì hàm mới được kích hoạt
  );

  // Gộp cả 2 thằng didMount và didUpload
  // chạy cả lần đầu tiên và mỗi lần cập nhật.
  useEffect(() => {
    console.log("mount/upload");

    // let timer = setInterval(() => {
    //   setCount((prev) => prev + 1);
    // }, 1000);

    // Đóng vai trò dọn dẹp
    // chạy ở lần render sau, trước khi chạy useEffect mới

    // Trước khi chạy useEffect thì kiểm tra lần trước đó có chạy hàm hay không? nếu có thì chạy hàm trước, sau đó thì đến useEffect

    //vd:
    // Lần đầu tiên chạy: chưa có hàm (bỏ qua) => set(1)
    // return hàm clear(1)
    // lần chạy thứ 2: chạy hàm clear(1) => set(2) => return hàm clear(2)
    // lần chạy thứ 3: chạy hàm clear(2) => set(3) => return hàm clear(3)
    // ...

    return () => {
      // Dọn dẹp bộ đếm, xóa sự kiện trên window, hủy bỏ request ...
      console.log("Hàm dọn dẹp count =", count);
      clearInterval(timer);
    };
  });

  // Các lỗi thường gặp
  // 1. Không xác định đúng Dependencies
  //   - Muốn nó chạy khi nào? 1 lần, nhiều lần, phụ thuộc cái gì không?
  //   - Tất cả những giá trị sử dụng phụ thuộc bên trong uesEffect (state, hàm) thì nên có mặt trong mảng dependecies
  //   - Triển khai hàm dọn dẹp.
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>clickMe</button>
    </div>
  );
}

// state có thể nhận vào 1 hàm (lazyInitialState)
// setState: cũng có thể nhân vào 1 hàm, sẽ nhận vào giá trị trạng thái trước đó(thường dùng để tránh bị cache callback)

// effect
// Về cơ bản: cho phép triển khai các lifecycle methods trong func components (thay thế cho didMount,didUpload, willUnMount)

// context
// Cung cấp các giá trị chung cho toàn bộ cây thành phần con sử dụng, tránh chuyền props qua nhiều cấp.

// Khi gọi comp <Counter /> lần đầu tiên
// Khởi tạo(chạy câu lệnh trc render) (đặt 1 setInterval)
// render => hiển thị trên DOM
// kích hoạt hàm sau khi render

// Trước mỗi lần cập nhật sẽ kích hoạt hàm dọn dẹp

// Khi cập nhật (do state thay đổi)
// lại chạy lại các câu lệnh từ đầu
// render => hiển thị DOM mới
// Kích hoạt hàm sau render

// Mounting - Lần đầu nó được gọi
//
//
