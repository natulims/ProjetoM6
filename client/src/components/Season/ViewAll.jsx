// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import "../../components/Popular/Popular.css";

// function ViewAll() {
//     const [isShown, setIsShown] = useState(false);

//     const handleClick = (e) => {
//       setIsShown((current) => !current);
//     };

//   return (
//     <>
//       <button className="text-[20px] lg:text-[.5em]" onClick={handleClick}>
//         view all
//       </button>

//       <AnimatePresence>
//         {isShown && (
//           <motion.div
//             key="box"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{
//               easeInOut: [0.17, 0.67, 0.83, 0.67],
//               duration: 1,
//             }}
//           >
//             <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
//               <div className="popular__container">
//                 <img
//                   className="popular__img"
//                   src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
//                   alt=""
//                 />

//                 <div className="popular__list">
//                   <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
//                     <i class="bx bx-plus"></i> Add to list
//                   </button>
//                 </div>
//                 <p className="popular__text">Anime</p>
//               </div>

//               <div className="popular__container">
//                 <img
//                   className="popular__img"
//                   src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
//                   alt=""
//                 />

//                 <div className="popular__list">
//                   <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
//                     <i class="bx bx-plus"></i> Add to list
//                   </button>
//                 </div>
//                 <p className="popular__text">Anime</p>
//               </div>

//               <div className="popular__container">
//                 <img
//                   className="popular__img"
//                   src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
//                   alt=""
//                 />

//                 <div className="popular__list">
//                   <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
//                     <i class="bx bx-plus"></i> Add to list
//                   </button>
//                 </div>
//                 <p className="popular__text">Anime</p>
//               </div>

//               <div className="popular__container">
//                 <img
//                   className="popular__img"
//                   src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
//                   alt=""
//                 />

//                 <div className="popular__list">
//                   <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
//                     <i class="bx bx-plus"></i> Add to list
//                   </button>
//                 </div>
//                 <p className="popular__text">Anime</p>
//               </div>

//               <div className="popular__container">
//                 <img
//                   className="popular__img"
//                   src="https://upload.wikimedia.org/wikipedia/pt/2/26/Yoru_wa_Mijikashi_Arukeyo_Otome_poster.jpg"
//                   alt=""
//                 />

//                 <div className="popular__list">
//                   <button className="ml-15y text-auburn font-semibold text-sm border-none hover:text-rosy">
//                     <i class="bx bx-plus"></i> Add to list
//                   </button>
//                 </div>
//                 <p className="popular__text">Anime</p>
//               </div>
//             </div>{" "}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default ViewAll;
