import React from "react";
import Layer1 from "../../assets/layer-1.png";
import Layer2 from "../../assets/layer-2.svg";
import Layer3 from "../../assets/layer-3.svg";
import Layer4 from "../../assets/layer-4.svg";
import Layer5 from "../../assets/layer-5.svg";
import Layer6 from "../../assets/layer-6.png";
import TextImage from "../../assets/Yamitsuki.svg";

function Background() {
  return (
    <div>
      <div>
        <img
          className="w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-10"
          src={Layer1}
          alt=""
        />
        <div>
          <div className="absolute top-7 lg:top-32 left-0 z-20 mix-blend-exclusion">
            <img className="" src={TextImage} alt="" />
          </div>
          <img
            className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-30"
            src={Layer2}
            alt=""
          />
          <div>
            <img
              className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-40"
              src={Layer3}
              alt=""
            />
            <div>
              <img
                className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-50"
                src={Layer4}
                alt=""
              />
              <div>
                <img
                  className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-[60]"
                  src={Layer5}
                  alt=""
                />
                <div>
                  <img
                    className="absolute top-0 left-0 w-full h-screen lg:h-[59.9rem] object-cover lg:object-none z-[70]"
                    src={Layer6}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
