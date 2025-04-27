import CardsSection from "@/components/CardsSection";
import Evolution from "@/components/Evolution";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start p-6 min-h-screen w-full gap-10">
      <Navbar />
      <Hero />
      <div className="w-full h-[2px] bg-[#333515] my-10 md:my-16"></div>
      <div className="w-full flex justify-center items-center">
        <Image width={1000} height={1000} src="/codex-of-hoppy.jpg" alt="codex banner" />
      </div>
      <div className="w-full h-[2px] bg-[#333515] my-10 md:my-16"></div>
      <CardsSection />
      <div className="w-full h-[2px] bg-[#333515] my-10 md:my-16"></div>
      <Evolution />
    </div>
  );
}