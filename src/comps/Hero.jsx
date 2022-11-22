import React from "react";
import Logo from "../images/logo-transparent.png";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <img src={Logo} alt="" />
          {/* <h1 className="mb-5 text-5xl font-bold">
            Fresh Quality Mostly Organic* Ingredients
          </h1> */}
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-lg bg-red-800 hover:bg-green-800">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
