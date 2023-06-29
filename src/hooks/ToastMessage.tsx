import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// interface IToast {
//   title: string;
//   onClick: () => void;
// }

const ToastMessage = () => {
  // const { title = "hello", onClick } = props;

  // const notify = () => toast(title);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default ToastMessage;
