import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="block">
        <Hero />
      </main>
    </>
  );
};

export default Home;
