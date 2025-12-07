import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import Story from "@/components/story-section";

export default function Home() {
  return (
    <main
      role="main"
      className="flex flex-col items-center justify-start pt-10 gap-4 flex-1"
    >
      <HeroSection />
      <Story />
      <ContactSection />
      <p className="text-center text-muted-foreground px-5 py-10">
        Trusted partners. Global reach. Reliable supply.
      </p>
    </main>
  );
}
