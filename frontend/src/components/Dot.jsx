// DotGrid.jsx
import React from "react";
import { motion } from "framer-motion";

const Dot = () => (
  <motion.div
    className="w-2.5 h-2.5 rounded-full bg-red-900 bg-opacity-30"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      delay: Math.random() * 2, // Randomize delays for staggered effects
    }}
  />
);

const DotGrid = () => {
  const rows = 10; // Number of rows
  const cols = 10; // Number of columns

  return (
    <div className="absolute top-0 left-0 w-full h-full grid grid-cols-10 gap-4 pointer-events-none z-[-1]">
      {Array.from({ length: rows * cols }).map((_, index) => (
        <Dot key={index} />
      ))}
    </div>
  );
};

export default DotGrid;
