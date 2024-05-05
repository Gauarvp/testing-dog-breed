import React from "react";
import SingleUser from "./SingleUser";
import Sai from "../assets/sai.jpeg";
import Dog from "../assets/dog.jpg";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      <h1 class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
        Team Members
      </h1>
      <div className="flex flex-wrap gap-10 justify-center -mx-4">
        <SingleUser
          name="Sai Gaurav P"
          groupNo="1"
          SRN="PES1UG20CS141"
          img={Sai}
        />
        <SingleUser
          name="Teammate-1"
          groupNo="1"
          SRN="PES1UG20ME160"
          img={Dog}
        />
        <SingleUser
          name="Teammate-2"
          groupNo="1"
          SRN="PES1UG20CS121"
          img={Dog}
        />
        <SingleUser
          name="Teammate-3"
          groupNo="1"
          SRN="PES1UG20EC241"
          img={Dog}
        />
      </div>
    </div>
  );
};

export default About;
