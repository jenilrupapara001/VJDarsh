"use client";

import { motion } from "framer-motion";

export function CreativeVision() {
    return (
        <section className="py-32 bg-white text-black overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent" />
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <h2 className="text-[10vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase mb-12">
                        Visuals <br />
                        Are Not <br />
                        <span className="text-blue-600">Background.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight">
                            I create experiences where light becomes the lead vocalist. Every photon is synchronized to the frequency of the soul.
                        </p>
                        <div className="space-y-6">
                            <p className="text-gray-600 text-lg">
                                In a world of static displays, I build living canvases. My philosophy is simple: if the visual doesn&apos;t breathe with the music, it&apos;s just noise.
                            </p>
                            <div className="pt-8 border-t border-black/10">
                                <span className="text-sm font-bold uppercase tracking-widest block mb-1">FOUNDATION</span>
                                <span className="text-xl font-bold">SYNESTHESIA & GEOMETRY</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
