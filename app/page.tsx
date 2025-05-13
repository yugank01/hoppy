import CardsSection from "@/components/CardsSection";
import Evolution from "@/components/Evolution";
import Hero from "@/components/Hero";
import VideoCardsSection from "@/components/VideoCardsSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HoppyComics from "@/components/HoppyComics";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-6 pb-16 min-h-screen w-full">

      <Navbar />

      <Hero />

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <div className="w-full flex flex-col gap-6 justify-center items-center">
        <h2 className='text-center text-3xl font-bold'>Meet Hoppy</h2>
        <div className="bg-[#63681e] p-2 rounded-lg">
          <p className="text-center max-w-6xl font-semibold">Hoppy the Frog, affectionately known as “Hoppy,” isn’t just a funny camo frog.  He’s a symbol of joy, luck, and unity. Hopping across the globe, Hoppy now leads the HOPPY Token, a feel-good memecoin movement that brings people together and makes the whole world smile.</p>
        </div>
        <Image width={2000} height={2000} src="/lore.PNG" className="" alt="Meet Hoppy" />
      </div>

      <div className="w-full flex flex-col justify-center items-center bg-[#63681e] rounded-xl overflow-hidden shadow-xl p-3">
        <Image width={2000} height={2000} src="/testo.png" className="rounded-xl" alt="Meet Hoppy" />
      </div>

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <VideoCardsSection />
      </div>

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <HoppyComics />
      </div>

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <div className="w-[90%] p-5 bg-[#63681e] rounded-2xl gap-8 flex flex-col items-center">
        <h2 className='text-3xl font-bold'>Music</h2>
        <video
          className="w-full object-cover rounded-xl"
          src="/music.MP4"
          autoPlay
          // loop
          // muted
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}