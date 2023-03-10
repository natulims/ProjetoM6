import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import "../season/season.css";

export default function Season() {
  const [animes, setAnimes] = useState({ data: [] }); // initialize animes state with an empty array

  useEffect(() => {
    fetchAnimes();
  }, []);

  const fetchAnimes = async () => {
    const response = await fetch("https://api.jikan.moe/v4/seasons/now");
    const data = await response.json();
    setAnimes(data);
  };

  return (
    <>
      <motion.section
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className=""
      >
        <div className="season">
          <h3 className="season__title">Seasonal Animes</h3>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-6">
          {animes.data?.slice(0, 8).map((animeInfo) => (
                <div key={animeInfo.mal_id} className="season__container">
                  <img
                    className="season__img"
                    src={animeInfo.images.jpg.image_url}
                    alt=""
                  />
                  <span className="season__text">
                    {animeInfo.title}
                  </span>
                  <div className="season__list">
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
