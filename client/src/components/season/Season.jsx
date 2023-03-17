import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import { AddButton } from "../buttons/AddButton";

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
      <motion.article
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="m-5"
      >
        <h3 className="lg:text-4xl text-6xl mt-5 text-auburn font-bold indent-4">
          Seasonal Animes!
        </h3>

        <div className="grid lg:grid-cols-4 grid-cols-2">
          {animes.data?.slice(0, 8).map((animeInfo) => (
            <div key={animeInfo.mal_id}>
              <figure className=" lg:mx-[5rem] lg:my-[5rem] ml-5 mt-10 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <img
                  className="rounded-lg shadow-lg lg:w-[15rem] w-[25rem]"
                  src={animeInfo.images.jpg.image_url}
                  alt=""
                />
              </figure>
              <div className="w-[25rem] lg:w-[20rem] lg:mt-[-3.5rem] lg:ml-[4rem] flex items-center ml-5">
                <span className="lg:text-justify tracking-tight text-4xl text-center lg:text-base lg:px-0 lg:py-0 text-rose">
                  <div>
                    <AddButton />
                  </div>
                  {animeInfo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.article>
    </>
  );
}
