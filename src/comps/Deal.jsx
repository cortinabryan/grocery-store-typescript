import React from "react";
import Shopper from "../images/shopper2.png";

const Deal = () => {
  return (
    <div
      className="hero h-min"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1550803829-34e62702d5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content justify-self-end">
        <div className="max-w-md flex flex-col text-right">
          <h2 className="mb-5 text-5xl font-bold">Special Deal!</h2>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-green-800 hover:btn-primary">Claim</button>
        </div>
      </div>
    </div>
  );
};

export default Deal;
