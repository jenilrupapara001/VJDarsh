"use client";

import { Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data until API integration
const MOCK_REELS = [
    { id: 1, type: "video", thumbnail: "bg-zinc-800", caption: "Live mixing at Sunburn 🔥 #vjlife #visuals" },
    { id: 2, type: "video", thumbnail: "bg-zinc-700", caption: "New generative patch test 🌀 #touchdesigner" },
    { id: 3, type: "video", thumbnail: "bg-zinc-800", caption: "Stage design mapping from last night 🏗️" },
    { id: 4, type: "video", thumbnail: "bg-zinc-700", caption: "Techno bunker vibes 🌑 #underground" },
];

export function ReelsFeed() {
    return (
        <section id="feed" className="py-20 bg-neutral-950 border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2 text-accent">
                    <Instagram className="w-6 h-6" />
                    <span className="font-semibold tracking-wide uppercase text-sm">Latest Updates</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
                    From The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Feed</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {MOCK_REELS.map((reel) => (
                        <Card key={reel.id} className="border-0 bg-transparent overflow-hidden group cursor-pointer">
                            <CardContent className="p-0 relative aspect-[9/16] rounded-xl overflow-hidden">
                                {/* Placeholder for Reel Thumbnail */}
                                <div className={`w-full h-full ${reel.thumbnail} transition-transform duration-500 group-hover:scale-110 flex items-center justify-center`}>
                                    <span className="text-white/20 font-mono text-4xl">REEL</span>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                                    <p className="text-white text-sm line-clamp-2 font-medium">{reel.caption}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-10">
                    <Button variant="outline" className="gap-2">
                        <Instagram className="w-4 h-4" /> Follow @vjdarsh
                    </Button>
                </div>
            </div>
        </section>
    );
}
