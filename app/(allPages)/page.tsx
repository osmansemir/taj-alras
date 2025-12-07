import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import Story from "@/components/story-section";
import { Globe } from "@/components/ui/globe";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Home() {
  const words = [
    { text: "Crowning" },
    { text: "Your" },
    { text: "Business" },
    { text: "with" },
    { text: "Quality?" },
  ];
  return (
    <main
      role="main"
      className="flex flex-col items-center justify-start pt-10 gap-4 flex-1"
    >
      <HeroSection />
      <Story />
      <ContactSection />
    </main>
  );
}
