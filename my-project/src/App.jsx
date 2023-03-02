import React from "react";
import Popular from "./components/Popular/Popular";
import Trending from "./components/Trending/Trending";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import TopAnime from "./components/TopAnime/TopAnime";
import Power from "./components/Power/Power";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
    <SignUp/>
      <Navbar />
      <Header />
      <Popular />
      <Trending />
      <TopAnime />
      <Power />
      <Footer />
    </>
  );
}

export default App;
