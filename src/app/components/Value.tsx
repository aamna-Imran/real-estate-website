'use client';
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import data from "../utils/Accordian";

function Value() {

  return (
    <div className=" py-10 max-container padding-container " id="value" >
      <div className="flex  justify-between items-center gap-20 lg:flex-row flex-col">
        <div className="flex justify-center items-center max-w-[460px] flex-1">
          <img
            src="value.png"
            alt="hero-image"
            className="rounded-tl-full flex-1 rounded-tr-full border-[8px] border-neutral-300 "
          />
        </div>
        <div className="flex flex-col justify-start flex-1  w-full">
          <span className="font-bold text-amber-600 text-[30px] ">Our Value</span>
          <span className="lg:text-[2rem] text-[1.5rem] font-extrabold capitalize text-blue-900 ">
            Value we give to you
          </span>
          <span className="lg:text-[1rem] text-[13px] text-gray-500 my-5">
            We always ready to help by providijng the best services for you.{" "}
             We beleive a good blace to live can make your life better
          </span>

        <div className="w-full">
          {data.map((item, i) => (
            <div key={i}>
            <Accordion  type="single" collapsible className=' '>
              <AccordionItem value="item-1" className={`border-[2px] border-gray-300 mb-5 rounded-lg shadow-lg `}  >
                <AccordionTrigger className='lg:px-4 lg:py-8 px-2 py-5 flex justify-between items-center'>
                  <span className="lg:w-10 lg:h-10 w-6 h-6 bg-gray-200 lg:text-[20px] text-[16px] flex items-center justify-center rounded-[3px] text-blue-500">{item.icon}</span>  <span className="lg:text-[18px] text-[15px] font-bold text-blue-900 ">{item.heading}</span> </AccordionTrigger>
                <AccordionContent className=' text-center text-gray-500 px-2'>
                  {item.detail}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;
