import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import "../upcoming/upcoming.css";

function Upcoming() {
    const [animes, setAnimes] = useState({ data: [] }); // initialize animes state with an empty array
    useEffect(() => {
      fetchAnimes();
    }, []);
  
    const fetchAnimes = async () => {
      const response = await fetch("https://api.jikan.moe/v4/seasons/upcoming");
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
        <div className="upcoming">
          <h3 className="upcoming__title">Upcoming Animes</h3>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-6">
            {animes.data?.slice(0, 11).map((animeInfo) => (
              <div key={animeInfo.mal_id} className="upcoming__container">
                <img
                  className="upcoming__img"
                  src={animeInfo.images.jpg.image_url}
                  alt=""
                />
                <span className="upcoming__text">
                  {animeInfo.title}
                </span>
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

export default Upcoming