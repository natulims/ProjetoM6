import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddToList = () => {
  const notify = () => toast("Added to your list!");
  return (
    <>
      <button
        className="hover:bg-rosy bg-auburn text-misty text-[15px] mt-2 px-5 py-[5px] rounded-md"
        onClick={notify}
      >
        {" "}
        add to list <i className="bx bx-plus text-[15px] text-bold"></i>
      </button>
      <ToastContainer />
    </>
  );
};
