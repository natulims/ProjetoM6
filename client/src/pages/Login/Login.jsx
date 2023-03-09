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

            <div className="my-6 space-y-2">
              <button
                aria-label="Login with Google"
                type="button"
                className="text-mountbatten flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-rusty focus:ring-rusty"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-rusty">
            Don't have an account?
            <Link to="/sign_up"> Register now!</Link>
          </p>
        </div>
      </div>
      <Power />
      <Footer />
    </>
  );
}

export default Login;
