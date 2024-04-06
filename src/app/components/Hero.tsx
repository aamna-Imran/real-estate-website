'use client';
import React from "react";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";

function Hero() {
  return (
    <div className="w-full  text-white">
      <div className="max-container  padding-container py-10 flex flex-col md:flex-row justify-center lg:gap-44 gap-10 items-center">
        <div className="flex flex-col justify-center gap-10 w-full">
          <div className="">
            <h1 className="lg:bold-64 bold-40 relative z-10 ">
            <div className="orange-circle absolute -top-6 right-52 -z-10" />
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flex flex-col text-neutral-400 text-[15px]">
            <span>Find a variety of properties that suit you very easilty
            Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flex justify-around items-center bg-white border-[3px] border-neutral-300 py-3 px-2 rounded-md">
            <HiLocationMarker className="text-blue-700 text-[30px]" />
            <input
              type="text"
              className="w-[70%] outline-0 border-0 text-black font-semibold pl-3"
            />
            <button className="px-4 py-2 bg-button rounded-[3px] text-white">
              Search
            </button>
          </div>
          <div className="flex justify-center gap-5 items-center flex-wrap lg:flex-nowrap">
            <div className="flex flex-col  text-center w-1/3 ">
              <span className="text-[2rem]  flex justify-center gap-2 items-center">
                <CountUp start={8800} end={9000} duration={4}/>
                <span className="text-orange-500">+</span>
              </span>
              <span className=" text-neutral-400 text-[14px] ">Premium  Products</span>
            </div>
            <div className="flex flex-col  text-center w-1/3">
              <span className="text-[2rem]  flex justify-center gap-2 items-center">
                <CountUp start={1500} end={1800} duration={4}/>
                <span className="text-orange-500">+</span>
              </span>
              <span className=" text-neutral-400 text-[14px] ">Premium  Products</span>
            </div>
            <div className="flex flex-col  text-center w-1/3">
              <span className="text-[2rem]  flex justify-center gap-2 items-center">
                <CountUp start={0} end={23} duration={4}/>
                <span className="text-orange-500">+</span>
              </span>
              <span className=" text-neutral-400 text-[14px] ">Premium  Products</span>
            </div>
            
            
            
          </div>
        </div>

        <div className="flex justify-center items-center max-w-[460px] ">
            <img
              src="hero-image.png"
              alt="hero-image"
              className="rounded-tl-full flex-1 rounded-tr-full border-[8px] border-neutral-700 "
            />
        </div>
      </div>
    </div>
  );
}

export default Hero;
