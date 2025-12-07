import { Globe } from "@/components/ui/globe";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function HeroSection() {
  const words = [
    { text: "Crowning" },
    { text: "Your" },
    { text: "Business" },
    { text: "with" },
    { text: "Quality?" },
  ];
  return (
    <section className="w-full px-10 lg:px-0 lg:w-4/5 grid sm:grid-cols-2 ">
      <div className="flex flex-col justify-center items-center lg:min-h-80 py-10">
        <h1 className="text-6xl font-bold md:text-7xl pb-2 font-sans">
          Taj Alras
        </h1>
        <p className="text-lg md:text-2xl pb-2">Goods Wholesalers L.L.C</p>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="flex flex-col  justify-center items-center ">
        <div className="relative w-70 md:w-100 min-h-70 md:min-h-100 ">
          <Globe />
        </div>
        <p className="text-center text-muted-foreground">
          Connecting You to Trusted Suppliers Across the Globe
        </p>
      </div>
    </section>
  );
}
