import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000); // Mỗi giây sẽ giảm 1 giây

    return () => {
      clearInterval(interval);
    }; // Xóa interval khi component bị unmount
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      // Xử lý khi thời gian đếm ngược kết thúc
      // Ví dụ: Hiển thị thông báo, gọi hàm callback, vv.
      console.log("Đếm ngược đã kết thúc");
    }
  }, [seconds]);

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return <div style={{ fontSize: "24px" }}>{formatTime(seconds)}</div>;
};

export default CountdownTimer;
