"use client";

import { motion } from "framer-motion";
import { About } from "@/components/layout/about";

export default function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-12"
        >
            <About />
        </motion.div>
    );
}
