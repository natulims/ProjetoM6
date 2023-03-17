import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="w-full sticky z-10 flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <div>
          <Link to="/">
            <img src="" alt="anikaze logo" className="w-28 object-contain" />
          </Link>
        </div>

        <div className="flexjustify-end">
          <ul className="flex flex-row gap-2.5 lg:text-[15px] sm:text-3xl">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/search">search</Link>
            </li>
            <li>
              <Link to="/my_list">my list</Link>
            </li>
            <li>
              <Link to="/login">sign in</Link>
            </li>
            <li>
              <Link to="/sign_up">sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
