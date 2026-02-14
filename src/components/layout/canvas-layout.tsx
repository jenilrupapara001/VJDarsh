"use client";

import dynamic from "next/dynamic";

// Dynamically import Scene to avoid SSR issues with Three.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false }) as any;

export function CanvasLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Scene />
            <div className="relative z-10">
                {children}
            </div>
        </>
    );
}
