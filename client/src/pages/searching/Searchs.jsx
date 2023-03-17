import React, { useEffect, useState } from "react";
import Searchs from "../../pages/searching/Searchbar";
import ScrollToTop from "react-scroll-to-top";
import { AddButton } from "../../components/buttons/AddButton";

const api = "https://kitsu.io/api/edge/";

export default function Searching() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(`${api}anime?filter[text]=${text}&page[limit]=20`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <>
      <Searchs value={text} onChange={(search) => setText(search)} />
      {text && !info.data && (
        <span className="flex justify-center text-center text-sm tracking-tight">
          <img
            className="lg:w-[6rem] w-[2rem]"
            src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
            alt=""
          />
        </span>
      )}

      {info.data && (
        <ul className="grid  grid-cols-2 lg:grid-cols-5 mx-2 my-2 lg:mx-[10rem] lg:my-[10rem]">
          {info.data.map((anime) => (
            <li
              className="mb-5 rounded p-5 text-xl font-bold text-rose"
              key={anime.id}
            >
              <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <img
                  className="rounded-lg	lg:w-[15rem] w-[10rem]"
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                />
              </figure>
              <div className="overlay" onClick={() => handleList(anime)}>
                <AddButton />
              </div>
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: "2%" }} />
      <ScrollToTop smooth />
    </>
  );
}
