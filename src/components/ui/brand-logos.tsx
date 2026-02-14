"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

// NOTE: These are simplified SVG reconstructions of the iconic logos 
// for the purpose of the high-fidelity portfolio presentation.

export const ResolumeLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20h60v60H20zM35 35h30v30H35z" fillOpacity="0.8" />
        <rect x="45" y="10" width="10" height="15" />
        <rect x="45" y="75" width="10" height="15" />
        <rect x="10" y="45" width="15" height="10" />
        <rect x="75" y="45" width="15" height="10" />
    </svg>
);

export const TouchDesignerLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="15" />
        <path d="M50 10v25M50 65v25M10 50h25M65 50h25" stroke="currentColor" strokeWidth="8" />
    </svg>
);

export const NotchLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 40" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5h8l12 20V5h8v30h-8L18 15v20h-8zM45 5h20v8h-6v4h6v8h-6v4h6v8h-20zM55 20l5 5h10l-10-10z" />
    </svg>
);

export const UnrealLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 82C29.6 87 13 70.4 13 50S29.6 13 50 13s37 16.6 37 37-16.6 37-37 37z" />
        <path d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 42c-9.4 0-17-7.6-17-17s7.6-17 17-17 17 7.6 17 17-7.6 17-17 17z" />
        <path d="M62 48h-8v-8c0-2.2-1.8-4-4-4s-4 1.8-4 4v8h-8c-2.2 0-4 1.8-4 4s1.8 4 4 4h8v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8h8c2.2 0 4-1.8 4-4s-1.8-4-4-4z" />
    </svg>
);

export const NikeLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 40" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25c15-10 40-15 80-20-30 10-50 25-60 30-5 2-10 2-20-10z" />
    </svg>
);

export const BMWLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" fill="none" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="10" fill="none" />
        <path d="M50 50l-25-25A35 35 0 0 1 50 15z" className="text-primary" />
        <path d="M50 50l25 25A35 35 0 0 1 50 85z" className="text-primary" />
    </svg>
);

export const LollapaloozaLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 200 60" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="45" fontFamily="impact, sans-serif" fontSize="40" letterSpacing="-2">LOLLAPALOOZA</text>
    </svg>
);

export const UltraLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10v80M10 50h80" stroke="currentColor" strokeWidth="15" fill="none" />
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
    </svg>
);

export const BlenderLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10c-15 0-30 10-35 25 10-5 20-5 30 0 5 2 10 10 5 20-10 15-30 10-40 0 0 20 15 40 40 40s45-20 45-45S75 10 50 10z" />
        <circle cx="50" cy="50" r="10" />
    </svg>
);

export const AfterEffectsLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="90" height="90" rx="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <text x="50%" y="65%" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="40">Ae</text>
    </svg>
);

export const Cinema4DLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20l60 30-60 30z" stroke="currentColor" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="10 5" />
    </svg>
);

export const MadMapperLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="25" height="25" />
        <rect x="55" y="20" width="25" height="25" stroke="currentColor" strokeWidth="4" fill="none" />
        <rect x="20" y="55" width="25" height="25" stroke="currentColor" strokeWidth="4" fill="none" />
        <rect x="55" y="55" width="25" height="25" />
    </svg>
);

export const ArtBaselLogo = ({ className }: LogoProps) => (
    <svg viewBox="0 0 200 40" className={cn("fill-current", className)} xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="sans-serif" fontWeight="900" fontSize="30" letterSpacing="-1">Art|Basel</text>
    </svg>
);
