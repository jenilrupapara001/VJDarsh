"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/layout/hero";
import { Services } from "@/components/layout/services";
import { LiveShows } from "@/components/layout/live-shows";
import { CreativeVision } from "@/components/layout/creative-vision";
import { ReelsFeed } from "@/components/features/reels-feed";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <Hero />
      <CreativeVision />
      <Services />
      <LiveShows />
      <ReelsFeed />
    </motion.div>
  );
}
