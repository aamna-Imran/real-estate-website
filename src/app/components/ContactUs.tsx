import React from "react";
import { IoCall } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";

function ContactUs() {
  return (
    <div className="max-container padding-container py-10 flex flex-col lg:flex-row gap-20 justify-between items-center" id="contactus">
      <div className="flex flex-col gap-10 w-full">
        <div>
          <p className="font-bold text-amber-600 text-[25px] text-start">
            Our Contact
          </p>
          <h3 className="lg:text-[2rem] text-[1.5rem] font-extrabold text-blue-900 capitalize text-start">
            Easy to contact us
          </h3>
          <span className="text-[15px] text-gray-500">
            We always ready to help by providijng the best services for you.
             We beleive a good blace to live can make your life better
          </span>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col p-3 gap-4 hover:scale-[1.05] hover:shadow-2xl mr-3 mb-3 border-2 border-gray-200 rounded-xl transition-all ease-in">
            <div className="w-56  flex flex-row items-center justify-start gap-4">
              <IoCall className="bg-gray-200 w-10 h-10 p-2 text-blue-600 rounded-md" />
              <div className="flex flex-col ">
                <p className="font-bold text-gray-900">Call</p>
                <p className="text-gray-500">121212121</p>
              </div>
            </div>
            <button className="bg-gray-200 rounded-md text-blue-600 px-4 py-2 font-bold hover:bg-blue-500 hover:text-white">
              Call now
            </button>
          </div>
          <div className="flex flex-col p-3 gap-4 hover:scale-[1.05] hover:shadow-2xl mr-3 mb-3 border-2 border-gray-200 rounded-xl transition-all ease-in">
            <div className="flex flex-row items-center justify-start gap-4">
              <IoChatbubbleEllipses className="bg-gray-200 w-10 h-10 p-2 text-blue-600 rounded-md" />
              <div className="flex flex-col ">
                <p className="font-bold text-gray-900">Chat</p>
                <p className="text-gray-500">8301109451</p>
              </div>
            </div>
            <button className="bg-gray-200 rounded-md text-blue-600 px-4 py-2 font-bold hover:bg-blue-500 hover:text-white">
              Call now
            </button>
          </div>
          <div className="flex flex-col p-3 gap-4 hover:scale-[1.05] hover:shadow-2xl mr-3 mb-3 border-2 border-gray-200 rounded-xl transition-all ease-in">
            <div className="flex flex-row items-center justify-start gap-4">
              <MdVideoCall className="bg-gray-200 w-10 h-10 p-2 text-blue-600 rounded-md" />
              <div className="flex flex-col ">
                <p className="font-bold text-gray-900">Video Call</p>
                <p className="text-gray-500">0934212121</p>
              </div>
            </div>
            <button className="bg-gray-200 rounded-md text-blue-600 px-4 py-2 font-bold hover:bg-blue-500 hover:text-white">
              Call now
            </button>
          </div>
          <div className="flex flex-col p-3 gap-4 hover:scale-[1.05] hover:shadow-2xl transition-all ease-in mr-3 mb-3 border-2 border-gray-200 rounded-xl">
            <div className="flex flex-row items-center justify-start gap-4">
              <MdMessage className="bg-gray-200 w-10 h-10 p-2 text-blue-600 rounded-md" />
              <div className="flex flex-col ">
                <p className="font-bold text-gray-900">Message</p>
                <p className="text-gray-500">1458212121</p>
              </div>
            </div>
            <button className="bg-gray-200 rounded-md text-blue-600 px-4 py-2 font-bold hover:bg-blue-500 hover:text-white">
              Call now
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center max-w-[460px] mx-auto ">
        <img
          src="contact.jpg"
          alt="contact-image"
          className="rounded-tl-full flex-1 h-[500px] rounded-tr-full border-[8px] border-neutral-700 "
        />
      </div>
    </div>
  );
}

export default ContactUs;
