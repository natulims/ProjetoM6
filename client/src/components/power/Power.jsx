import React from "react";
import power from "../../assets/power.gif"

function Power() {
  return (
    <>
      <div className="flex justify-center">
      <img className="lg:w-[15rem]  w-[6rem] mt-2"
        src={power}
        alt=""
      />
      </div>
    </>
  );
}

export default Power;
