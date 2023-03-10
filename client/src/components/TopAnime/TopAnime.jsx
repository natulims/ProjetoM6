import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import "../topAnime/topAnime.css";

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
      >
        <div className="topAnime">
          <h3 className="topAnime__title">Top Animes</h3>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-6">
            {animes.data?.slice(0, 10).map((animeInfo, index) => (
              <div key={animeInfo.mal_id} className="topAnime__container">
                <img
                  className="topAnime__img"
                  src={animeInfo.images.jpg.image_url}
                  alt=""
                />
                <span className="topAnime__text">{animeInfo.title}</span>
                <div className="upcoming__list">
                  <button
                    className="mb-[5rem] ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy"
                    onClick={() => {
                      // get the existing list of ids from local storage
                      const existingIds =
                        JSON.parse(localStorage.getItem("animeIds")) || [];
                      // add the current anime's id to the list
                      if (existingIds.includes(animeInfo.mal_id)) {
                        return;
                      }
                      const updatedIds = [...existingIds, animeInfo.mal_id];
                      // save the updated list back to local storage
                      localStorage.setItem(
                        "animeIds",
                        JSON.stringify(updatedIds)
                      );
                    }}
                  >
                    <i className="bx bx-plus"></i> Add to list
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default TopAnime;
