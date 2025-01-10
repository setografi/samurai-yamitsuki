import React, { useState } from "react";
import EllipseIcon from "../../assets/Ellipse-Icon.svg";
import EllipseStar from "../../assets/Ellipse-Star.svg";
import StarVector from "../../assets/Star-Vector.svg";

function Navigation() {
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = [
    { name: "Home", icon: EllipseIcon, activeIcon: StarVector },
    { name: "About", icon: EllipseIcon, activeIcon: StarVector },
    { name: "Contact", icon: EllipseIcon, activeIcon: StarVector },
    { name: "FAQ", icon: EllipseIcon, activeIcon: StarVector },
  ];

  return (
    <nav className="absolute top-[68%] right-0 hidden lg:flex flex-col justify-center items-end mr-8 gap-4 z-[80]">
      {navItems.map((item) => (
        <a
          key={item.name}
          className="group flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => setActiveNav(item.name)}
        >
          {activeNav === item.name ? (
            <>
              <span className="text-primary text-2xl font-oswald font-bold uppercase tracking-wide transition duration-300 group-hover:text-primary/60">
                {item.name}
              </span>
              <div className="relative">
                <div className="absolute w-full h-full flex justify-center items-center group-hover:animate-spin-slow">
                  <img src={item.activeIcon} alt={`${item.name} active icon`} />
                </div>
                <img
                  src={EllipseStar}
                  alt={`${item.name} star icon`}
                  className="group-hover:animate-pulse"
                />
              </div>
            </>
          ) : (
            <div className="relative -left-4">
              <img src={item.icon} alt={`${item.name} icon`} />
            </div>
          )}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
