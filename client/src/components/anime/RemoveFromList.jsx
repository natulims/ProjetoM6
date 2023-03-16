import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RemoveFromList = () => {
  const notify = () => toast("Removed from your list!");
  return (
    <>
      <button
        className="hover:bg-rosy bg-auburn text-misty text-[15px] mt-2 px-5 py-[5px] rounded-md"
        onClick={notify}
      >
        {" "}
        remove from list <i className="bx bx-minus text-[15px] text-bold"></i>
      </button>
      <ToastContainer />
    </>
  );
};
