"use client";

import { motion } from "framer-motion";
import { MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LollapaloozaLogo, UltraLogo } from "@/components/ui/brand-logos";

const shows = [
    {
        date: "MAR 15",
        event: "Lollapalooza India",
        city: "Mumbai",
        venue: "Mahalakshmi Race Course",
        Logo: LollapaloozaLogo
    },
    {
        date: "APR 02",
        event: "Ultra Music Festival",
        city: "Abu Dhabi",
        venue: "Yas Island",
        Logo: UltraLogo
    },
    { date: "MAY 18", event: "Electronic City", city: "Bangalore", venue: "Phoenix Marketcity" },
    { date: "JUN 22", event: "Echoes of Earth", city: "Goa", venue: "Vagator" },
];

export function LiveShows() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                            Live <span className="text-secondary italic">Presence</span>
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-md font-light">
                            Experience the convergence of sound and sight at these upcoming global destinations.
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full px-8">View Full Schedule</Button>
                </div>

                <div className="glass-panel rounded-[2rem] overflow-hidden">
                    {shows.map((show, i) => (
                        <motion.div
                            key={show.event}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col md:flex-row items-center justify-between p-8 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group"
                        >
                            <div className="flex items-center gap-8 w-full md:w-auto mb-4 md:mb-0">
                                <div className="flex flex-col items-center justify-center min-w-[80px]">
                                    <span className="text-2xl font-black text-white">{show.date.split(' ')[1]}</span>
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{show.date.split(' ')[0]}</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        {show.Logo && <show.Logo className="w-8 h-8 text-white/20 group-hover:text-primary transition-colors" />}
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{show.event}</h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                        <MapPin className="w-3 h-3" />
                                        <span>{show.city} — {show.venue}</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant="secondary" size="sm" className="w-full md:w-auto rounded-full gap-2">
                                <Ticket className="w-4 h-4" /> Get Tickets
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
