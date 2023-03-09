import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <footer className="p-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img src="" className="h-8 mr-3" alt="Anikaze logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">About us</h2>
              <ul className="">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Site Stats
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Site Recommendations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Follow us
              </h2>
              <ul className="">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2023 <p>Anikaze</p> All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
