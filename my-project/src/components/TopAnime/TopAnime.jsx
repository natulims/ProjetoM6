import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import "../TopAnime/TopAnime.css";

function TopAnime() {
  return (
    <>
      <motion.section
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="pb-[40px] pt-[40px] lg:pb-[160px] lg:pt-0"
      >
        <article className="topAnimes">
          <h3 className="topAnimes__title">Top 5 Animes</h3>

          <div className="flex flex-row">
            <h4 className="mt-8">#1</h4>

            <img
              className="topAnimes__img"
              src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
              alt=""
              srcset=""
            />

            <div className="topAnimes__list">
              <div className="grid grid-rows-2 gap-4">
                <p className="topAnimes__info">Anime</p>

                <ul className="grid grid-cols-5 gap-8 mx-3">
                  <li className="topAnimes__tag">action</li>
                  <li className="topAnimes__tag">adventure</li>
                  <li className="topAnimes__tag">thriller</li>
                  <li className="topAnimes__tag">drama</li>
                  <li className="topAnimes__tag">romance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <h4 className="mt-8">#1</h4>

            <img
              className="topAnimes__img"
              src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
              alt=""
              srcset=""
            />

            <div className="topAnimes__list">
              <div className="grid grid-rows-2 gap-4">
                <p className="topAnimes__info">Anime</p>

                <ul className="grid grid-cols-5 gap-8 mx-3">
                  <li className="topAnimes__tag">action</li>
                  <li className="topAnimes__tag">adventure</li>
                  <li className="topAnimes__tag">thriller</li>
                  <li className="topAnimes__tag">drama</li>
                  <li className="topAnimes__tag">romance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <h4 className="mt-8">#1</h4>

            <img
              className="topAnimes__img"
              src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
              alt=""
              srcset=""
            />

            <div className="topAnimes__list">
              <div className="grid grid-rows-2 gap-4">
                <p className="topAnimes__info">Anime</p>

                <ul className="grid grid-cols-5 gap-8 mx-3">
                  <li className="topAnimes__tag">action</li>
                  <li className="topAnimes__tag">adventure</li>
                  <li className="topAnimes__tag">thriller</li>
                  <li className="topAnimes__tag">drama</li>
                  <li className="topAnimes__tag">romance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <h4 className="mt-8">#1</h4>

            <img
              className="topAnimes__img"
              src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
              alt=""
              srcset=""
            />

            <div className="topAnimes__list">
              <div className="grid grid-rows-2 gap-4">
                <p className="topAnimes__info">Anime</p>

                <ul className="grid grid-cols-5 gap-8 mx-3">
                  <li className="topAnimes__tag">action</li>
                  <li className="topAnimes__tag">adventure</li>
                  <li className="topAnimes__tag">thriller</li>
                  <li className="topAnimes__tag">drama</li>
                  <li className="topAnimes__tag">romance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <h4 className="mt-8">#1</h4>

            <img
              className="topAnimes__img"
              src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
              alt=""
              srcset=""
            />

            <div className="topAnimes__list">
              <div className="grid grid-rows-2 gap-4">
                <p className="topAnimes__info">Anime</p>

                <ul className="grid grid-cols-5 gap-8 mx-3">
                  <li className="topAnimes__tag">action</li>
                  <li className="topAnimes__tag">adventure</li>
                  <li className="topAnimes__tag">thriller</li>
                  <li className="topAnimes__tag">drama</li>
                  <li className="topAnimes__tag">romance</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </motion.section>
    </>
  );
}

export default TopAnime;
