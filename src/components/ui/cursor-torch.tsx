"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

export function CursorTorch() {
    // Smooth spring animation for the cursor movement
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [mouseX, mouseY]);

    const background = useMotionTemplate`radial-gradient(
        600px circle at ${mouseX}px ${mouseY}px,
        rgba(112, 0, 255, 0.15),
        transparent 80%
    )`;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background,
            }}
        />
    );
}
