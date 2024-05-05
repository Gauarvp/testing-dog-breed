import React from "react";
import QRCode from "qrcode.react";

const LostAndFound = () => {
  const dogDetails = {
    name: "Buddy",
    breed: "Golden Retriever",
    ownerName: "Sai Gaurav P",
    contact: "+91 7194101101",
    status: "Lost",
    lastSeenLocation: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0370843936744!2d77.50938912585593!3d12.84088016772917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae40f716f6495b%3A0xb9d12e9452b7a883!2sJyothy%20Institute%20Of%20Technology%2C%20Bengaluru%2C%20Thathaguni%2C%20Karnataka%20560062!5e0!3m2!1sen!2sin!4v1714923936308!5m2!1sen!2sin"
        width="300"
        height="200"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
        Lost and Found
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md flex items-center gap-14">
        <div className="bg-white p-8 rounded-lg shadow-md">
         <QRCode value="Status: Still Missing,
                       Hotline(Animal Shelter): +91 6362047188 ,     
                       Animal: Dog (Golden-Retreiver),
                       Please Help Me Find My Dog"/>
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">Dog Information</h2>
          <p>
            <span className="font-semibold">Name:</span> {dogDetails.name}
          </p>
          <p>
            <span className="font-semibold">Breed:</span> {dogDetails.breed}
          </p>
          <p>
            <span className="font-semibold">Owner:</span> {dogDetails.ownerName}
          </p>
          <p>
            <span className="font-semibold">Contact:</span> {dogDetails.contact}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {dogDetails.status}
          </p>
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">Last Seen Location is Here:</h2>
          <p>{dogDetails.lastSeenLocation}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <p>
          If you have found a dog matching this description, please contact the
          owner immediately. Your help is greatly appreciated.
        </p>
      </div>
    </div>
  );
};

export default LostAndFound;
