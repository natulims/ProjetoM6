import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <footer class="p-4">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="" class="flex items-center">
              <img src="" class="h-8 mr-3" alt="Anikaze logo" />
            </a>
          </div>
          <div class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">About us</h2>
              <ul class="">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Site Stats
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Site Recommendations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">Follow us</h2>
              <ul class="">
                <li class="mb-4">
                  <a href="#" class="hover:underline ">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul class="">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm sm:text-center">
            © 2023 <p>Anikaze</p> All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
