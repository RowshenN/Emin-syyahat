import React from "react";

import surat from "../images/turkmenistan.png";
import arrow from "../images/green arrow.svg";

const Turkmenistan = () => {
  return (
    <div className="w-full h-[100vh] mb-[100px] relative">
      <img src={surat} alt="surat" className="-z-10 absolute max-h-full top-0 bottom-0 left-0 right-0 w-full " />
      <div className="w-[90%] mx-auto">
        <div className="w-full flex items-center justify-center ">
          <h1 className="text-[133px] font-[poppins-bold] text-[white] pt-[80px] pb-[70px]">TURKMENISTAN</h1>
        </div>

        <div className="w-full mb-[50px]">
            <div className="w-full flex items-center justify-between px-[105px] ">
                <div className="flex flex-col items-baseline justify-start gap-[5px] w-[350px] bg-white/50 px-[25px] py-[15px] rounded-[20px] backdrop-blur-md ">
                    <p className="text-[18px] font-[poppins-medium] ">History</p>
                    <p className="text-[14px] font-[poppins-regular] ">Lorem ipsum dolor sit amet consectetur. Pellentesque proin amet ec.</p>
                </div>
                <div className="flex flex-col items-baseline justify-start gap-[5px] w-[350px] bg-white/50 px-[25px] py-[15px] rounded-[20px] backdrop-blur-md ">
                    <p className="text-[18px] font-[poppins-medium] ">Tradition</p>
                    <p className="text-[14px] font-[poppins-regular] ">Lorem ipsum dolor sit amet consectetur. Pellentesque proin amet ec.</p>
                </div>
            </div>

            <div className="w-full flex items-center justify-between mt-7">
                <div className="flex flex-col items-baseline justify-start gap-[5px] w-[350px] bg-white/50 px-[25px] py-[15px] rounded-[20px] backdrop-blur-md ">
                    <p className="text-[18px] font-[poppins-medium] ">History</p>
                    <p className="text-[14px] font-[poppins-regular] ">Lorem ipsum dolor sit amet consectetur. Pellentesque proin amet ec.</p>
                </div>
                <div className="flex flex-col items-baseline justify-start gap-[5px] w-[350px] bg-white/50 px-[25px] py-[15px] rounded-[20px] backdrop-blur-md ">
                    <p className="text-[18px] font-[poppins-medium] ">Tradition</p>
                    <p className="text-[14px] font-[poppins-regular] ">Lorem ipsum dolor sit amet consectetur. Pellentesque proin amet ec.</p>
                </div>
            </div>
        </div>

        <div className="w-full flex items-center justify-center">
            <div className="w-[170pxs] cursor-pointer bg-white flex items-center justify-center gap-2 rounded-[50px] py-[10px] px-5 ">
                <p className="text-[#009833] text-[18px] font-[poppins-medium] ">More Info</p>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Turkmenistan;
