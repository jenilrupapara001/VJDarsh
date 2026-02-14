"use client";

import { motion } from "framer-motion";

export function WorkHeader() {
    return (
        <section className="pt-32 pb-16 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/10 pb-16">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="w-12 h-[1px] bg-primary" />
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Architect of Light</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter text-white uppercase"
                        >
                            The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Archives.</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-xs text-right hidden md:block"
                    >
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            A curated timeline of immersive experiences, digital artifacts, and stage masterpieces.
                        </p>
                        <div className="mt-8 flex justify-end gap-12">
                            <div>
                                <span className="block text-2xl font-black text-white">50+</span>
                                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Selected Works</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-black text-white">12</span>
                                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Countries</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Blur */}
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        </section>
    );
}
