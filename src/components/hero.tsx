"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import OrbitingCardsWithHexagon from "./subcomponents/anotheranimation";
import { motion } from "framer-motion";

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
    <div
      className="relative bg-gradient-to-b from-[#efe5e5] to-[#6056bb]
        min-h-[10vh] md:min-h-[80vh]
        flex flex-col md:flex-row mb-10
        items-center justify-between
        px-6 md:px-16 py-12 md:py-0"
    >
      <div className="w-full md:w-1/2 flex flex-col items-start z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-6 transition-opacity duration-500 min-h-[5rem] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {H1ContentList[currentIndex]}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-blue-950 mb-8 max-w-xl pt-12 md:pt-0">
            Explore Nepal&apos;s schools, colleges, and educational paths –
            empowering students <br className="hidden sm:block" />
            with knowledge to make informed and confident future choices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full pt-12 md:pt-0">
            <button className="relative bg-blue-500 cursor-pointer text-white px-4 py-3 rounded shadow-lg hover:shadow-2xl transition duration-300 flex items-center justify-center w-full sm:w-[300px] group">
              <span className="text-center">Explore our Courses</span>
              <ArrowRight className="absolute right-4 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="relative px-4 py-3 cursor-pointer rounded shadow-lg hover:shadow-2xl bg-white transition duration-300 flex items-center justify-center w-full sm:w-[300px] group border-2 border-blue-700">
              <span className="text-center text-blue-700">
                Explore Institutions
              </span>
              <ArrowRight className="absolute text-blue-500 right-4 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 relative mt-10 md:mt-0 hidden md:block items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <OrbitingCardsWithHexagon />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,100 L0,100 Z"
            fill="#ffffff"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,100 L0,100 Z;
                M0,0 C150,50 350,100 600,50 C850,0 1050,100 1200,50 L1200,100 L0,100 Z;
                M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,100 L0,100 Z
              "
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
