"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Loader2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    ResolumeLogo,
    TouchDesignerLogo,
    NotchLogo,
    UnrealLogo,
    NikeLogo,
    BMWLogo
} from "@/components/ui/brand-logos";

const TOOL_LOGOS: Record<string, React.ComponentType<{ className?: string }>> = {
    "Resolume": ResolumeLogo,
    "TouchDesigner": TouchDesignerLogo,
    "Notch": NotchLogo,
    "Unreal Engine": UnrealLogo
};

const CLIENT_LOGOS: Record<string, React.ComponentType<{ className?: string }>> = {
    "Nike Digital": NikeLogo,
    "BMW Launch": BMWLogo
};

interface Project {
    _id?: string;
    id?: number;
    title: string;
    category: string;
    image: string;
    mediaUrl?: string;
    size?: "small" | "medium" | "large" | "tall";
    toolsUsed?: string[];
    year?: string;
    client?: string;
    role?: string;
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
                    const projectsWithSize = data.data.map((p: Project, i: number) => ({
                        ...p,
                        size: p.size || (i % 5 === 0 ? "large" : i % 4 === 0 ? "tall" : "small")
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
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase"
                        >
                            Project <span className="text-secondary italic lowercase tracking-tight font-light text-4xl">indices</span>
                        </motion.h2>
                        <p className="text-gray-400 max-w-xl text-lg font-light">
                            Synthesizing technical mastery with creative intuition.
                        </p>
                    </div>

                    <div className="glass-panel p-1.5 rounded-2xl flex gap-1">
                        {["All", "Visuals", "Art", "Mapping"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={cn(
                                    "px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 relative",
                                    filter === tab ? "text-white" : "text-gray-500 hover:text-white"
                                )}
                            >
                                {tab}
                                {filter === tab && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl -z-10"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64 glass-panel rounded-[2rem]">
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    </div>
                ) : (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-6">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project._id || project.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className={cn(
                                        "glass-card rounded-[2.5rem] overflow-hidden relative group cursor-pointer border border-white/5",
                                        project.size === "large" && "md:col-span-2 md:row-span-2",
                                        project.size === "tall" && "md:col-span-1 md:row-span-2",
                                        project.size === "medium" && "md:col-span-2 md:row-span-1"
                                    )}
                                >
                                    {/* Image Background */}
                                    <div
                                        className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />

                                    {/* Dynamic Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    {/* Sub-Header (Year/Category) */}
                                    <div className="absolute top-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                                        <span className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">
                                            {project.year || "2024"} — {project.category}
                                        </span>
                                        <div className="flex gap-2">
                                            {project.toolsUsed?.slice(0, 2).map(tool => {
                                                const ToolIcon = TOOL_LOGOS[tool];
                                                return (
                                                    <span key={tool} className="flex items-center gap-1.5 text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-white/60">
                                                        {ToolIcon && <ToolIcon className="w-2.5 h-2.5" />}
                                                        {tool}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Client Logo Overlay (Top Left) */}
                                    {project.client && CLIENT_LOGOS[project.client] && (
                                        <div className="absolute top-6 left-8 opacity-0 group-hover:opacity-40 transition-opacity">
                                            {(() => {
                                                const ClientIcon = CLIENT_LOGOS[project.client as string];
                                                return <ClientIcon className="w-12 h-6 text-white" />;
                                            })()}
                                        </div>
                                    )}

                                    {/* Main Content */}
                                    <div className="absolute bottom-10 left-8 right-8">
                                        <div className="overflow-hidden">
                                            <motion.h3
                                                className={cn(
                                                    "font-bold text-white tracking-tighter leading-none mb-4",
                                                    project.size === "large" ? "text-5xl" : "text-2xl"
                                                )}
                                            >
                                                {project.title}
                                            </motion.h3>
                                        </div>

                                        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="h-[1px] w-8 bg-primary" />
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                                View Case Study <ArrowUpRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Role Badge (Bottom Right) */}
                                    <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        <span className="text-[9px] font-medium text-white/30 lowercase italic">
                                            Role: {project.role || "Lead"}
                                        </span>
                                    </div>

                                    {/* Center Play Indicator */}
                                    {project.size === "large" && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                                            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors">
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
