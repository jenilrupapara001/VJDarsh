"use client";

import { motion } from "framer-motion";
import { VisualsGallery } from "@/components/layout/visuals-gallery";

export default function WorkPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-12"
        >
            <VisualsGallery />
        </motion.div>
    );
}
