import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

function SignUp() {
  return (
    <section className="flex min-h-full items-center justify-center py-12 sm:px-6 lg:px-10">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src={logo} alt="anikaze logo" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-auburn">
            Create Account
          </h2>
          <p className="text-mountbatten text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-auburn">
              Sign in
            </Link>
          </p>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="text-mountbatten flex items-center justify-center w-full p-2 space-x-4 border rounded-md dark:border-rusty hover:bg-misty"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-[#D54D44]"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Sign up with google</p>
            </button>
          </div>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-1 my-8  border-0 rounded solid dark:bg-auburn" />
            <div className="absolute px-4 -translate-x-1/2 bg-[#EEDEDD] left-1/2 ">
              <p className="text-xl text-auburn">or</p>
            </div>
          </div>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div>
              <p>Name</p>
              <input
                id="name"
                name="name"
                type="name"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 indent-[5px] text-mountbatten placeholder:text-rose sm:text-sm sm:leading-6"
                placeholder="Ex.: Natalia Carvalho"
              />
            </div>
            <div>
              <p className="mx-[1px] my-[6px]">Email</p>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="relative block w-full rounded-b-md border-0 py-1.5 text-night ring-1 ring-inset indent-[5px] ring-gray-300 placeholder:text-mountbatten sm:text-sm sm:leading-6"
                placeholder="Ex.: email@email.com"
              />
            </div>

            <div>
              <p className="mx-[1px] my-[6px]">Password</p>
              <label className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-b-md border-0 py-1.5 text-night ring-1 ring-inset indent-[5px] ring-gray-300 placeholder:text-mountbatten sm:text-sm sm:leading-6"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-[#D54D44] py-2 px-3 text-sm font-semibold text-white hover:bg-rosy"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
