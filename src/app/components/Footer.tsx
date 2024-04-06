import React from "react";

function Footer() {
  return (
    <div className="max-container padding-container py-10" id="getStarted">
      <div className="bg-button rounded-2xl flex flex-col justify-center items-center gap-5 border-[5px] border-blue-400 py-10 text-white">
        <h1 className="lg:bold-32 bold-20 text-center">Get Started With Homyz</h1>
        <p className="text-center text-neutral-200 text-[15px]">
          Subscribe and find super attractive price quotes from us. <br /> Find
          your residence soon
        </p>
        <button className="px-5 py-2 bg-[rgba(255,255,255,0.16)] border-2  border-neutral-200 rounded-lg hover:scale-[1.05] ease-in transition-all active:bg-transparent text-white font-bold">
          Get Started
        </button>
      </div>

      <div className="flex lg:flex-row flex-col justify-between  items-center gap-5 my-10">
        <div className="flex flex-col justify-center lg:items-start items-center">
          <img src="logo2.png" alt="logo2" className="" />
          <p className="text-[15px] text-gray-500 lg:text-start text-center">
            Our vision is to make all people the <br /> best place to live for them
          </p>
        </div>
        <div className="flex flex-col justify-center lg:items-start items-center gap-2">
            <h1 className="bold-32 text-blue-900 lg:text-start text-center">Information</h1>
            <p className="text-[15px] text-gray-500 lg:text-start text-center">145 New York, FL 5467, USA</p>
            <ul className="flex flex-row gap-4 font-bold text-gray-800 text-[15px]">
                <li>Property</li>
                <li>Services</li>
                <li>Products</li>
                <li>About Us</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
