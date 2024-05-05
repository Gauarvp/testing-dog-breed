import React from "react";
import QRCode from "qrcode.react";

const LostAndFound = () => {
  // Dummy data for the dog details
  const dogDetails = {
    name: "Buddy",
    breed: "Golden Retriever",
    ownerName: "Sai Gaurav P",
    contact: "+91 7194101101",
    status: "Lost",
    lastSeenLocation: "JIT College",
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
        Lost and Found
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md flex items-center gap-14">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <QRCode value="Your data here" />
        </div>
        <div>
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
          <p>
            <span className="font-semibold">Last Seen Location:</span>{" "}
            {dogDetails.lastSeenLocation}
          </p>
        </div>
      </div>

      {/* Additional relevant details */}
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
