import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Searching from "./pages/searching/Searchs";
import Profile from "./pages/profile/Profile";
import MyList from "./pages/myList/MyList";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Searching />} />
            <Route path="/my_list" element={<MyList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
