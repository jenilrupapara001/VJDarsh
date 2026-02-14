"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Loader2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
    _id?: string;
    id?: number;
    title: string;
    category: string;
    image: string;
    mediaUrl?: string;
    size?: "small" | "medium" | "large" | "tall";
}

export function VisualsGallery() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch("/api/projects");
                const data = await res.json();
                if (data.success) {
                    // Assign random sizes for bento effect if not present
                    const projectsWithSize = data.data.map((p: Project, i: number) => ({
                        ...p,
                        size: p.size || (i % 4 === 0 ? "large" : i % 3 === 0 ? "tall" : "small")
                    }));
                    setProjects(projectsWithSize);
                }
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProjects();
    }, []);

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category.includes(filter));

    return (
        <section id="visuals" className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black text-white tracking-tighter"
                        >
                            Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Archive</span>
                        </motion.h1>
                        <p className="text-gray-400 max-w-xl text-lg font-light">
                            A collection of motion experiments, stage designs, and generative loops.
                        </p>
                    </div>

                    {/* iOS Segmented Control */}
                    <div className="glass-panel p-1 rounded-xl flex gap-1">
                        {["All", "3D", "Generative", "Live"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                                    filter === tab ? "text-white" : "text-gray-400 hover:text-white"
                                )}
                            >
                                {tab}
                                {filter === tab && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-white/10 rounded-lg -z-10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64 glass-panel rounded-3xl">
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    </div>
                ) : (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project._id || project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={cn(
                                        "glass-card rounded-3xl overflow-hidden relative group cursor-pointer",
                                        project.size === "large" && "md:col-span-2 md:row-span-2",
                                        project.size === "tall" && "md:col-span-1 md:row-span-2",
                                        project.size === "medium" && "md:col-span-2 md:row-span-1",
                                        project.size === "small" && "md:col-span-1 md:row-span-1"
                                    )}
                                >
                                    {/* Image Background */}
                                    <div
                                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                        <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                                            <span className="glass-panel px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white/80">
                                                {project.category}
                                            </span>
                                            <div className="p-2 rounded-full glass-button">
                                                <ArrowUpRight className="w-4 h-4 text-white" />
                                            </div>
                                        </div>

                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className={cn(
                                                "font-bold text-white mb-1 leading-tight",
                                                project.size === "large" ? "text-3xl" : "text-xl"
                                            )}>
                                                {project.title}
                                            </h3>
                                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                                <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                                    Tap to view project details
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Play Button for large items */}
                                    {project.size === "large" && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center backdrop-blur-md">
                                                <Play className="w-6 h-6 text-white fill-white" />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
