import React from "react";

import icon from "../images/blog-svg.svg";
import blog1 from "../images/blog-1.png";
import blog2 from "../images/blog-2.png";
import blog3 from "../images/blog-3.png";
import arrow from "../images/green arrow.svg";

const Blog = () => {
  return (
    <div className="w-[80%] mx-auto mb-[82px]">
      <div className="w-full flex items-center justify-center mb-[80px] ">
        <div className="relative w-[32%] flex items-center justify-center">
          <h1 className="text-[61px] font-[poppins-bold] z-10">Blog</h1>
          <img src={icon} className="absolute top-0 -z-10 left-0" alt="icons" />
        </div>
      </div>

      <div className="mb-[45px] w-full flex items-start justify-between gap-[30px]">
        <div className="w-[801px] h-[658px] relative">
          <img src={blog1} className="w-full object-contain" alt="blog" />
          <p className="absolute bottom-[25px] left-[25px] text-white text-[28px] font-[poppins-semibold] w-[60%] ">
            10 places you must see in the world
          </p>
        </div>

        <div className="flex flex-col items-baseline gap-[30px] justify-center">
          <div className="w-full h-[314px] relative">
            <img src={blog2} className="w-full object-contain" alt="blog" />
            <p className="absolute bottom-[25px] left-[25px] text-white text-[28px] font-[poppins-semibold] w-[60%] ">
              Hiking in the Karakum desert
            </p>
          </div>

          <div className="w-full h-[314px] relative">
            <img className="w-full object-contain" src={blog3} alt="blog" />
            <p className="absolute bottom-[25px] left-[25px] text-white text-[28px] font-[poppins-semibold] w-[60%] ">
              Interesting facts about Antalya
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <p className="text-[#009833] text-[18px] font-[poppins-medium] ">
            More
          </p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
