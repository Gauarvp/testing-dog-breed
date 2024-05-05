import React from "react";
import SingleUser from "./SingleUser";
import Sai from "../assets/sai.jpeg";
import Doggy from "../assets/image.png";
import Dog10 from "../assets/vishnu.jpg";
import Doggy11 from "../assets/varun.jpg";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      <h1 class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
        Team Members
      </h1>
      <div className="flex flex-wrap gap-10 justify-center -mx-4">
        <SingleUser
          name="Sai Gaurav P"
          groupNo="24"
          SRN="1JT20CS121"
          img={Sai}
        />
        <SingleUser
          name="Varun Kumar D"
          groupNo="24"
          SRN="1JT20CS108"
          img={Doggy11}
        />
        <SingleUser
          name="Varsha S"
          groupNo="24"
          SRN="1JT20SC107"
          img={Doggy}
        />
        <SingleUser
          name="Vishnu Prasad"
          groupNo="24"
          SRN="1JT20CS111"
          img={Dog10}
        />
      </div>
    </div>
  );
};

export default About;
