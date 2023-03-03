import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="z-[999] fixed w-full flex justify-between bg-mountbatten sm:px-8 px-4 py-4 z-2">
        <Link to="/">
          <img src="" alt="logo" srcset="" />
        </Link>

        <div className="w-full flex justify-center">
          <p className="relative group">
            <Link
              className="px-4 py-4 text-misty lg:text-[1.5em] text-[20px]"
              to="/"
            >
              <span>home</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-auburn group-hover:w-1/2 group-hover:transition-all "></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-auburn group-hover:w-1/2 group-hover:transition-all"></span>
            </Link>
          </p>

          <p className="relative group">
            <Link
              className="px-4 py-4 text-misty lg:text-[1.5em] text-[20px]"
              to="/my_list"
            >
              <span>my list</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-auburn group-hover:w-1/2 group-hover:transition-all "></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-auburn group-hover:w-1/2 group-hover:transition-all"></span>
            </Link>
          </p>

          <p className="relative group">
            <Link
              className="px-4 py-4 text-misty lg:text-[1.5em] text-[20px]"
              to="/login"
            >
              <span>login</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-auburn group-hover:w-1/2 group-hover:transition-all "></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-auburn group-hover:w-1/2 group-hover:transition-all"></span>
            </Link>
          </p>

          <p className="relative group">
            <Link
              className="px-4 py-4 text-misty lg:text-[1.5em] text-[20px]"
              to="/sign_up"
            >
              <span>sign up</span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-auburn group-hover:w-1/2 group-hover:transition-all "></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-auburn group-hover:w-1/2 group-hover:transition-all"></span>
            </Link>
          </p>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
