import React from "react";
import Hero from "./Hero";
import Vegetables from "../images/vegetables2.png";
import Groceries from "../images/groceries.png";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Divider = () => {
  return (
    <div className="flex w-full mt-5">
      <div className="divider-1 grid h-96 flex-grow card bg-base-300 rounded-box place-items-center my-4 mx-4">
        <HeroLeft />
      </div>
      {/* <div className="divider divider-horizontal">OR</div> */}
      <div className="divider-2 grid h-96 flex-grow card bg-base-300 rounded-box place-items-center my-4 mx-4">
        <HeroRight />
      </div>
    </div>
  );
};

export default Divider;
