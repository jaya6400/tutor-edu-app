"use client";

import { motion } from "framer-motion";

type TutorCardProps = {
  title: string;
  subtitle: string;
  emoji?: string;
  leftText?: string;
  rightText?: string;
  buttonText?: string;
  onNext?: () => void;
};

export default function TutorCard({
  title,
  subtitle,
  emoji,
  leftText,
  rightText,
  buttonText,
  onNext,
}: TutorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-3xl shadow-xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto cursor-pointer"
      onClick={onNext}
    >
      {/* Left side text */}
      <div className="flex-1 text-left md:pr-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="relative bg-gray-50 rounded-2xl p-6 shadow-inner">
          <div className="absolute top-3 left-3 text-2xl">{emoji}</div>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-pink-500 text-white rounded-xl p-4 text-sm font-medium shadow-md">
              {leftText}
            </div>
            <div className="bg-blue-600 text-white rounded-xl p-4 text-sm font-medium shadow-md">
              {rightText}
            </div>
            <div className="col-span-2">
              <button className="bg-blue-600 text-white w-full py-2 rounded-xl font-semibold mt-4">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
