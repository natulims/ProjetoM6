import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import "../TopAnime/TopAnime.css";

function TopAnime() {
  const [animes, setAnimes] = useState({ data: [] });

  useEffect(() => {
    fetchAnimes();
  }, []);

  const fetchAnimes = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await response.json();
    setAnimes(data);
  };

  return (
    <>
      <motion.section
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="pb-[40px] pt-[40px] lg:pb-[160px] lg:pt-0"
      >
        <h3 className="TopAnimes__title">Top 5 Animes</h3>

        <AnimatePresence>
          {animes.data?.slice(0, 5).map((animeInfo, index) => (
            <motion.article
              key={animeInfo.mal_id}
              className="TopAnimes"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="flex flex-row">
                <h4 className="mt-8">{index + 1}</h4>
                <img
                  className="TopAnimes__img"
                  src={animeInfo.images.jpg.image_url}
                  alt={animeInfo.title}
                />
                <div className="TopAnimes__list">
                  <div className="grid grid-rows-2 gap-4">
                    <p className="TopAnimes__info">{animeInfo.title}</p>
                    <ul className="grid grid-cols-5 gap-8 mx-3">
                      {animeInfo.genres.map((genre) => (
                        <li key={genre.mal_id} className="TopAnimes__tag">
                          {genre.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.section>
    </>
  );
}

export default TopAnime;
