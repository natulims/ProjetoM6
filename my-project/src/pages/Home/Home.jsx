import React from "react";
import Header from "../../components/Header/Header";
import Popular from "../../components/Popular/Popular";
import Trending from "../../components/Trending/Trending";
import TopAnime from "../../components/TopAnime/TopAnime";
import Power from "../../components/Power/Power";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Popular />
      <Trending />
      <TopAnime />
      <Power />
      <Footer />
    </>
  );
}

export default Home;
