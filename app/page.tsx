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
      <div className="w-full flex flex-col gap-6 justify-center items-center">
        <h2 className='text-center text-2xl font-bold'>Meet Hoppy</h2>
        <p className="text-center max-w-5xl">Hoppy the Frog, affectionately known as “Hoppy,” isn’t just a funny camo frog.  He’s a symbol of joy, luck, and unity. Hopping across the globe, Hoppy now leads the HOPPY Token, a feel-good memecoin movement that brings people together and makes the whole world smile.</p>
        <Image width={1200} height={1000} src="/meet-hoppy.jpg" alt="Meet Hoppy" />
      </div>
      {/* <CardsSection /> */}
      {/* <div className="w-full h-[2px] bg-[#333515] my-10 md:my-16"></div> */}
      {/* <Evolution /> */}
    </div>
  );
}