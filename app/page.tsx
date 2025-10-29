"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TutorCard from "@/components/TutorCard";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % 3);
  };

  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Speak Tutor — pixel UI clone
      </h1>

      <div className="relative w-full flex flex-col items-center overflow-hidden">
        {/* Stacked effect for lower cards */}
        <div className="absolute top-12 scale-95 opacity-60 z-0">
          <TutorCard
            title="Talk about anything, anytime, anywhere"
            subtitle="Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche."
            onClick={() => {}}
          >
            <ChatCardContent />
          </TutorCard>
        </div>

        <div className="absolute top-24 scale-90 opacity-40 z-0">
          <TutorCard
            title="Build a relationship with your tutor"
            subtitle="Speak Tutor designs a personalized curriculum as unique as you are by getting to know you deeply."
            onClick={() => {}}
          >
            <VideoCardContent />
          </TutorCard>
        </div>

        {/* Active card */}
        <AnimatePresence mode="wait">
          {index === 0 && (
            <TutorCard
              key="card1"
              title="Stay motivated and reach your goals"
              subtitle="Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side."
              onClick={handleNext}
            >
              <GoalsCardContent />
            </TutorCard>
          )}
          {index === 1 && (
            <TutorCard
              key="card2"
              title="Talk about anything, anytime, anywhere"
              subtitle="Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche."
              onClick={handleNext}
            >
              <ChatCardContent />
            </TutorCard>
          )}
          {index === 2 && (
            <TutorCard
              key="card3"
              title="Build a relationship with your tutor"
              subtitle="Speak Tutor designs a personalized curriculum as unique as you are by getting to know you deeply."
              onClick={handleNext}
            >
              <VideoCardContent />
            </TutorCard>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

/* ✅ Card-specific mobile contents */

function GoalsCardContent() {
  return (
    <>
      <div className="bg-pink-500 text-white rounded-xl p-4 mb-3 shadow-md text-sm">
        You’re interested in traveling and exploring new cultures.
      </div>
      <div className="bg-blue-600 text-white rounded-xl p-4 shadow-md text-sm">
        We’ve created unique lessons and conversations based on those goals.
      </div>
      <button className="bg-blue-600 text-white font-semibold w-full rounded-xl mt-4 py-2">
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
    <div className="relative rounded-2xl overflow-hidden shadow-md">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-2xl w-full h-48 object-cover"
        src="../media/video.mp4"
      ></video>
    </div>
  );
}
