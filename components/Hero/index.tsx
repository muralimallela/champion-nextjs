import React from "react";
import '@/components/Hero/hero.css'; // Make sure to import your CSS file

function Hero() {
  return (
    <div>
      <div className="h-screen mt-[120px] lg:mt-[160px] flex flex-col items-center justify-center text-center bg-hero-pattern bg-cover bg-center text-white">
        <video className="w-full h-auto mt-[-18px] mb-4 object-cover" autoPlay muted loop>
          <source src="champ2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="text-4xl lg:text-6xl font-bold mt-8 mb-4 gradient-text">
          Champions: Innovate, Create, Dominate
        </h1> 
        <p className="text-xl lg:text-2xl mb-8 gradient-text">
          Discover amazing content and join our community.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 mt-6 mb-6 text-white rounded-[100px]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
