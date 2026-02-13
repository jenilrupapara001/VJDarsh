"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dynamic import to avoid SSR issues with ReactPlayer
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as any;

export function Hero() {
    const [isMounted, setIsMounted] = useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay for readability */}
                {/* @ts-ignore */}
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=qCZakK6W1Yg" // Generic VJ Loop placeholder
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className="scale-[1.5] md:scale-110 pointer-events-none" // Zoom to cover edges
                    config={{
                        youtube: {
                            playerVars: { showinfo: 0, controls: 0, modestbranding: 1, rel: 0 },
                        } as any,
                    }}
                />
            </div>

            {/* Content Layer */}
            <motion.div
                className="relative z-20 text-center px-4 max-w-4xl mx-auto"
                style={{ opacity, scale }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-secondary tracking-[0.2em] text-sm md:text-base mb-4 uppercase font-semibold">
                        This is Not Just a Performance
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white drop-shadow-2xl">
                        VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-pulse">ALCHEMY</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                        Transforming sound into sight. Immersive visual experiences for the world's biggest stages.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Button variant="neon" size="lg" className="min-w-[160px] text-lg h-14">
                            See My Work
                        </Button>
                        <Button variant="outline" size="lg" className="min-w-[160px] text-lg h-14 backdrop-blur-sm">
                            Book Now
                        </Button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
                <ChevronDown className="w-10 h-10 text-white/50" />
            </motion.div>
        </section>
    );
}
