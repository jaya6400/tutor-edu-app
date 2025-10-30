"use client";
import React from "react";
import { motion } from "framer-motion";

type TutorCardProps = {
  title: string;
  subtitle: string;
  onClick: () => void;
  children: React.ReactNode;
};

export default function TutorCard({
  title,
  subtitle,
  onClick,
  children,
}: TutorCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className="relative bg-white rounded-3xl p-8 cursor-pointer
                 shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                 border border-gray-200 transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-base">{subtitle}</p>
        </div>

        <div className="flex-1 bg-gray-50 p-6 rounded-3xl shadow-inner border border-gray-100 transition-all duration-500">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
