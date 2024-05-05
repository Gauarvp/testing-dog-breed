import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroDog from "./components/HeroDog";
import DogBreed from "./components/DogBreed";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Footer";
import UploadForm from "./components/DogBreedPage";

import LostAndFound from "./pages/LostAndFound";
import DogMarketPlace from "./pages/DogMarketPlace";
import Emergency from "./pages/Emergency";
import PetSpots from "./pages/PetSpots";
import Training from "./pages/Training";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/prediction" element={<UploadForm />} />
        <Route path="/lostandfound" element={<LostAndFound />} />
        <Route path="/dogmarketplace" element={<DogMarketPlace />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/petspots" element={<PetSpots />} />
        <Route path="/training" element={<Training />} />
      </Routes>
      <Layout />
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <HeroDog />
      <DogBreed />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default App;
