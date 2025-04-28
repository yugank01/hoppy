import React from 'react'
import Card1 from './cards/Card1'
import Card2 from './cards/Card2'
import Card3 from './cards/Card3'
import Card4 from './cards/Card4'
import Link from 'next/link'

const CardsSection = () => {
    return (
        <div className='flex flex-col gap-10 justify-center items-center w-full'>
            <h2 className='text-center text-2xl max-w-[50rem] font-bold'>The Meme Codex : Evokes an ancient manuscript that records magic frog memetic entities and their stories. "From the earliest sketches in The Boys Club to the rise of Hoppy, the Meme Codex tells the forgotten lore of digital legends."</h2>
            <div className='flex flex-col md:flex-row items-start justify-center gap-8 w-[85%]'>
                {/* <Card1 />
                <Card2 />
                <Card3 />
                <Card4 /> */}
                <Link href="/newpage">
                    <button className="bg-[#333515] hover:bg-lime-800 text-white text-xl font-semibold py-2 px-6 rounded shadow transition cursor-pointer">Codex of Hoppy: The Frog of the Eternal Light</button>
                </Link>
            </div>
        </div>
    )
}

export default CardsSection
