import React from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/product1.jpg"
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product4.jpg"
import product5 from "../assets/product5.jpg"
import product6 from "../assets/product6.jpg"
import product7 from "../assets/product7.jpg"
import product8 from "../assets/product8.jpg"


const DogMarketplace = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">Dog Marketplace</h1>

      <div>
        <h2 className="text-2xl font-bold mb-4">Grooming Products</h2>
        <ul className="grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-8">
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src= {product1} 
                alt="Toy Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
               DOG SHAMPOO
              </h2>
              
              <Link
                target="_blank"
                to="https://amzn.in/d/hkL81zg "
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product2}
                alt="Toy Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
               DOG SHAMPOO
              </h2>
              
              <Link
                target="_blank"
                to="https://amzn.in/d/1YIo1R8"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product3}
                alt="Toy Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
               DOG COMB
              </h2>
              
              <Link
                target="_blank"
                to="https://amzn.in/d/6EmGjiB"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>

          {/* Add more product items as needed */}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Foods</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product4}
                alt="Food Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                CHEW TOY
              </h2>
              
              <Link
                target="_blank"
                to="https://amzn.in/d/0VJOHrg"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product5}
                alt="Food Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                MEDICINE FOR DOGS
              </h2>
             
              <Link
                target="_blank"
                to="https://amzn.in/d/0BTtqb0"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>
          <li>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product6}
                alt="Food Name"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">
                PEDIGREE FOR DOGS
              </h2>
              
              <Link
                target="_blank"
                to="https://amzn.in/d/91iAC4R"
              >
                <button className="bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold px-4 py-2 rounded mt-4">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>

          {/* Add more product items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default DogMarketplace;
