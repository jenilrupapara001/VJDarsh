"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mock Data
const PROJECTS = [
    { id: 1, title: "Neon Genesis", category: "3D Motion", image: "bg-purple-900" },
    { id: 2, title: "Cyberpunk City", category: "Loops", image: "bg-blue-900" },
    { id: 3, title: "Abstract Glitch", category: "Generative", image: "bg-red-900" },
    { id: 4, title: "Sacred Geometry", category: "Projection Mapping", image: "bg-emerald-900" },
    { id: 5, title: "Festival Intro", category: "Live Visuals", image: "bg-orange-900" },
    { id: 6, title: "Audio Reactive", category: "TouchDesigner", image: "bg-pink-900" },
];

export function VisualsGallery() {
    return (
        <section id="visuals" className="py-24 bg-zinc-950/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Visual <span className="text-primary">Playground</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            Experimental loops, stage designs, and motion graphics.
                        </p>
                    </div>

                    {/* Filter categories could go here */}
                    <div className="flex gap-2 text-sm text-gray-500">
                        <span className="text-white font-medium cursor-pointer">All</span>
                        <span className="hover:text-white cursor-pointer transition-colors">3D</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Generative</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Live</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="border-0 bg-transparent group cursor-pointer overflow-hidden relative">
                                <CardContent className="p-0 aspect-video relative rounded-xl overflow-hidden">
                                    {/* Image Placeholder */}
                                    <div className={`w-full h-full ${project.image} transition-transform duration-700 group-hover:scale-110 flex items-center justify-center`}>
                                        <Play className="w-12 h-12 text-white/50 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 duration-300" />
                                    </div>

                                    {/* Overlay Info */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                        <p className="text-primary text-sm font-medium uppercase tracking-wider">{project.category}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
