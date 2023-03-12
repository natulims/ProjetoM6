import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SearchAnimes from "./pages/searchAnimes/SearchAnimes";
import Login from "./pages/login/Login"
import MyList from "./pages/myList/MyList"
import SignUp from "./pages/signUp/SignUp"

function App() {
  return (
    <>
      <>
        <nav>
          <Navbar />
        </nav>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchAnimes />} />
              <Route path="/my_list" element={<MyList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign_up" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <footer>
          <Footer />
        </footer>
      </>
    </>
  );
}

export default App;
