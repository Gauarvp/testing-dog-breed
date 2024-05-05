import React from "react";
import Dog from "../assets/dog-1.png";

const SingleBreed = ({ name, desc }) => {
  return (
    <div className="flex items-center rounded-lg shadow-md p-4 bg-white max-w-xs mx-auto my-4 cursor-pointer">
      <img src={Dog} className="h-32 w-32 rounded-full mr-4" alt="dog" />
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default SingleBreed;
