"use client";

import React from "react";
import { motion, useTime, useTransform, MotionValue } from "framer-motion";

const ORBIT_RADIUS = 230;
const CARD_COUNT = 8; 
const BASE_ORBIT_DURATION = 18;

const CARD_COLORS: string[] = [
  "bg-gradient-to-br from-green-400 to-emerald-600",
  "bg-gradient-to-br from-indigo-400 to-purple-600",
  "bg-gradient-to-br from-yellow-400 to-yellow-600",
  "bg-gradient-to-br from-pink-400 to-rose-600",
  "bg-gradient-to-br from-sky-400 to-blue-600",
  "bg-gradient-to-br from-orange-400 to-amber-600",
  "bg-gradient-to-br from-teal-400 to-cyan-600",
  "bg-gradient-to-br from-lime-400 to-green-600",
];

const SERVICES: string[] = [
  "Machine Learning",
  "Computer Application",
  "Ethical Hacking",
  "Computer Science",
  "Artificial Intelligence",
  "Data Science",
  "Cyber Security",
  "Information Technology",
];

type Position = {
  x: number;
  y: number;
};

const getOrbitPosition = (
  index: number,
  total: number,
  radius: number,
  progress: number
): Position => {
  const angle = (index / total) * 2 * Math.PI + progress * 2 * Math.PI;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
};

export default function OrbitingCardsWithHexagon(): JSX.Element {
  const time = useTime();
  const progress = useTransform(time, (t) => t / 1000 / BASE_ORBIT_DURATION);

  return (
    <div className="relative top-[-60px] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] flex items-center justify-center">
      {/* Hexagon center */}
      <div
        className="absolute w-28 h-28 bg-gradient-to-br from-green-600 to-teal-600 justify-center items-center"
        style={{
          top: "47%",
          left: "50%",
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
          boxShadow:
            "0 0 25px rgba(93,183,111,0.8), inset 0 0 12px rgba(255,255,255,0.3)",
        }}
      ></div>

      {/* Orbiting cards */}
      {SERVICES.slice(0, CARD_COUNT).map((service, index) => {
        const x: MotionValue<number> = useTransform(
          progress,
          (p) => getOrbitPosition(index, CARD_COUNT, ORBIT_RADIUS, p).x
        );
        const y: MotionValue<number> = useTransform(
          progress,
          (p) => getOrbitPosition(index, CARD_COUNT, ORBIT_RADIUS, p).y
        );

        return (
          <motion.div
            key={index}
            className={`absolute w-28 h-16 px-2 py-1 ${
              CARD_COLORS[index % CARD_COLORS.length]
            } rounded-lg flex items-center justify-center text-white text-sm font-medium text-center shadow-lg border border-white/30`}
            style={{
              top: "50%",
              left: "50%",
              x,
              y,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
          >
            {service}
          </motion.div>
        );
      })}
    </div>
  );
}
