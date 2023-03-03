import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyList from "./pages/MyList/MyList";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home/>}/>
              <Route path="/my_list" element={<MyList />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/sign_up" element={<SignUp />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
