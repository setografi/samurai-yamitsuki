import React from "react";

import VectorRight from "../../assets/decorative-footer.svg";
import TextFooterA from "../../assets/text-footer-1.svg";
import TextFooterB from "../../assets/text-footer-2.svg";

function Footer() {
  return (
    <footer className="relative bg-bgNavy w-full h-full flex flex-col justify-center items-center p-4">
      <div className="w-auto max-h-fit">
        <img src={VectorRight} alt="Decorative Element - Samurai" />
      </div>

      <div className="absolute flex flex-col items-center gap-14">
        <img src={TextFooterA} alt="" className="max-w-fit h-auto" />
        <img src={TextFooterB} alt="" className="max-w-fit h-auto" />
      </div>

      <div className="w-full flex items-center p-2">
        <span className="text-xs text-secondary">
          Developed by{" "}
          <a
            href="https://github.com/setografi"
            target="_blank"
            aria-label="Developer"
            className="hover:text-secondary/60 focus-visible:text-secondary/60 inline-block font-semibold outline-none transition duration-500 hover:-translate-y-px"
          >
            setografi
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
