import CardsSection from "@/components/CardsSection";
import Evolution from "@/components/Evolution";
import Hero from "@/components/Hero";
import VideoCardsSection from "@/components/VideoCardsSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HoppyComics from "@/components/HoppyComics";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-6 pb-16 min-h-screen w-full">

      <Navbar />

      <Hero />

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <section id="hoppy" className="w-full flex flex-col gap-6 justify-center items-center">
        <h2 className='text-center text-3xl font-bold'>Hoppy</h2>
        <div className="bg-[#63681e] p-2 rounded-lg">
          <p className="text-center max-w-6xl font-semibold">Hoppy the Frog, affectionately known as “Hoppy,” isn’t just a funny camo frog.  He’s a symbol of joy, luck, and unity. Hopping across the globe, Hoppy now leads the HOPPY Token, a feel-good memecoin movement that brings people together and makes the whole world smile.</p>
        </div>
        <Image width={2000} height={2000} src="/lore.PNG" className="" alt="Meet Hoppy" />
      </section>

      <section id="lore" className="w-full flex flex-col justify-center items-center bg-[#63681e] rounded-xl overflow-hidden shadow-xl p-3">
        <Image width={2000} height={2000} src="/testo.png" className="rounded-xl" alt="Meet Hoppy" />
      </section>

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <section id="3D" className="w-full flex flex-col justify-center items-center gap-4">
        <VideoCardsSection />
      </section>

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <section id="hoppycomics" className="w-full flex flex-col justify-center items-center gap-4">
        <HoppyComics />
      </section>

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <section id="music" className="w-[65%] p-5 bg-[#63681e] rounded-2xl gap-8 flex flex-col items-center">
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
      </section>

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <section id="bookofhoppy" className="w-full flex flex-col gap-6 justify-center items-center">
        <h2 className='text-center text-3xl font-bold'>Book of Hoppy</h2>
        <Image width={350} height={2000} src="/book-of-hoppy.PNG" className="" alt="Meet Hoppy" />
        <Link href="#" className="bg-[#63681e] py-2 px-6 rounded-lg flex justify-center items-center gap-2">
        <Image width={30} height={30} src="/amazon.png" alt="buy"/>
          <button className="bg-[#63681e] cursor-pointer text-xl font-semibold">Pre-order</button>
        </Link>
      </section>

      <div className="w-[95%] h-[2px] bg-[#333515] my-10 md:my-24"></div>

      <section id="hoppybot" className="w-full flex flex-col gap-6 justify-center items-center">
        <h2 className='text-center text-3xl font-bold'>Hoppy Bot</h2>
        <div className="bg-[#63681e] p-2 rounded-lg w-[90%]">
          <p className="font-semibold">Hoppy Bot is a Telegram-based reward automation bot designed for decentralized exchange (DEX) trading competitions. It allows project teams to effortlessly launch trade-and-hold competitions by setting key parameters: number of winners, reward token (ETH or any ERC-20), total reward amount, minimum buy requirement, and the duration of the trading period.</p>
          <br />
          <p className="font-semibold">Once configured, the bot automatically tracks eligible participants—those who meet the minimum purchase and continue to hold through the competition period and randomly selects winners. Rewards are then distributed automatically by the bot, ensuring a fair and efficient process without manual intervention.</p>
          <p className="font-semibold">In addition, Hoppy Bot features a dedicated Reward Channel, showcasing active competitions from other projects—offering users a chance to discover new tokens and win rewards by simply trading and holding.</p>
        </div>
        <Image width={400} height={2000} src="/hoppy-bot.PNG" className="" alt="Meet Hoppy" />
      </section>
    </div>
  );
}