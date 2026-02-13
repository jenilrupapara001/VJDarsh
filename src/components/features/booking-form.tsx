"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"; // Need to create Input
// import { Textarea } from "@/components/ui/textarea"; // Need to create Textarea

// Quick inline Input/Textarea for speed, or I should generate them properly.
// Let's generate them properly in the next step, for now I'll use standard HTML elements styled with Tailwind
// actually, let's stick to the plan and create the UI components first.

export function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4 bg-white/5 rounded-xl border border-white/10 animate-in fade-in zoom-in">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-gray-400">I&apos;ll get back to you within 24 hours.</p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                    Send Another
                </Button>
            </div>
        );
    }

    return (
        <section id="contact" className="py-24 bg-gradient-to-t from-black to-neutral-900 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Ready to <span className="text-primary">Collaborate?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Available for festivals, club nights, and touring.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Your Name / Agency"
                                className="flex h-12 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email</label>
                            <input
                                required
                                type="email"
                                placeholder="contact@example.com"
                                className="flex h-12 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Event Type</label>
                            <select className="flex h-12 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                                <option>Festival</option>
                                <option>Club Event</option>
                                <option>Concert / Tour</option>
                                <option>Corporate</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Date</label>
                            <input
                                type="date"
                                className="flex h-12 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            required
                            placeholder="Tell me about the project, venue, and vibe..."
                            className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                        />
                    </div>

                    <Button disabled={isSubmitting} type="submit" variant="neon" size="lg" className="w-full text-lg h-12">
                        {isSubmitting ? "Sending..." : (
                            <span className="flex items-center gap-2">
                                Send Inquiry <Send className="w-4 h-4" />
                            </span>
                        )}
                    </Button>
                </form>

                <div className="mt-12 text-center text-sm text-gray-500">
                    <p>Prefer WhatsApp? <a href="#" className="text-white hover:underline underline-offset-4">Chat +91 98765 43210</a></p>
                    <p className="mt-1">Email: booking@vjdarsh.com</p>
                </div>
            </div>
        </section>
    );
}
