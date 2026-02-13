import { Download, FileText, Image as ImageIcon, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
                <div className="bg-gradient-to-r from-neutral-900 to-black rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
                        <div className="max-w-xl space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-white">
                                Download <span className="text-secondary">Media Assets</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Everything you need for event promotion, stage planning, and press features. high-resolution assets ready for print and digital.
                            </p>
                            <Button variant="neon" size="lg" className="gap-2 mt-4">
                                Download All Assets (ZIP) <Download className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="w-full md:w-auto flex-1 grid grid-cols-1 gap-4">
                            {ASSETS.map((asset) => (
                                <Card key={asset.title} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center p-4 gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-black flex items-center justify-center text-primary border border-white/10">
                                            <asset.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold">{asset.title}</h4>
                                            <p className="text-xs text-gray-500">{asset.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs text-gray-600 block mb-1">{asset.size}</span>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                                                <Download className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
