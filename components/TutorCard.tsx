"use client";

import { ReactNode } from "react";

interface TutorCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function TutorCard({
  title,
  subtitle,
  children,
  onClick,
}: TutorCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-[90%] md:w-[70%] bg-white shadow-2xl rounded-3xl px-10 py-10 flex flex-col md:flex-row items-center gap-10 border border-gray-100"
    >
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-gray-500 text-base leading-relaxed">{subtitle}</p>
      </div>

      <div className="flex-1 flex justify-center">{children}</div>
    </div>
  );
}
