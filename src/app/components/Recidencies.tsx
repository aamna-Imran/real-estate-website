"use server";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderData from "../utils/Slider.json";

export async function Recidencies() {
  return (
    <div className="max-container padding-container py-10 flex flex-col gap-5 " id="recidencies">
      <div className="flex flex-col lg:justify-start justify-center mb-5">
        <span className="font-bold text-amber-600 text-[25px] text-center md:text-start">
          Best Choices
        </span>
        <span className="lg:text-[2rem] text-[1.5rem] font-extrabold text-blue-900 text-center md:text-start">
          Popular Recidencies
        </span>
      </div>

      <div className="px-2">
      <Carousel>
        <CarouselContent className="px-auto">
          {sliderData.map((data, i) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 sm:basis-1 " key={i}>
              <div className=" mb-10 rounded-lg hover:scale-[1.05] transition-all ease-in  p-4 shadow-2xl flex flex-col gap-3">
                <img src={data.image} alt="recedencies"  />
                <h3 className="flex items-center text-gray-500 font-bold gap-2 md:text-start text-center text-[20px]"><span className="text-amber-500 font-bold ">$</span>{data.price}</h3>
                <h3 className="text-[22px] font-extrabold text-blue-900">{data.name}</h3>
                <p className="text-[15px] text-gray-500">{data.detail}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden lg:flex"/>
      </Carousel>
      </div>
    </div>
  );
}
