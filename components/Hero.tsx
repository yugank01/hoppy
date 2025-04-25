import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="flex items-center justify-center w-full">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-[90%]">
                <div className="">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Discover the universe of Hoppy Memes
                    </h1>
                    <p className="text-lg text-gray-100 mb-8">
                        The biggest and best meme explorer
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#333515] hover:bg-lime-800 text-white font-semibold py-2 px-6 rounded shadow">
                            Explore Meme Gallery
                        </button>
                        <button className="border border-white text-white hover:bg-white hover:text-[#333515] font-semibold py-2 px-6 rounded shadow transition">
                            Check out live drops
                        </button>
                    </div>
                </div>

                <div className="w-full md:max-w-[35%]">
                    <Image
                        width={400}
                        height={600}
                        src="/hoppy-logo1.svg"
                        alt="Hoppy Card"
                        className="rounded-lg shadow-xl"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
