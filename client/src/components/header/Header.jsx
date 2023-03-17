import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import { Link } from "react-router-dom";

function Header() {
  return (
<>
<motion.header
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="lg:pt-0"
      ><div className="bg-[#F7E7E6] relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="#F6E7E6"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56  shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://i.redd.it/kr2xgb7uilq61.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 lg:text-5xl text-7xl tracking-tight text-justify lg:text-center font-bold text-auburn">
            Track, share and 
            <br className="hidden md:block" />
            discover your new favorite anime with
            <span className="inline-block text-rosy indent-2">Anikaze</span>
          </h2>
          <p className="space-x-3 text-4xl text-justify lg:text-base pr-5 mb-5 text-mountbatten">
            Keep track of the most watched animes or which one will have a
            new season! Customize your favorite list, your profile and much
            more!
          </p>
          <Link to="/search">
            <button className="shadow-lg focus:ring focus:ring-rosy  bg-auburn hover:bg-rosy text-misty text-2xl rounded ml-32 font-bold py-3 px-7">
              search <i className="bx bx-right-arrow-alt"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </motion.header>
</>
  )
}

export default Header