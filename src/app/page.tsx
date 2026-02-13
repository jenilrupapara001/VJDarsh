import { Hero } from "@/components/layout/hero";
import { About } from "@/components/layout/about";
import { ReelsFeed } from "@/components/features/reels-feed";
import { Performances } from "@/components/layout/performances";
import { BookingForm } from "@/components/features/booking-form";

import { VisualsGallery } from "@/components/layout/visuals-gallery";
import { MediaKit } from "@/components/layout/media-kit";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <ReelsFeed />
      <VisualsGallery />
      <Performances />
      <MediaKit />
      <BookingForm />
    </div>
  );
}
