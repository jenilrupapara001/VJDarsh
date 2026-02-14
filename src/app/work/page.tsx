"use client";

import { motion } from "framer-motion";
import { WorkHeader } from "@/components/layout/work-header";
import { VisualsGallery } from "@/components/layout/visuals-gallery";

export default function WorkPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pb-24"
        >
            <WorkHeader />
            <div className="mt-[-80px] relative z-10">
                <VisualsGallery />
            </div>
        </motion.div>
    );
}
