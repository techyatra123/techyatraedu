"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import OrbitingCardsWithHexagon from "./subcomponents/anotheranimation";

const H1ContentList = [
  <>
    Book training session for your <br /> school today
  </>,
  <>
    Daily news updates of the <br /> educational changes & more
  </>,
  <>
    Providing IT training all over <br /> Nepal since 2025
  </>,
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % H1ContentList.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#383366] to-[#efe5e5] 
      min-h-[110vh] md:min-h-[91vh] 
      h-auto flex flex-col md:flex-row 
      items-center justify-between 
      px-6 md:px-16 py-12 md:py-0"
    >
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-6 transition-opacity duration-500 min-h-[5rem] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {H1ContentList[currentIndex]}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-blue-950 mb-8 max-w-xl pt-12 md:pt-0">
          Explore Nepal&apos;s schools, colleges, and educational paths – empowering students{" "}
          <br className="hidden sm:block" />
          with knowledge to make informed and confident future choices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full pt-12 md:pt-0">
          <button className="relative bg-blue-500 text-white px-4 py-3 rounded shadow-lg hover:shadow-2xl transition duration-300 flex items-center justify-center w-full sm:w-[300px] group">
            <span className="text-center">Book Now</span>
            <ArrowRight className="absolute right-4 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="relative px-4 py-3 rounded shadow-lg hover:shadow-2xl bg-white transition duration-300 flex items-center justify-center w-full sm:w-[300px] group border-2 border-blue-700">
            <span className="text-center text-blue-700">Explore Colleges</span>
            <ArrowRight className="absolute text-blue-500 right-4 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative mt-10 md:mt-0 hidden md:block items-center justify-center">
        <OrbitingCardsWithHexagon />
      </div>
    </div>
  );
};

export default HeroSection;
