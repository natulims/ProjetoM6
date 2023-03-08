import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../utilities/variant";
import "../Popular/Popular.css";

function Popular() {

  return (
    <>
      <motion.section
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="pb-[40px] pt-[40px] lg:pb-[160px] lg:pt-0"
      >
        <section className="popular">
          <h3 className="a">Popular animes this week</h3>
          <div className="">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
              <div className="popular__container">
                <img
                  className="popular__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="popular__list">
                  <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
                    <i class="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>

              <div className="popular__container">
                <img
                  className="popular__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="popular__list">
                  <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
                    <i class="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>

              <div className="popular__container">
                <img
                  className="popular__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="popular__list">
                  <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
                    <i class="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>

              <div className="popular__container">
                <img
                  className="popular__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="popular__list">
                  <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
                    <i class="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>

              <div className="popular__container">
                <img
                  className="popular__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="popular__list">
                  <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
                    <i class="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.section>
    </>
  );
}

export default Popular;
