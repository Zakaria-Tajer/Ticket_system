/* eslint-disable @next/next/no-img-element */
import React from "react";
export const ContactHelp = () => {
  return (
    <div className="lg:ml-10 md:-translate-y-20 space-y-14">
      <h1 className="md:text-4xl text-center lg:text-left text-2xl mt-3 font-bold text-[#002D62]">
        Other ways to get Help
      </h1>
      <div className="md:flex w-full md:h-96 xl:w-2/4 rounded shadow-xl md:ml-0 ml-4">
        <div className="md:w-3/4 flex pl-10 space-y-7 flex-col justify-center items-center">
          <h1 className="font-poppins font-bold text-xl text-[#002D62]">
            We&apos;ve got your back
          </h1>
          <p className="text-[#002D62] font-SansS text-md">
            if you have any questions or <br></br>need any support, please
            don&apos;t<br></br>hestitae to contact our friendly<br></br>support
            team.
          </p>
          <button className="bg-blue-600 w-44 py-3 hover:bg-blue-800 hover:duration-700 rounded text-white font-SansS">
            Contact us
          </button>
        </div>
        <div className="md:w-3/5">
          <img
            src="https://png.pngtree.com/png-vector/20210120/ourlarge/pngtree-contact-us-flat-design-style-png-image_2766546.jpg"
            width=""
            height=""
            alt="contact"
            className="h-96 max-w-md mt-2 md:mt-0 md:ml-7  mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
