import React from "react";

import surat1 from "../images/1.png";
import surat2 from "../images/2.png";
import surat3 from "../images/3.png";
import surat4 from "../images/4.png";
import surat5 from "../images/5.png";
import surat6 from "../images/6.png";

const Destinations = () => {
  return (
    <div className="w-full mb-[100px]">
      <h1 className="text-[30px] font-[poppins-semibold] ">Top Destinations</h1>
      <p className="text-[#878787] text-[16px] font-[poppins-medium]">
        Lorem ipsum dolor sit amet consectetur. Cras vitae auctor feugiat
        egestas feugiat aliquam fusce.
      </p>

      <div className="w-full flex items-start justify-center gap-[30px] mt-[55px]">
        <div className=" flex items-start justify-center">
          <div className="w-full flex flex-col justify-start items-baseline gap-[30px]">
            <div className="relative w-[319px] h-[285px]">
              <img src={surat1} alt="surat" className="w-full h-full" />
              <p className="absolute bottom-[26px] left-[26px] text-white text-[20px] font-[poppins-medium] ">
                Turkey , Antalya
              </p>
            </div>

            <div className="relative w-[319px] h-[285px]">
              <img src={surat2} alt="surat" className="w-full h-full object-cover" />
              <p className="absolute bottom-[26px] left-[26px] text-white text-[20px] font-[poppins-medium]">
                United Kingdom , London
              </p>
            </div>
          </div>

          <div className="relative h-[600px] w-full">
            <img src={surat3} alt="surat" className="w-full h-full" />
            <p className="absolute bottom-[26px] left-[26px] text-white text-[20px] font-[poppins-medium]">
              UAE, Dubai
            </p>
          </div>
        </div>

        <div className="w-[45%] flex flex-col items-baseline gap-[30px] justify-start">
          <div className="relative w-[529px] h-[285px] ">
            <img src={surat4} alt="surat" className="w-full object-contain" />
            <p className="absolute bottom-[26px] left-[26px] text-white text-[20px] font-[poppins-medium]">
              France, Paris
            </p>
          </div>

          <div className="w-full flex items-center gap-[30px] justify-start ">
            <div className="relative w-[208px] h-[285px]">
              <img src={surat5} className="w-full" alt="surat" />
              <p className="absolute bottom-[26px] left-[26px] text-white text-[20px] font-[poppins-medium]">
                Italy, Rome
              </p>
            </div>

            <div className="relative w-[291px] h-[285px]">
              <img src={surat6} className="w-full" alt="surat" />
              <p className="absolute bottom-[26px] left-[26px] text-white text-[20px] font-[poppins-medium]">
                Spain, Barcelona
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
