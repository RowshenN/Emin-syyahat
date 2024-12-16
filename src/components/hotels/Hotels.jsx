import React from "react";
import HotleCards from "./HotleCards";

import icon from '../../images/hotel-round.svg'

const Hotels = () => {
  return (
    <div className="w-full relative mb-[148px]">
      <div className="w-[80%] mx-auto z-10 ">
        <div className="w-full flex items-center justify-between mb-[70px]">
          <h1 className="text-[50px] font-[poppins-semibold] ">Hotels</h1>
          <button className="text-[18px] text-[#009833] font-[poppins-medium] ">
            More
          </button>
        </div>

        <div className="w-full grid gap-[30px] grid-cols-auto-fill-250">
          <HotleCards name={"Ýyldyz"} country={"Turkmenistan"} />
          <HotleCards name={"Ýyldyz"} country={"Turkmenistan"} />
          <HotleCards name={"Ýyldyz"} country={"Turkmenistan"} />
          <HotleCards name={"Ýyldyz"} country={"Turkmenistan"} />
          <HotleCards name={"Ýyldyz"} country={"Turkmenistan"} />
          <HotleCards name={"Ýyldyz"} country={"Turkmenistan"} />
          <HotleCards name={"Ýyldyz"} country={"Turkmenistan"} />
          <HotleCards name={"Ýyldyz"} country={"Turkmenistan"} />
        </div>
      </div>

      <img src={icon} alt="icon" className="absolute bottom-[-80px] right-0 -z-10 " />
    </div>
  );
};

export default Hotels;
