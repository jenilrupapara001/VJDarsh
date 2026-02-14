"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Sparkles, Layers } from "lucide-react";

const capabilities = [
    {
        title: "Stage Design & Live Visuals",
        description: "Creating synchronous visual narratives for arena-scale performances and music festivals globally.",
        icon: Monitor,
        tags: ["Resolume", "Notch", "Real-time Rendering"]
    },
    {
        title: "Generative Art Systems",
        description: "Building autonomous visual ecosystems using TouchDesigner and custom GLSL shaders.",
        icon: Cpu,
        tags: ["GLSL", "Python", "Audio-Reactive"]
    },
    {
        title: "Immersive 3D Environments",
        description: "Developing hyper-realistic digital spaces for virtual production and luxury brands.",
        icon: Sparkles,
        tags: ["Unreal Engine", "Blender", "Octane"]
    },
    {
        title: "Motion Projection Mapping",
        description: "Transforming architecture into living canvas through precise spatial light orchestration.",
        icon: Layers,
        tags: ["MadMapper", "Spatial Design"]
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4"
                    >
                        Core <span className="text-primary tracking-normal font-light italic lowercase text-4xl">capabilities</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl text-lg font-light">
                        Merging technical precision with artistic vision to push the boundaries of modern visual media.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cp, i) => (
                        <motion.div
                            key={cp.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-8 rounded-[2rem] hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <cp.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{cp.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {cp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {cp.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Work Process Detail */}
                <div className="mt-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-16 text-center"
                    >
                        Design <span className="text-secondary tracking-normal font-light italic lowercase text-4xl">philosophy</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                        {[
                            { step: "01", title: "Conceptualize", desc: "Deep diving into the audio DNA to define the visual mood and narrative arc." },
                            { step: "02", title: "Pre-Visualize", desc: "Rigorous 3D simulation of stage environments and light behavior." },
                            { step: "03", title: "Code & Render", desc: "Developing custom shaders and generative logic for real-time reactivity." },
                            { step: "04", title: "Live Synthesis", desc: "Merging human intuition with digital precision during the performance." }
                        ].map((p, i) => (
                            <motion.div
                                key={p.step}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6 rounded-3xl group"
                            >
                                <span className="text-5xl font-black text-white/10 group-hover:text-primary/20 transition-colors mb-4 block">{p.step}</span>
                                <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
