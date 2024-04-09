import React from "react";
import TextLeftOne from "../assets/1620.svg";
import TextLeftTwo from "../assets/TextLeftTwo.svg";

export default function TextLeft() {
  return (
    <>
      <div className="absolute top-[26.5rem] lg:top-[52.5rem] left-3 lg:left-48 z-[70]">
        <div className="mb-4">
          <img src={TextLeftOne} alt="" />
        </div>
        <div>
          <img src={TextLeftTwo} alt="" />
        </div>
      </div>
    </>
  );
}
