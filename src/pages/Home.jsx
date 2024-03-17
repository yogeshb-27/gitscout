import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center text-center flex-col h-screen -my-16">
      {/* <i className="bx bxl-git text-7xl text-red-500 mb-4"></i> */}
      <img src="/icons8-github-94.png" alt="github" />
      <h1
        className="text-2xl md:text-3xl lg:text-4xl px-4 sm:px-24 md:px-56 lg:px-80 mb-8"
        id="h1"
      >
        Discover and Explore GitHub's World with
        <span className="text-red-500 "> GitScout</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 ">
        <Link
          to="/search"
          className="bg-blue-500 text-white p-2 px-5 rounded-md"
        >
          Get Started
        </Link>
        <Link to="/about" className="bg-gray-300  p-2 px-5 rounded-md">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
