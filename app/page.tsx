"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TutorCard from "@/components/TutorCard";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % 3);
  };

  const cards = [
    {
      key: "card1",
      title: "Stay motivated and reach your goals",
      subtitle:
        "Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.",
      content: <GoalsCardContent />,
    },
    {
      key: "card2",
      title: "Talk about anything, anytime, anywhere",
      subtitle:
        "Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche.",
      content: <ChatCardContent />,
    },
    {
      key: "card3",
      title: "Build a relationship with your tutor",
      subtitle:
        "Speak Tutor designs a personalized curriculum as unique as you are by getting to know you deeply.",
      content: <VideoCardContent />,
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Speak Tutor — Pixel UI Clone
      </h1>

      <div className="relative w-full flex flex-col items-center justify-center h-[650px]">
        {/* Next two cards in stack (faded, scaled down) */}
        {cards.map((card, i) => {
          if (i <= index) return null; // only show upcoming cards
          const offset = (i - index) * 40;
          const scale = 1 - (i - index) * 0.05;
          const opacity = 1 - (i - index) * 0.2;

          return (
            <motion.div
              key={card.key + "-bg"}
              className="absolute z-0 w-full flex justify-center"
              style={{ top: `${offset}px` }}
              initial={{ opacity: 0, scale }}
              animate={{ opacity, scale }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-[90%] md:w-[70%]">
                <TutorCard
                  title={card.title}
                  subtitle={card.subtitle}
                  onClick={() => {}}
                >
                  {card.content}
                </TutorCard>
              </div>
            </motion.div>
          );
        })}

        {/* Active card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[index].key}
            className="absolute z-10 w-full flex justify-center"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -80, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="w-[90%] md:w-[70%]">
              <TutorCard
                title={cards[index].title}
                subtitle={cards[index].subtitle}
                onClick={handleNext}
              >
                {cards[index].content}
              </TutorCard>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

/* ✅ CARD CONTENTS BELOW */

function GoalsCardContent() {
  return (
    <>
      <div className="flex flex-row gap-3 mb-3">
        <div className="flex-1 bg-pink-500 text-white rounded-xl p-4 shadow-md text-sm">
          You’re interested in traveling and exploring new cultures.
        </div>
        <div className="flex-1 bg-blue-600 text-white rounded-xl p-4 shadow-md text-sm">
          We’ve created unique lessons and conversations based on those goals.
        </div>
      </div>
      <button className="bg-blue-600 text-white font-semibold w-full rounded-xl mt-2 py-2">
        Get Started
      </button>
    </>
  );
}

function ChatCardContent() {
  return (
    <>
      <p className="text-gray-700 text-sm font-semibold mb-3">Create your own</p>
      <div className="space-y-3">
        <div className="bg-white border rounded-lg px-4 py-2 text-gray-700 text-sm shadow-sm">
          🧳 Tourist
        </div>
        <div className="bg-white border rounded-lg px-4 py-2 text-gray-700 text-sm shadow-sm">
          🤝 New friend
        </div>
        <div className="bg-white border rounded-lg px-4 py-2 text-gray-700 text-sm shadow-sm">
          🍽 Talking about the best places to grab dinner in San Francisco.
        </div>
      </div>
      <button className="bg-blue-600 text-white font-semibold w-full rounded-xl mt-5 py-2">
        Start Chatting
      </button>
    </>
  );
}

function VideoCardContent() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-2xl w-full h-48 object-cover"
        src="/video.mp4"
      />
    </div>
  );
}
