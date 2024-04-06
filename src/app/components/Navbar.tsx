"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import OutsideClickHandler from "react-outside-click-handler";

function Navbar() {

  const [menuOpened, setMenuOpened] = useState(false)

  function handleMenu (){
    setMenuOpened(!menuOpened)
  }

  return (
    <>
      <div className="w-full ">
        <div className=" max-container padding-container py-4 flex justify-between items-center text-neutral-300 ">
          <img src="logo.png" alt="logo" width={110} />

          <div className="flex justify-between items-center gap-8 h">
            <ul className="text-[15px] lg:flex justify-between items-center gap-5 hidden">
              <li>
                <Link href="#recidencies" >Resedencies</Link>
              </li>
              <li>
                <Link href="#value">Our values</Link>
              </li>
              <li>
                <Link href="#contactus">Contact Us</Link>
              </li>
              <li>
                <Link href="#getStarted">Get Started</Link>
              </li>
              <button className="px-5 py-2 rounded-md text-white bg-button hover:scale-[1.1] transition-all ease-in ">
                Contact
              </button>
            </ul>

            <div onClick={handleMenu}>
              <HiMenuAlt3 className="lg:hidden flex text-white  text-[25px]" />
            </div>
          </div>
        </div>
      </div>
      <OutsideClickHandler 
      onOutsideClick={()=>setMenuOpened(false)}
      >
      <div className={
        menuOpened
         ? "lg:hidden w-[200px] h-[300px] bg-slate-100 z-20 absolute top-[3rem] right-[4rem] rounded-2xl"
         : "hidden"}>
        <ul className="text-[15px] flex justify-center items-start gap-5 flex-col p-10 font-bold ">
          <li onClick={()=>setMenuOpened(false)}>
            <Link href="#recidencies">Resedencies</Link>
          </li>
          <li>
            <Link href="#value">Our values</Link>
          </li>
          <li>
            <Link href="#contactus">Contact Us</Link>
          </li>
          <li>
            <Link href="#getStarted">Get Started</Link>
          </li>
          <button className="px-5 py-2 rounded-md text-white bg-button hover:scale-[1.1] transition-all ease-in ">
            Contact
          </button>
        </ul>
      </div>
      </OutsideClickHandler>
    </>
  );
}

export default Navbar;
