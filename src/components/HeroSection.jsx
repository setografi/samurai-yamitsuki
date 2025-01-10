import React from "react";
import MusicPlayer from "./MusicPlayer";

import VectorRight from "../assets/decorative-right.svg";

function HeroSection() {
  return (
    <section className="relative w-full h-fit flex flex-row z-[80]">
      <div className="absolute bottom-0 left-0 z-[90]">
        <MusicPlayer />
      </div>

      <div className="absolute bottom-0 pl-48 pr-36 pb-12 w-full flex flex-row justify-between">
        <div className="flex flex-col text-left space-y-2">
          <h2 className="text-primary text-2xl font-oswald font-bold uppercase tracking-two">
            1620
          </h2>
          <p className="max-w-sm text-secondary text-base font-extralight">
            Hidden aspects of the samurai and the potential for danger and
            secrecy
          </p>
        </div>

        <div className="flex flex-col text-right space-y-2">
          <h2 className="text-primary text-2xl font-oswald font-bold uppercase tracking-two">
            swordsman
          </h2>

          <p className="max-w-sm text-secondary text-base font-extralight">
            Danger and potential for finality at the cliff's edge, representing
            a moment of decision or reflection
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <img src={VectorRight} alt="Decorative Element - Samurai" />
      </div>
    </section>
  );
}

export default HeroSection;
