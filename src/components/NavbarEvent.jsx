import React from "react";
import EllipseIcon from "../assets/Ellipse-Icon.svg";
import EllipseStar from "../assets/Ellipse-Star.svg";
import StarVector from "../assets/Star-Vector.svg";
import HomeText from "../assets/Home.svg";

function NavbarEvent() {
  return (
    <>
      <nav>
        <ul className="absolute top-[68%] right-0 hidden lg:flex flex-col justify-center items-end mr-8 gap-4 z-[70]">
          <li className="relative flex flex-row items-center gap-4">
            <img src={HomeText} alt="" />
            <img src={EllipseStar} alt="" />
            <div className="absolute left-[6.8rem]">
              <img src={StarVector} alt="" />
            </div>
          </li>
          <li className="relative -left-4">
            <img src={EllipseIcon} alt="" />
          </li>
          <li className="relative -left-4">
            <img src={EllipseIcon} alt="" />
          </li>
          <li className="relative -left-4">
            <img src={EllipseIcon} alt="" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavbarEvent;
