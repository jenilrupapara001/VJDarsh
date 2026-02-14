"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Performance {
    _id?: string;
    id?: number;
    title: string;
    date: string;
    location: string;
    description: string;
    image?: string;
}

export function Performances() {
    const [performances, setPerformances] = useState<Performance[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchPerformances() {
            try {
                const res = await fetch("/api/performances");
                const data = await res.json();
                if (data.success) {
                    setPerformances(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch performances:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPerformances();
    }, []);

    return (
        <section id="performances" className="py-24 bg-black relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Recent <span className="text-secondary">Performances</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            A curated list of events where I&apos;ve brought the visuals to life.
                        </p>
                    </div>
                    <Button variant="link" className="text-white">View All Archive &rarr;</Button>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {performances.map((event) => (
                            <Card key={event._id || event.id} className="bg-neutral-900/50 border-white/10 overflow-hidden hover:border-primary/50 transition-colors group">
                                <div className={`h-48 w-full ${event.image || 'bg-neutral-800'} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    {!event.image && (
                                        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-xl font-bold">
                                            {event.title.substring(0, 3).toUpperCase()}
                                        </div>
                                    )}
                                </div>

                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center text-primary text-sm font-medium gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {event.date}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                                    <CardDescription className="flex items-center gap-1 text-gray-400 mt-1">
                                        <MapPin className="w-3 h-3" /> {event.location}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {event.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
