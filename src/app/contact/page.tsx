"use client";

import { motion } from "framer-motion";
import { BookingForm } from "@/components/features/booking-form";
import { MediaKit } from "@/components/layout/media-kit";

export default function ContactPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-12 space-y-20"
        >
            <section className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                    Get In <span className="text-primary">Touch</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                    Ready to elevate your event? Let&apos;s discuss visuals, stage design, and immersive experiences.
                </p>
            </section>

            <BookingForm />
            <MediaKit />
        </motion.div>
    );
}
