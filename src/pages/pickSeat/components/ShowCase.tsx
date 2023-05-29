import React from "react";
import "../index.css";
const ShowCase = () => {
  return (
    <>
      <ul className="ShowCase">
        <li>
          <span className="seat" /> <small>Trống</small>
        </li>
        <li>
          <span className="seat selected" /> <small>Đã chọn</small>
        </li>
        <li>
          <span className="seat occupied" /> <small>Đang chọn</small>
        </li>
        <li>
          <span className="seat standard" /> <small>Standard</small>
        </li>
        <li>
          <span className="seat vip" /> <small>Vip</small>
        </li>
        <li>
          <span className="seat sweetBox" /> <small>SweetBox</small>
        </li>
      </ul>
    </>
  );
};

export default ShowCase;
