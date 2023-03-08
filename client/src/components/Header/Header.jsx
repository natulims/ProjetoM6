import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import banner from "../../assets/img/banner.png";

import "../Header/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <motion.header
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="pb-[40px] pt-[40px] lg:pb-[160px] lg:pt-0"
      >
        <header className="header">
          <h2 className="header__title">
            Track, share and discover your new favorite anime with
            <span className="header__span"> Anikaze</span>
            <p>
              <Link to="/login">
                <button className="header__button">
                  login <i class="bx bx-right-arrow-alt"></i>
                </button>
              </Link>
            </p>
          </h2>

          <div className="header__img">
            <img className="my-9" src={banner} alt="banner" />
          </div>
        </header>
      </motion.header>
    </>
  );
}

export default Header;
