"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Float } from "@react-three/drei";

export default function HeroExperience() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    });

    // Use lazy state initialization to generate particles once
    const [particles] = useState(() => {
        return Array.from({ length: 50 }).map(() => ({
            position: [
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            ] as [number, number, number]
        }));
    });

    return (
        <group>
            {/* Main Abstract Shape - Liquid Glass */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.8, 1.8, 1.8]}>
                    <icosahedronGeometry args={[1, 4]} />
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <meshPhysicalMaterial
                        roughness={0.1}
                        metalness={0.1}
                        transmission={0.9}
                        thickness={1.5}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        color="#ffffff"
                        emissive="#7000ff"
                        emissiveIntensity={0.2}
                        ior={1.5}
                    />
                </mesh>
            </Float>

            {/* Floating Particles/Stars */}
            {particles.map((particle, i) => (
                <mesh
                    key={i}
                    position={particle.position}
                >
                    <sphereGeometry args={[0.02, 8, 8]} />
                    <meshBasicMaterial color="#00f0ff" />
                </mesh>
            ))}
        </group>
    );
}
