import React from "react";
import DogSpot from "../assets/dog-spot.png";

const PetSpots = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
        Pet Spots !!!
      </h2>
      <div>
        <img src={DogSpot} className="mx-auto" alt="" />
      </div>
    </div>
  );
};

export default PetSpots;
