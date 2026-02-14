"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Zap, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "Work", href: "/work", icon: Briefcase },
        { name: "Performances", href: "/performances", icon: Zap },
        { name: "About", href: "/about", icon: User },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    return (
        <>
            {/* Desktop Floating Dock (Top) */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="glass-panel px-6 py-3 rounded-full flex items-center gap-2"
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const Icon = link.icon;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                                    isActive ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)]" : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <Icon className="w-4 h-4" />
                                <span>{link.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 rounded-full bg-white/20 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.3)] -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </motion.div>
            </nav>

            {/* Mobile Bottom Tab Bar (iOS Style) */}
            <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
                <div className="glass-panel border-t border-white/10 flex justify-around items-center h-20 px-2 pb-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const Icon = link.icon;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex flex-col items-center justify-center w-full h-full gap-1 active:scale-90 transition-transform duration-200"
                            >
                                <div className={cn(
                                    "p-1.5 rounded-xl transition-colors duration-300",
                                    isActive ? "bg-white/10 text-primary" : "text-gray-400"
                                )}>
                                    <Icon className={cn("w-6 h-6", isActive && "fill-current")} />
                                </div>
                                <span className={cn(
                                    "text-[10px] font-medium tracking-wide",
                                    isActive ? "text-white" : "text-gray-500"
                                )}>
                                    {link.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
