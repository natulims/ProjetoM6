import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../utilities/variant";
import "../Power/Power.css"

function Power() {
  return (
    <>
      <motion.section
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="pb-[40px] pt-[40px] lg:pb-[160px] lg:pt-0"
      >
        <div className="power">
          <img
            src="https://preview.redd.it/i-made-these-two-gifs-download-link-below-trust-me-they-are-v0-a6n0qdq7oe9a1.gif?width=612&auto=webp&s=935decc0c9fc7345199658501446ac49a2b267d6"
            alt=""
            srcset=""
          />
        </div>
      </motion.section>
    </>
  );
}

export default Power;
