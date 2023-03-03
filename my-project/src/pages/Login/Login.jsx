import React from "react";
import Power from "../../components/Power/Power";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-red-50 rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-mountbatten">
            Login
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-mountbatten"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-rosy border rounded-md focus:border-rusty focus:ring-rusty focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-mountbatten"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-mountbatten  border rounded-md focus:border-rusty focus:ring-rusty focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="#" className="text-xs text-auburn hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-misty transition-colors duration-200 transform bg-auburn rounded-md hover:bg-rosy focus:outline-none focus:bg-rusty">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-rusty">
            Don't have an account?
            <Link to="/sign_up"> Register now!</Link>
          </p>
        </div>
      </div>
      <Power/>
      <Footer/>
    </>
  );
}

export default Login;
