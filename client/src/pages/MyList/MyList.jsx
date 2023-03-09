import React from "react";
import Power from "../../components/Power/Power";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

function MyList() {
  const animes = JSON.parse(localStorage.getItem("animeIds"));

  useEffect(() => {
    console.log(animes);
  }, []);

  return (
    <>
      {animes?.map((ids) => (
        <h1>{ids}</h1>
      ))}
      <Power />
      <Footer />
    </>
  );
}

export default MyList;
