import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Season from "../../components/season/Season";
import TopAnime from "../../components/topAnime/TopAnime";
import Upcoming from "../../components/upcoming/Upcoming";
// import Upcoming from "../../components/Upcoming/Upcoming";
// import TopAnime from "../../components/TopAnime/TopAnime";
// import Power from "../../components/Power/Power";
// import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Season />
      <Upcoming/>
      <TopAnime/>
      <Footer />

      {/* <Upcoming /> */}
      {/* <TopAnime /> */}
      {/* <Power /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
