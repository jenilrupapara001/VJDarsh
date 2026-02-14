"use client";

import { motion } from "framer-motion";
import { Performances } from "@/components/layout/performances";

export default function PerformancesPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-12"
        >
            <Performances />
        </motion.div>
    );
}
