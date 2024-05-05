import React from "react";
import SingleBreed from "./SingleBreed";
import Dog from "../assets/dog.jpg";
import Dog1 from "../assets/download (2).jpeg";
import Dog2 from "../assets/download.jpeg";
import Dog3 from "../assets/downloadd.jpeg";
import Dog4 from "../assets/bulldog.jpeg";
import Dog5 from "../assets/poodle.jpeg";
import Dog6 from "../assets/beagle.jpeg";
import Dog7 from "../assets/boxer.jpeg";
import Dog8 from "../assets/dash.jpeg";

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
          desc=" The friendlly and intelligent Golden Retriever"
          img={Dog1}
        />
        <SingleBreed
          name="Chihuahua "
          desc="The spirited and alert Chihuahua"
          img={Dog2}
        />
        <SingleBreed
          name="Bloodhound "
          desc="The steadfast and determined Bloodhound."
          img={Dog3}
        />
        <SingleBreed
          img={Dog4}
          name="Bulldog "
          desc="The resilient and affectionate Bulldog."
        />
        <SingleBreed
          img={Dog5}
          name="Poodle "
          desc="The graceful and intelligent Poodle."
        />
        <SingleBreed
          img={Dog6}
          name="Beagle "
          desc="The merry and curious Beagle."
        />
        <SingleBreed
          img={Dog7}
          name="Boxer "
          desc="The courageous and energetic Boxer."
        />
        <SingleBreed
          img={Dog8}
          name="Dachshund "
          desc="The loyal and spunky Dachshund."
        />
      </div>
    </div>
  );
};

export default DogBreed;
