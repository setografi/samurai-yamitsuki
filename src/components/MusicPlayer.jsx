import React from "react";
import MusicText from "../assets/MusicText.svg";
import MusicImage from "../assets/MusicImage.png";
import MusicPolygon from "../assets/MusicPolygon.svg";

export default function MusicPlayer() {
  return (
    <>
      <div className="absolute top-[39rem] left-6 hidden lg:block z-[70]">
        <div className="bg-DarkMidnightBlue w-[132px] h-[311px] rounded-[40px] grid grid-flow-row gap-4">
          <div className="flex justify-center items-center pt-4">
            <img src={MusicText} alt="" />
          </div>
          <div className="relative flex justify-center items-center">
            <img className="rounded-[36px]" src={MusicImage} alt="" />
            <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
              <img src={MusicPolygon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
