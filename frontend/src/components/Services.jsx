import React from "react";
import dogDetectionImage from "../assets/dog-detect.png"; // Replace with the actual path to your image
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-20  p-6">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
        Services
      </h1>
      <div className="w-full bg-no-repeat">
        <div className="flex flex-wrap items-center my-8">
          <div className="w-full md:w-2/3 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">
              Dog Breed Classification
            </h2>
            <p className="text-gray-700 max-w-2xl">
              Discover precise dog breed classification driven by advanced
              algorithms, ensuring accurate identification. Our thorough
              classification process provides valuable insights into the unique
              traits of each breed, catering to all dog enthusiasts
            </p>
            <Link to="/prediction" target="_blank">
              <button className="px-6 mt-4 py-3 bg-[#FF7F50] text-white rounded-md shadow-md mr-4 hover:bg-primary-dark font-semibold">
                Give It A Try
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src={dogDetectionImage}
              className="h-auto max-h-[22rem] rounded-lg"
              alt="dog-detection"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
