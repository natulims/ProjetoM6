import React from "react";
import Header from "../../components/Header/Header";
import Season from "../../components/Season/Season";
import Upcoming from "../../components/Upcoming/Upcoming";
import TopAnime from "../../components/TopAnime/TopAnime";
import Power from "../../components/Power/Power";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Season />
      <Upcoming />
      <TopAnime />
      <Power />
      <Footer />
    </>
  );
}

export default Home;
