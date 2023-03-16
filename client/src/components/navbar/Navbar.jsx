import React from "react";
import logo from "/logo1.png"

function Navbar() {
  return (
    <>
      <nav className="w-full sticky z-10 flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <a href="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </a>

        <div className="flex gap-2.5 item-center">
          <a className="mt-2" href="">home</a>
          <a className="mt-2" href=""> my list</a>
          <a className="mt-2" href="">
            <i className="bx bx-user"></i>
          </a>

          <a
            href="/"
            className="font-inter font-medium text-sm bg-[#ff6464] text-white px-4 py-2.5 rounded-md"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
