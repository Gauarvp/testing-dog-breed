import React from "react";
import SingleBreed from "./SingleBreed";
import Dog from "../assets/dog-1.png";

const DogBreed = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      {/* <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-black to-[#FF7F50] bg-clip-text">
        Popular Breeds
      </h1> */}
      <h1 class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
        Popular Breed
      </h1>
      <div className="flex flex-wrap justify-center -mx-4">
        <SingleBreed
          name="Golden Retriever"
          desc=" The friendly and intelligent Golden Retriever"
          img={Dog}
        />
        <SingleBreed
          name="Chihuahua "
          desc="The spirited and alert Chihuahua"
          img={Dog}
        />
        <SingleBreed
          name="Bloodhound "
          desc="The steadfast and determined Bloodhound."
          img={Dog}
        />
        <SingleBreed
          img={Dog}
          name="Bulldog "
          desc="The resilient and affectionate Bulldog."
        />
        <SingleBreed
          img={Dog}
          name="Poodle "
          desc="The graceful and intelligent Poodle."
        />
        <SingleBreed
          img={Dog}
          name="Beagle "
          desc="The merry and curious Beagle."
        />
        <SingleBreed
          img={Dog}
          name="Boxer "
          desc="The courageous and energetic Boxer."
        />
        <SingleBreed
          img={Dog}
          name="Dachshund "
          desc="The loyal and spunky Dachshund."
        />
      </div>
    </div>
  );
};

export default DogBreed;
