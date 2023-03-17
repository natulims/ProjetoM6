import React, { useEffect } from "react";
import Power from "../../components/power/Power";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import ScrollToTop from "react-scroll-to-top";
import { RemoveFromList } from "../../components/buttons/RemoveButton";

function MyList() {
  const animes = JSON.parse(localStorage.getItem("animeIds"));

  useEffect(() => {
    console.log(animes);
  }, []);

  return (
    <>
      <motion.article
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="m-5"
      >
        <h1 className="text-4xl text-auburn font-bold tracking-tight indent-4">
          Your plan to watch list
        </h1>
        <div key={animes?.map}>
          <figure className=" lg:mx-[5rem] lg:my-[5rem] ml-5 mt-10 relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="rounded-lg shadow-lg lg:w-[15rem] w-[10rem]"
              src="https://cdn.donmai.us/sample/17/c7/__yoru_chainsaw_man_drawn_by_bijian_de_linghun__sample-17c7ecfc66e4826962f59cde4835f2c7.jpg"
              alt=""
            />
          </figure>
          <div className="w-[10rem] lg:w-[20rem] lg:mt-[-3.5rem] lg:ml-[6rem] flex items-center ml-5">
            <span className="text-justify tracking-tight text-xl text-rose">
              <div>
                <RemoveFromList />
              </div>
            </span>
          </div>
        </div>
      </motion.article>
      <div style={{ marginTop: "2%" }} />
      <ScrollToTop smooth />
      <Power />
    </>
  );
}

export default MyList;
