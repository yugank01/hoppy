import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="flex items-center justify-center w-full">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-[90%]">
                <div className="md:mt-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Discover the universe of Hoppy
                    </h1>
                    <p className="text-lg text-gray-100 mb-8">
                        The complete archive
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="#hoppycomics">
                            <button className="bg-[#333515] hover:bg-lime-800 text-white font-semibold py-2 px-6 rounded shadow cursor-pointer">
                                Explore Hoppy Comics
                            </button>
                        </Link>
                        <Link href="/nfts">
                            <button className="border border-white text-white hover:bg-white hover:text-[#333515] font-semibold py-2 px-6 rounded shadow transition cursor-pointer">
                                Check out NFTs
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full md:max-w-[35%]">
                    <Image
                        width={500}
                        height={500}
                        src="/hero1.jpg"
                        alt="Hoppy Card"
                        className="rounded-lg shadow-xl md:h-fit"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
