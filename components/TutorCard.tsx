"use client";

import { motion } from "framer-motion";

export default function TutorCard({
  title,
  subtitle,
  children,
  onClick,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl w-full max-w-5xl p-10 flex flex-col md:flex-row justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      {/* Left Text Section */}
      <div className="flex-1 text-left md:pr-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-500 text-base">{subtitle}</p>
      </div>

      {/* Right Card (Mobile Mockup) */}
      <div className="flex-1 mt-8 md:mt-0 flex justify-center">
        <div className="relative bg-gray-50 rounded-2xl shadow-inner p-6 w-72 md:w-80">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
