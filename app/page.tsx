"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TutorCard from "@/components/TutorCard";

export default function Home() {
  const cards = [
    {
      title: "Stay motivated and reach your goals",
      subtitle:
        "Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.",
      emoji: "💬",
      leftText: "You're interested in traveling and exploring new cultures.",
      rightText: "We've created unique lessons and conversations based on those goals.",
      buttonText: "Get Started",
    },
    {
      title: "Talk about anything, anytime",
      subtitle:
        "Practice speaking freely on any topic with natural AI conversation.",
      emoji: "💭",
      leftText: "Let's talk about your favorite hobbies!",
      rightText: "Learn idioms and everyday expressions.",
      buttonText: "Start Chatting",
    },
    {
      title: "Build a relationship with your tutor",
      subtitle:
        "Get personalized feedback and learning paths that adapt to your needs.",
      emoji: "🤝",
      leftText: "Weekly progress reports",
      rightText: "Tailored recommendations",
      buttonText: "Continue Learning",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back to start (optional)
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen py-20 flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">
          Speak Tutor — pixel UI clone
        </h1>
        <p className="text-gray-500 mt-2">
          Responsive pixel-like card transitions on click.
        </p>
      </div>

      <div className="relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          <TutorCard
            key={currentIndex}
            {...cards[currentIndex]}
            onNext={handleNext}
          />
        </AnimatePresence>
      </div>
    </main>
  );
}
