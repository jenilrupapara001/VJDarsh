import { Button } from "@/components/ui/button";

export function About() {
    return (
        <section id="about" className="py-20 bg-black/95 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image / Visual */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                            {/* Placeholder for Artist Image */}
                            <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-700">
                                <span className="text-lg font-mono">[ARTIST IMAGE PLACEHOLDER]</span>
                            </div>
                        </div>
                    </div>

                    {/* text content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            The Man Behind <span className="text-primary">The Visuals</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I don&apos;t just play videos; I create atmospheres. With over 5 years of experience in live visual performance, I treat the screen as an instrument, jamming in real-time to the beat of the music.
                            </p>
                            <p>
                                From underground warehouse raves to massive festival stages, my visual style blends <span className="text-white font-semibold">glitch art</span>, <span className="text-white font-semibold">3D motion graphics</span>, and <span className="text-white font-semibold">generative design</span> to tell a story that transcends the auditory experience.
                            </p>
                        </div>

                        <div className="pt-4 grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-secondary mb-1">50+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Live Events</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-accent mb-1">20+</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest">Artists Collaborated</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Button variant="outline" className="mr-4">Download Media Kit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
