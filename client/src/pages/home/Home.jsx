import React from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import Season from "../../components/season/Season";
import ScrollToTop from "react-scroll-to-top";
import Upcoming from "../../components/upcoming/Upcoming";

function Home() {
  return (
    <>
      <div className="">
        <Header />
        <div style={{ marginTop: "10px" }} />
        <ScrollToTop smooth />
        <Cards />
        <Season />
        <Upcoming />
      </div>
    </>
  );
}

export default Home;