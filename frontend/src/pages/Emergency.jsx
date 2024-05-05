import React from "react";
import doctorImage from "../assets/vet-doc.jpeg";

const Emergency = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
            Emergency Assistance
          </h2>
          <p className="text-gray-600 mb-8">
            In case of an emergency, it's crucial to have access to immediate
            assistance for your furry friend. Here's how you can get help.
          </p>
          <div className="flex items-center justify-between">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Veterinary Doctor</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Name:</span> Dr. ChandraShekar
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Phone:</span> +91 8279131013
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src={doctorImage}
                className="h-40 rounded-lg  text-center"
                alt="emergency"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Nearest Hospital</h3>
            <p className="text-gray-600  max-w-lg mb-4">
              <span className="font-semibold">Location:</span> 840, 80 Feet
              Road, Hosakerehalli Cross Rd, Banashankari 3rd Stage, Bengaluru,
              Karnataka 560085
            </p>
          </div>
          <div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0370843936744!2d77.50938912585593!3d12.84088016772917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae40f716f6495b%3A0xb9d12e9452b7a883!2sJyothy%20Institute%20Of%20Technology%2C%20Bengaluru%2C%20Thathaguni%2C%20Karnataka%20560062!5e0!3m2!1sen!2sin!4v1714923936308!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-xl font-semibold mb-4">Instant Remedies</h3>
        <p className="text-gray-800">
          In case of an emergency, you can take the following immediate actions
          before reaching the doctor or hospital:
        </p>
        <ul className="list-disc text-gray-800 mt-4 ml-6 font-semibold">
          <li>Apply pressure to stop bleeding in case of wounds.</li>
          <li>Keep the dog warm and calm.</li>
          <li>Administer basic first aid if possible.</li>
        </ul>
      </div>
    </div>
  );
};

export default Emergency;
