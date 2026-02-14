"use client";

import { useState } from "react";
import { CheckCircle, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const data = Object.fromEntries(formData.entries() as any);
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (res.ok) setIsSuccess(true);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="glass-panel p-12 rounded-3xl text-center max-w-md mx-auto animate-in fade-in zoom-in">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-8">I&apos;ll get back to you shortly.</p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="w-full glass-button">
                    Send Another
                </Button>
            </div>
        );
    }

    return (
        <section id="contact" className="py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left: Contact Info (iOS Settings style) */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
                                Let&apos;s <span className="text-primary">Connect</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-md">
                                Ready to bring your vision to life? Fill out the form or reach out directly.
                            </p>
                        </div>

                        <div className="glass-panel rounded-2xl overflow-hidden divide-y divide-white/10">
                            {[
                                { icon: Mail, label: "Email", value: "booking@vjdarsh.com" },
                                { icon: Phone, label: "WhatsApp", value: "+91 98765 43210" },
                                { icon: MapPin, label: "Based in", value: "Mumbai, India" },
                                { icon: MessageSquare, label: "Socials", value: "@vjdarsh" }
                            ].map((item) => (
                                <div key={item.label} className="flex items-center p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4">
                                        <item.icon className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-white font-medium flex-grow">{item.label}</span>
                                    <span className="text-gray-400 group-hover:text-white transition-colors">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form (Glass Panel) */}
                    <div className="glass-panel p-8 md:p-10 rounded-3xl relative">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">NAME</label>
                                    <input name="name" required className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">EMAIL</label>
                                    <input name="email" required type="email" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">TYPE</label>
                                    <select name="eventType" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                                        <option>Festival</option>
                                        <option>Club Event</option>
                                        <option>Tour</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">DATE</label>
                                    <input name="date" type="date" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">VISION</label>
                                <textarea name="message" required className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all min-h-[150px]" placeholder="Tell me about the vibe..." />
                            </div>

                            <Button disabled={isSubmitting} type="submit" variant="neon" size="lg" className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/20">
                                {isSubmitting ? "Sending..." : "Send Request"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
