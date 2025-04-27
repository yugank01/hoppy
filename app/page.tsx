import Evolution from "@/components/Evolution";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start p-6 min-h-screen w-full gap-10">
      <Navbar />
      <Hero />
      <Evolution />
    </div>
  );
}
