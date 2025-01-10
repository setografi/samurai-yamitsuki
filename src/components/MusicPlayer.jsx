import React from "react";
import MusicText from "../assets/MusicText.svg";
import MusicImage from "../assets/MusicImage.png";
import MusicPolygon from "../assets/MusicPolygon.svg";

export default function MusicPlayer() {
  return (
    <>
      <div className="hidden lg:block py-6 px-5">
        <div className="bg-bgBlack w-[132px] h-[311px] rounded-[40px] grid grid-flow-row gap-4">
          <div className="flex justify-center items-center pt-4">
            <img src={MusicText} alt="武士 - Samurai" />
          </div>
          <div className="relative flex justify-center items-center">
            <img
              src={MusicImage}
              alt="Music Image - Samurai"
              className="rounded-[36px] group-hover:scale-125"
            />
            <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
              <a href="" className="group cursor-pointer">
                <img
                  src={MusicPolygon}
                  alt="Button - Samurai"
                  className="duration-300 group-hover:opacity-60"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
