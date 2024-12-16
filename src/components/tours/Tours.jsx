import React from "react";
import ToursCards from "./ToursCards";

import svg from "../../images/vector-with-plane.svg";
import tour from "../../images/tour-fvg.svg";
import arrow from "../../images/green arrow.svg";

const Tours = () => {
  return (
    <div className="w-full relative mb-[130px]">
      <div className="mb-[53px]">
        <div className="w-full mb-[50px] flex items-center justify-center">
          <div className=" ">
            <p className="text-[50px] text-center font-[poppins-semibold] ">
              Tours
            </p>
            <img src={svg} alt="svg" className="mt-[-100px] ml-[-10px] -z-10" />
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-4 mb-[50px]">
          <div className="cursor-pointer text-[16px] font-[poppins-medium] flex items-center justify-center bg-[#009833] rounded-lg text-white py-2 px-[22px]">
            Other countries
          </div>
          <div className="cursor-pointer text-[16px] font-[poppins-medium] flex items-center justify-center bg-[#F4F4F4] rounded-lg py-2 px-[22px]">
            Turkmenistan
          </div>
        </div>

        <div className="w-[80%] mx-auto grid gap-[30px] grid-cols-auto-fill-250 ">
          <ToursCards
            def={"London & Paris: A Winter Tale of Two Cities"}
            country={"France"}
            time={"5 days"}
          />

          <ToursCards
            def={"London & Paris: A Winter Tale of Two Cities"}
            country={"France"}
            time={"5 days"}
          />

          <ToursCards
            def={"London & Paris: A Winter Tale of Two Cities"}
            country={"France"}
            time={"5 days"}
          />

          <ToursCards
            def={"London & Paris: A Winter Tale of Two Cities"}
            country={"France"}
            time={"5 days"}
          />

          <ToursCards
            def={"London & Paris: A Winter Tale of Two Cities"}
            country={"France"}
            time={"5 days"}
          />

          <ToursCards
            def={"London & Paris: A Winter Tale of Two Cities"}
            country={"France"}
            time={"5 days"}
          />

          <ToursCards
            def={"London & Paris: A Winter Tale of Two Cities"}
            country={"France"}
            time={"5 days"}
          />

          <ToursCards
            def={"London & Paris: A Winter Tale of Two Cities"}
            country={"France"}
            time={"5 days"}
          />
        </div>
      </div>

      <img className="absolute bottom-0 left-0 -z-10 " src={tour} alt="tour" />

      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center gap-[10px]">
          <button className="text-[#009833] text-[18px] font-[poppins-medium] ">
            More
          </button>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Tours;
