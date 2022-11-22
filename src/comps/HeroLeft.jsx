import React from "react";
import Vegetables from "../images/vegetables3.png";

const HeroLeft = () => {
  return (
    <div className="hero min-h-fit bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={Vegetables} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Fresh Ingredients!</h1>
          <p className="py-6">
            Handpicked ingredients from Wakanda, Shipped by Santa's reindeers
            and masterplanned by Jeff Bae-zeus{" "}
          </p>
          <button className="btn bg-green-800 hover:btn-primary">
            Need my greens bruh
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
