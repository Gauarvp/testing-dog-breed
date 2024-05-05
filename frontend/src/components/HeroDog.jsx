import React from "react";
import { Link } from "react-router-dom";

import Dog from "../assets/dog.jpg";

const HeroSection = () => {
  return (
    <div className="max-w-screen-xl flex items-center mx-auto justify-between h-[calc(100vh-70px)] ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FF7F50_100%)]"></div>
      <div className="w-2/3 mr-6">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Unleash the Dogs of Diversity
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-lg">
          Your gateway to discovering the unique world of dog breeds. From the
          majestic to the mischievous, explore them all.
        </p>
        <Link to="/prediction" target="_blank">
          <button className="px-6 py-3 bg-[#FF7F50] text-white rounded-md shadow-md mr-4 hover:bg-primary-dark font-semibold">
            Start Exploring
          </button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src={Dog} className="h-auto max-h-80 rounded-md" alt="dog" />
      </div>
    </div>
  );
};

export default HeroSection;
