import React from "react";
import doctorImage from "../assets/vet-doc.jpeg";

const Emergency = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center text-gray-800">
          Emergency Assistance
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          In case of an emergency, it's crucial to have immediate access to
          assistance for your furry friend. Here's how you can get help.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Veterinary Doctor</h3>
            <p className="text-lg text-gray-700 mb-2">Name: Dr. ChandraShekar</p>
            <p className="text-lg text-gray-700 mb-2">Phone: +91 8279131013</p>
          </div>
          <div>
            <img
              src={doctorImage}
              className="h-48 lg:h-64 rounded-lg shadow-md"
              alt="Doctor"
            />
          </div>
        </div>

        <div className="mt-8 lg:mt-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Nearest Hospital</h3>
          <p className="text-lg text-gray-700 max-w-md mb-4">
            Location: 840, Kanakpura Rd, 
            Bengaluru, Karnataka 560085
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0370843936744!2d77.50938912585593!3d12.84088016772917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae40f716f6495b%3A0xb9d12e9452b7a883!2sJyothy%20Institute%20Of%20Technology%2C%20Bengaluru%2C%20Thathaguni%2C%20Karnataka%20560062!5e0!3m2!1sen!2in!4v1714923936308!5m2!1sen!2in"
            width="100%"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mt-4"
          ></iframe>
        </div>

        <div className="mt-12 text-gray-800">
          <h3 className="text-2xl font-semibold mb-4">Instant Remedies</h3>
          <p className="text-lg mb-4">
            In case of emergency, take the following immediate actions before
            reaching the doctor:
          </p>
          <ul className="list-disc ml-6">
            <li>Apply pressure to stop bleeding in wounds.</li>
            <li>Keep the dog warm and calm.</li>
            <li>Administer basic first aid if possible.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
