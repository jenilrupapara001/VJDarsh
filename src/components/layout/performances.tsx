import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PAST_EVENTS = [
    {
        id: 1,
        title: "Sunburn Festival 2024",
        date: "Dec 28-30, 2024",
        location: "Goa, India",
        description: "Main Stage Visuals for 3 consecutive nights.",
        image: "bg-gradient-to-br from-purple-900 to-indigo-900" // Placeholder class
    },
    {
        id: 2,
        title: "Neon Jungle Rave",
        date: "Nov 15, 2024",
        location: "Mumbai, India",
        description: "Live VJ set for underground techno collective.",
        image: "bg-gradient-to-br from-pink-900 to-red-900"
    },
    {
        id: 3,
        title: "Corporate Tech Summit",
        date: "Oct 10, 2024",
        location: "Bangalore, India",
        description: "Projection mapping and LED visuals for keynote.",
        image: "bg-gradient-to-br from-blue-900 to-cyan-900"
    }
];

export function Performances() {
    return (
        <section id="performances" className="py-24 bg-black relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Recent <span className="text-secondary">Performances</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            A curated list of events where I've brought the visuals to life.
                        </p>
                    </div>
                    <Button variant="link" className="text-white">View All Archive &rarr;</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PAST_EVENTS.map((event) => (
                        <Card key={event.id} className="border-white/5 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden group">
                            <div className={`h-48 w-full ${event.image} relative`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                                {/* Image placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-3xl font-bold">
                                    EVENT #{event.id}
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">{event.title}</CardTitle>
                                <CardDescription className="flex items-center gap-2 text-gray-400 mt-2">
                                    <Calendar className="w-4 h-4" /> {event.date}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                                <div className="flex items-center gap-2 text-xs text-secondary">
                                    <MapPin className="w-3 h-3" /> {event.location}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
