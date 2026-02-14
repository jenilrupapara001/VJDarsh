"use client";

import { motion } from "framer-motion";
import { Download, Layers, Cpu, Code2, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent" />
                            <div className="relative z-10">
                                <div
                                    className="w-24 h-24 rounded-full border-4 border-black mb-6 shadow-xl bg-cover bg-center"
                                    style={{ backgroundImage: `url('/assets/projects/avatar.png')` }}
                                />
                                <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">VJ Darsh</h1>
                                <p className="text-primary font-medium mb-6">Visual Artist & Stage Designer</p>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Crafting immersive digital experiences for festivals, concerts, and art installations. Specializing in real-time generative visuals and projection mapping.
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="neon" className="w-full">Download CV</Button>
                                    <Button variant="outline" size="icon" className="glass-button"><Download className="w-4 h-4" /></Button>
                                </div>
                            </div>
                        </div>

                        {/* Stats / Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-6 rounded-2xl text-center">
                                <span className="block text-3xl font-bold text-white mb-1">5+</span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Years Exp</span>
                            </div>
                            <div className="glass-card p-6 rounded-2xl text-center">
                                <span className="block text-3xl font-bold text-white mb-1">100+</span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Shows</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Experience & Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-8 space-y-6"
                    >
                        {/* Tech Stack "Dock" */}
                        <div className="glass-panel p-8 rounded-3xl">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-primary" /> Software Arsenal
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { name: "Resolume", icon: Layers },
                                    { name: "Notch", icon: Monitor },
                                    { name: "TouchDesigner", icon: Code2 },
                                    { name: "Unreal Engine", icon: Cpu },
                                    { name: "Blender", icon: Layers },
                                    { name: "After Effects", icon: Monitor },
                                    { name: "Cinema 4D", icon: Layers },
                                    { name: "MadMapper", icon: Monitor }
                                ].map((tool) => (
                                    <div key={tool.name} className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                            <tool.icon className="w-5 h-5 text-white/70" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-300">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Philosophy / Statement */}
                        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
                            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Visual Philosophy</h2>
                            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                                &quot;I don&apos;t just accompany the music; I visualize it. My work explores the symbiotic relationship between audio frequencies and visual forms, creating a synesthetic experience where sound and light become one.&quot;
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
