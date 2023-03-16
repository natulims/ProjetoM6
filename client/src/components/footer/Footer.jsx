import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
import logo from "/logo1.png";
// import { fadeIn } from "../../utilities/variant";

function Footer() {
  return (
    <>
      <footer className="footer text-center p-4 bg-base-300 text-base-content">
        <div className="flex justify-center">
          <img className="w-[10rem]" src={logo} alt="" />
        </div>
        <div>
          <p className="text-2xl font-bold">Copyright © 2023</p>
        </div>
        <div className="flex justify-center gap-2 mt-5">
          <a
            href="https://github.com/natulims/ProjetoM6"
            target="_blank"
            className="text-4xl text-rose hover:text-[#D54D44]"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/natulims/"
            target="_blank"
            className="text-4xl text-rose hover:text-[#D54D44]"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.deviantart.com/natulims"
            target="_blank"
            className="text-4xl text-rose hover:text-[#D54D44]"
          >
            <i className="bx bxl-deviantart"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
