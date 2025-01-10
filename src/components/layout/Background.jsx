import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layer1 from "../../assets/layer-1.png";
import Layer2 from "../../assets/layer-2.svg";
import Layer3 from "../../assets/layer-3.svg";
import Layer4 from "../../assets/layer-4.svg";
import Layer5 from "../../assets/layer-5.svg";
import Layer6 from "../../assets/layer-6.png";
import TextImage from "../../assets/Yamitsuki.svg";

gsap.registerPlugin(ScrollTrigger);

function Background() {
  const layersRef = useRef([]);

  useEffect(() => {
    // Set initial state to scale: 1
    layersRef.current.forEach((layer) => {
      gsap.set(layer, { scale: 0.45 });
    });

    // Animate scaling on scroll
    layersRef.current.forEach((layer, index) => {
      gsap.to(layer, {
        scale: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: layer,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="relative w-full h-[160vh] overflow-hidden">
      <img
        ref={(el) => (layersRef.current[0] = el)}
        src={Layer1}
        alt="Layer 01"
        className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-10"
      />

      <div className="absolute top-7 lg:top-32 left-0 z-20 mix-blend-exclusion">
        <img className="" src={TextImage} alt="" />
      </div>

      <img
        ref={(el) => (layersRef.current[1] = el)}
        src={Layer2}
        alt="Layer 02"
        className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-30"
      />

      <img
        ref={(el) => (layersRef.current[2] = el)}
        src={Layer3}
        alt="Layer 03"
        className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-40"
      />

      <img
        ref={(el) => (layersRef.current[3] = el)}
        src={Layer4}
        alt="Layer 04"
        className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-50"
      />

      <img
        ref={(el) => (layersRef.current[4] = el)}
        src={Layer5}
        alt="Layer 05"
        className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-[60]"
      />

      <img
        ref={(el) => (layersRef.current[5] = el)}
        src={Layer6}
        alt="Layer 06"
        className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-[70]"
      />
    </div>
  );
}

export default Background;
