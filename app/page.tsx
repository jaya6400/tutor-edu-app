"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TutorCard from "@/components/TutorCard";
import { HeartIcon, ListBulletIcon } from '@heroicons/react/24/outline'; 

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
    <main className="bg-[#f8f9fb] min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="relative w-full flex flex-col items-center justify-center h-[700px]">
        {/* Stacked background cards */}
        {cards.map((card, i) => {
          if (i <= index) return null;
          const offset = (i - index) * 60;
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
              <TutorCard
                title={card.title}
                subtitle={card.subtitle}
                onClick={() => {}}
              >
                {card.content}
              </TutorCard>
            </motion.div>
          );
        })}

        {/* Active animated card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[index].key}
            className="absolute z-10 w-full flex justify-center"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -80, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <TutorCard
              title={cards[index].title}
              subtitle={cards[index].subtitle}
              onClick={handleNext}
            >
              {cards[index].content}
            </TutorCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

/* ----- CONTENTS BELOW ----- */

function GoalsCardContent() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-inner border border-gray-200">
      <div className="flex justify-left mb-3">
        <span className="text-1.5xl">🤖</span>
      </div>
      <div className="flex gap-3 mb-4">
        <div className="flex-1 bg-[#f15b75] text-white rounded-2xl p-4 text-sm font-medium shadow-sm">
          <div className="flex justify-left mb-3">
            <HeartIcon className="w-6 h-6" />
          </div>
          You’re interested in traveling and exploring new cultures.
        </div>
        <div className="flex-1 bg-[#0a66ff] text-white rounded-2xl p-4 text-sm font-medium shadow-sm">
          <div className="flex justify-left mb-3">
            <ListBulletIcon className="h-6 w-6 text-white-500" />
          </div>
          We’ve created unique lessons and conversations based on those goals.
        </div>
      </div>
      <button className="bg-[#0a66ff] text-white font-semibold w-full rounded-xl py-2">
        Get Started
      </button>
    </div>
  );
}

function ChatCardContent() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-inner border border-gray-200">
      <p className="text-gray-600 text-sm font-semibold mb-4">Create your own</p>
      <div className="space-y-3">
        <div className="bg-gray-100 rounded-lg px-4 py-3 text-gray-800 text-sm flex items-center gap-2">
          👤 Tourist
        </div>
        <div className="bg-gray-100 rounded-lg px-4 py-3 text-gray-800 text-sm flex items-center gap-2">
          🤝 New friend
        </div>
        <div className="bg-gray-100 rounded-lg px-4 py-3 text-gray-800 text-sm flex items-center gap-2">
          🍽 Talking about the best places to grab dinner in San Francisco.
        </div>
      </div>
      <button className="bg-[#0a66ff] text-white font-semibold w-full rounded-xl mt-5 py-2">
        Start Chatting
      </button>
    </div>
  );
}

function VideoCardContent() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-inner border border-gray-200">
      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-56 object-cover"
          src="/video.mp4"
        />
      </div>
    </div>
  );
}
