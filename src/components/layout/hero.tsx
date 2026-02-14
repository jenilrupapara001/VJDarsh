"use client";

import { motion, Variants } from "framer-motion";

export function Hero() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item: Variants = {
        hidden: { y: 200, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        },
    };

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-black">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-1000" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="z-10 text-center flex flex-col items-center gap-2"
            >
                <motion.div variants={item} className="overflow-hidden">
                    <h2 className="text-xl md:text-2xl font-medium tracking-[0.2em] text-gray-400 uppercase">
                        Digital Alchemist
                    </h2>
                </motion.div>

                <motion.div variants={item} className="overflow-hidden">
                    <h1 className="text-[12vw] leading-[0.9] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-2xl">
                        VJ DARSH
                    </h1>
                </motion.div>

                <motion.div variants={item} className="max-w-xl mt-8 px-6">
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                        Transforming sound into sight. Crafting immersive visual experiences
                        for the world&apos;s biggest stages and digital dreamscapes.
                    </p>
                </motion.div>

                <motion.div variants={item} className="mt-12 flex gap-4">
                    <a href="#visuals" className="glass-button px-8 py-3 rounded-full text-white font-medium hover:bg-white/20 transition-all">
                        View Work
                    </a>
                    <a href="/contact" className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-all">
                        Contact
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-12 z-10"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-3 bg-white/50 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
