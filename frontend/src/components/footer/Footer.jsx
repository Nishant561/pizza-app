import React from "react";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="w-full bg-[#FE5F1E]">
        <div className="max-w-[1200px] mx-auto flex justify-between   mt-6 p-4">
          <div className="footer-left w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <div className="w-[40px] h-[40px] flex items-center rounded-full justify-center bg-orange-700">
                <ImLocation2 size={"27px"} color="white" />
              </div>
              <div className="text-white">
                <p className="text-[18px]">21 Revolution Street</p>
                <h1 className="font-semibold text-xl">Kathmandu, Nepal</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[40px] h-[40px] flex items-center rounded-full justify-center bg-orange-700">
                <FaPhoneAlt size={"27px"} color="white" />
              </div>
              <div className="text-white">
                <p className="text-[18px] font-semibold">+977 9840876170</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[40px] h-[40px] flex items-center rounded-full justify-center bg-orange-700">
                <SiGmail size={"27px"} color="white" />
              </div>
              <div className="text-white">
                <p className="text-[18px] font-semibold">
                  Supportmail@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="footer-right flex flex-col gap-4 items-end w-1/2">
            <h1 className="font-bold text-2xl  text-white">
              About the company
            </h1>
            <p className="w-[354px] leading-5 tracking-wider text-white text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              iste, architecto hic rem quod porro mollitia laborum provident ab
              dolorum?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
