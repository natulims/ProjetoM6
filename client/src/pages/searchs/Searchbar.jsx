import React, { useState } from "react";
import useDebounce from "../searchs/useDebounce";
import Power from "../../components/power/Power";

function Search({ value, onChange }) {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <>
      <Power />
      <h1 className="text-auburn text-center font-bold text-4xl mt-5 tracking-normal">
        Searching for something in particular?
      </h1>
      <p className="text-center text-lg ">
        Search for your favorite anime or something you always wanted to watch and share with your friends!
      </p>
      <div className="max-w-md mx-auto mt-5 ">
        <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-[#f7d2d2] overflow-hidden">
          <div className="p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            className="indent-5 peer h-full w-full outline-none text-xl text-rosy pr-2"
            type="search"
            id="search"
            autoComplete="off"
            required
            value={displayValue}
            onChange={handleChange}
            placeholder="Search for animes..."
          />
        </div>
      </div>
    </>
  );
}

export default Search;