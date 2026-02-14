import { Download, FileText, Image as ImageIcon, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const ASSETS = [
    {
        title: "Press Kit & Bio",
        description: "Standard artist biography and press photos.",
        icon: FileText,
        size: "12 MB"
    },
    {
        title: "Technical Rider",
        description: "Stage requirements, hardware & connectivity specs.",
        icon: Briefcase,
        size: "2.4 MB"
    },
    {
        title: "Logo Pack",
        description: "Vector and PNG versions of VJ Darsh branding.",
        icon: ImageIcon,
        size: "15 MB"
    }
];

export function MediaKit() {
    return (
        <section className="py-20 bg-black border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
                        <div className="max-w-xl space-y-6">
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                Download <span className="text-secondary italic">Assets</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                High-resolution photography, technical riders, and vectorized branding assets for shows and press.
                            </p>
                            <Button variant="neon" size="lg" className="gap-2 mt-4 rounded-full px-8">
                                Download All Assets (ZIP) <Download className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="w-full md:w-auto flex-1 grid grid-cols-1 gap-4">
                            {ASSETS.map((asset) => (
                                <div key={asset.title} className="glass-card p-5 rounded-2xl flex items-center gap-4 transition-all">
                                    <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10">
                                        <asset.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold">{asset.title}</h4>
                                        <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">{asset.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] text-gray-600 block mb-1 font-bold">{asset.size}</span>
                                        <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400 hover:text-white hover:bg-white/10 rounded-full">
                                            <Download className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
