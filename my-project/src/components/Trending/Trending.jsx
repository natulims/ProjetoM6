import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../utilities/variant";
import "../Trending/Trending.css";

function Trending() {
  return (
    <>
      <motion.section
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="pb-[40px] pt-[40px] lg:pb-[160px] lg:pt-0"
      >
        <section className="trending">
          <h3 className="a">Trending now</h3>
          <div className="">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
              <div className="trending__container">
                <img
                  className="trending__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="trending__list">
                  <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
                    <i class="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>

              <div className="trending__container">
                <img
                  className="trending__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="trending__list">
                  <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
                    <i class="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>

              <div className="trending__container">
                <img
                  className="trending__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="trending__list">
                  <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
                    <i class="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>

              <div className="trending__container">
                <img
                  className="trending__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="trending__list">
                  <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
                    <i class="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>

              <div className="trending__container">
                <img
                  className="trending__img"
                  src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
                  alt=""
                />

                <div className="trending__list">
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

export default Trending;
