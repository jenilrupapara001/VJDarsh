"use client";

import { motion } from "framer-motion";
import { Download, Globe, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    ResolumeLogo,
    TouchDesignerLogo,
    NotchLogo,
    UnrealLogo,
    BlenderLogo,
    AfterEffectsLogo,
    Cinema4DLogo,
    MadMapperLogo,
    NikeLogo,
    BMWLogo,
    LollapaloozaLogo,
    UltraLogo,
    ArtBaselLogo
} from "@/components/ui/brand-logos";

const TECH_STACK = [
    { name: "Resolume Arena", logo: ResolumeLogo, level: "Expert" },
    { name: "TouchDesigner", logo: TouchDesignerLogo, level: "Advanced" },
    { name: "Notch VFX", logo: NotchLogo, level: "Expert" },
    { name: "Unreal Engine", logo: UnrealLogo, level: "Advanced" },
    { name: "Blender 3D", logo: BlenderLogo, level: "Advanced" },
    { name: "After Effects", logo: AfterEffectsLogo, level: "Master" },
    { name: "Cinema 4D", logo: Cinema4DLogo, level: "Expert" },
    { name: "MadMapper", logo: MadMapperLogo, level: "Expert" },
];

const CLIENT_WALL = [
    { name: "Nike", logo: NikeLogo },
    { name: "BMW", logo: BMWLogo },
    { name: "Lollapalooza", logo: LollapaloozaLogo },
    { name: "Ultra Music Festival", logo: UltraLogo },
    { name: "Art Basel", logo: ArtBaselLogo },
];

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Cinematic Header */}
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary text-xs font-black tracking-[0.4em] uppercase mb-4 block"
                    >
                        Artist Profile / 001
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[12vw] leading-none font-black tracking-tighter text-white uppercase"
                    >
                        Synthesis <br />
                        <span className="text-secondary italic">& Vision</span>
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Creative Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white tracking-tight">The Genesis</h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed">
                                Born at the intersection of electronic music culture and digital experimentation, VJ Darsh is a visual strategist dedicated to the art of synesthesia. My journey began with a simple question: <span className="text-white font-medium italic">&quot;What does sound look like?&quot;</span>
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white tracking-tight">The Synthesis</h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Over the last 5 years, I have orchestrated visuals for labels and festivals that define the modern sonic landscape. By merging real-time generative systems with curated cinematic assets, I create high-fidelity environments that pulse with the rhythm of the performance.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                My approach is technical yet intuitive. I believe that every frequency has a corresponding form, and every beat deserves a visual soul.
                            </p>
                        </div>

                        {/* Social / Media Kit */}
                        <div className="pt-8 flex flex-wrap gap-4">
                            <Button variant="neon" className="rounded-full px-8 h-12 gap-2">
                                <Download className="w-4 h-4" /> Download Media Kit
                            </Button>
                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5">
                                    <Instagram className="w-5 h-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5">
                                    <Globe className="w-5 h-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/5">
                                    <Mail className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Software Arsenal */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xs font-black tracking-widest text-primary uppercase mb-10">Software Arsenal</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {TECH_STACK.map((tech, i) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="glass-card p-6 rounded-3xl flex items-center gap-4 group hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <tech.logo className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white uppercase tracking-tighter">{tech.name}</h4>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-widest">{tech.level}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Client Wall */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="text-xs font-black tracking-widest text-secondary uppercase mb-10">Trusted By Global Brands</h3>
                            <div className="flex flex-wrap gap-12 items-center opacity-30 grayscale hover:grayscale-0 transition-all hover:opacity-100 duration-700">
                                {CLIENT_WALL.map((client) => (
                                    <client.logo key={client.name} className="h-6 w-auto" />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Closing Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-48 glass-panel p-16 rounded-[4rem] text-center border-white/10"
                >
                    <p className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
                        Visualizing the <br />
                        <span className="text-primary italic">Invisible Architecture</span>
                    </p>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                        Turning acoustic vibrations into immersive digital constructs.
                        Available for worldwide production and creative collaboration.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
