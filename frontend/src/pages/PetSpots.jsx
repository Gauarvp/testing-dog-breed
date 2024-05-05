import React from "react";
import alice from "../assets/alice.jpeg";
import bob from "../assets/bob.jpeg";
import charlie from "../assets/charlie.jpeg";

const PetSpots = () => {
  const dogWalkers = [
    {
      name: "Alice",
      image: alice,
      description: "Experienced dog walker available for hire. Loves all breeds!",
      contact: "+1-800-DOG-WALK",
      email: "alice@example.com",
    },
    {
      name: "Bob",
      image: bob,
      description: "Professional dog sitter with a passion for taking care of furry friends.",
      contact: "+1-800-DOG-SIT",
      email: "bob@example.com",
    },
    {
      name: "Charlie",
      image: charlie,
      description: "Certified dog trainer offering dog walking and sitting services.",
      contact: "+1-800-TRAINED-DOG",
      email: "charlie@example.com",
    },
  ];

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Dog Walkers & Sitters</h2>
          {dogWalkers.map((walker, index) => (
            <div className="mb-4 flex items-center" key={index}>
              <img src={walker.image} alt={walker.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-bold">{walker.name}</h3>
                <p>{walker.description}</p>
                <p>Contact: {walker.contact}</p>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEmailClick(walker.email)}>Email</button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Checkout  Dog  Parks  Near  You:</h2>
       
      
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62218.13261815142!2d77.51957740995329!3d12.931274836725782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1671820558b9%3A0x9f5d397c781837fa!2sThe%20Weekend%20Dog%20Park%20%40%20Cubbon%20Park!5e0!3m2!1sen!2sin!4v1714933126471!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PetSpots;
