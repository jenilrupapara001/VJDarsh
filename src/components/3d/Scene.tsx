"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Preload } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import * as THREE from "three";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeroExperience = dynamic(() => import("@/components/3d/HeroExperience"), { ssr: false }) as any;

function CameraController() {
    const pathname = usePathname();
    const vec = useRef(new THREE.Vector3());

    useFrame((state) => {
        // Simple camera move based on route
        let targetPos = [0, 0, 5];
        if (pathname === '/about') targetPos = [2, 0, 4];
        else if (pathname === '/work') targetPos = [-2, 1, 4];
        else if (pathname === '/performances') targetPos = [0, -1, 6];
        else if (pathname === '/contact') targetPos = [0, 2, 5];

        state.camera.position.lerp(vec.current.set(targetPos[0], targetPos[1], targetPos[2]), 0.05);
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

export default function Scene() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                gl={{ antialias: false, alpha: true }}
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 5], fov: 45 }}
            >
                <Suspense fallback={null}>
                    <CameraController />

                    {/* Ambient Light */}
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    {/* Hero Experience - Only on Home or persistent? Let's make it persistent but scale down on other pages */}
                    <group scale={isHome ? 1 : 0.5} position-z={isHome ? 0 : -2}>
                        <HeroExperience />
                    </group>

                    {/* Post Processing */}
                    <EffectComposer>
                        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={0.5} />
                        <Noise opacity={0.05} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer>

                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
