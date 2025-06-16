"use client";

import { motion } from "framer-motion";

export default function SolarSystemOrbit() {
  const orbitRadius = 13 * 16; // 224px
  const orbitDiameter = orbitRadius * 2;

  const orbitingSubjects = [
    { label: "Machine Learning", color: "#9CA3AF" },
    { label: "Computer Application", color: "#FBBF24" },
    { label: "Ethical Hacking", color: "#3B82F6" },
    { label: "Computer Science", color: "#EF4444" },
    { label: "Artificial Intelligence", color: "#F59E0B" },
    { label: "Data Science", color: "#EAB308" },
    { label: "Cyber Security", color: "#06B6D4" },
    { label: "Information Technology", color: "#6366F1" },
  ];

  const renderedOrbitingBubbles = orbitingSubjects.map((subject, index) => {
    const angleDeg = (360 / orbitingSubjects.length) * index;
    const angleRad = (angleDeg * Math.PI) / 180;
    const offsetX = orbitRadius * Math.cos(angleRad);
    const offsetY = orbitRadius * Math.sin(angleRad);

    return (
      <div
        key={subject.label}
        className="absolute flex flex-col items-center"
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(${offsetX}px, ${offsetY}px)`,
        }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-[10px] font-semibold text-white text-center px-2 break-words leading-tight transition duration-300"
          style={{
            backgroundColor: subject.color,
            boxShadow: `
      0 0 51px 1px rgba(255, 255, 255, 0.7),  /* outer white glow */
      0 4px 10px rgba(0, 0, 0, 0.3),         /* outer black drop shadow */
      inset 0 -25px 25px rgba(0, 0, 0, 0.5)   /* inner linear-style black shadow */
    `,
          }}
        >
          {subject.label}
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden">
      <motion.div
        className="relative"
        style={{ originX: "50%", originY: "50%" }} // Pivot center
        animate={{ rotate: [0, 360] }} // Use keyframes for smooth rotation
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        <div
          className="absolute"
          style={{
            width: `${orbitDiameter}px`,
            height: `${orbitDiameter}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {renderedOrbitingBubbles}
        </div>
      </motion.div>
    </div>
  );
}
