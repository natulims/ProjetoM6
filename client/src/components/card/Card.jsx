import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import pochita from "../../assets/pochita.png";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
    <motion.article
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="m-5"
      >
      <div className="flex justify-center rounded-full lg:my-[8rem]">
        <motion.div whileHover={{ scale: 0.9 }}>
          <div className="flex flex-col rounded-full shadow-lg md:max-w-xl md:flex-row">
            <img
              className="h-96 w-full rounded-full object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={pochita}
              alt=""
            />
            <div className="flex flex-col justify-start p-6 bg-[#F5EAEA]">
              <h5 className="mb-2 text-4xl text-center tracking-normal font-bold text-auburn">
                Want to join us?
              </h5>
              <p className="text-mountbatten text-justify text-xl">
                <strong>Anikaze</strong> is a site create by fans, for fans! We
                are a small community that cares about our users. Join us now
                and discover new animes and make your own list!
              </p>
              <Link to="/login">
                {" "}
                <button className="py-2 px-4 bg-auburn w-[10rem] hover:bg-rosy rounded-lg shadow-lg focus:ring focus:ring-rosy text-misty ml-[5rem]">
                  login now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      </motion.article>
    </>
  );
}

export default Cards;
