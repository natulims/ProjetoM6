import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "/logo2.png";
import { fadeIn } from "../../utilities/variant";

function Footer() {
  return (
    <>
      <footer className="bg-rosy text-center w-full mt-[5rem]">
        <motion.footer
          variants={fadeIn("right")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="lg:pt-0"
        >
          <div className="p-4 text-center">
            <p className=" text-misty font-bold">© 2023 Copyright</p>
            <div className="w-[150px]">
              <img className="flex justify-center lg:ml-[52rem]" src={logo} />
            </div>
            <p className="text-misty font-bold">All Rights Reserved.</p>
          </div>
        </motion.footer>
      </footer>
    </>
  );
}

export default Footer;
