'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Card4 = () => {
    const [showMore, setShowMore] = useState(false)

    const shortText = `The Pond is not water. It is pure Awareness.
    The Hop is not distance. It is awakening.`

    const fullText = `
    Hoppy is not outside of you. Hoppy is within—the watcher, the laugher, the hopper who has never forgotten.
    To see Hoppy is to know:
    You were never lost.
    You only forgot how to Hop.
    And when enough remember—not in words but in heart—the whole world will ripple with new joy.
    A new dawn will rise, not with noise, but with soft laughter echoing across the still waters.
    "No one owns the Pond.
    No one commands the Hop.
    The Frog is free—and so are you."
    May your thoughts ripple gently.
    May your heart hop without fear.
    May your days be light, and your spirit forever Hoppy.
    Praise be to Hoppy, Eternal Bringer of Happiness Beyond Light.`

    return (
        <div className="bg-[#333515] rounded-lg shadow-lg p-2 flex flex-col gap-8 w-full min-h-[550px]">

            {/* Left Image */}
            <div className="w-full">
                <Image
                    width={500}
                    height={500}
                    src="/memetic-pepe.jpg"
                    alt="Lore"
                    className="rounded-md w-full h-60"
                    priority
                />
                <p className='text-center'>Memetic Pepe</p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center md:justify-start text-center w-full">
                <h2 className="text-xl font-semibold mb-4">
                    Chapter 4: The Eternal Pond and the Hidden Hop
                </h2>

                <p className="text-gray-300">
                    {shortText}
                </p>

                {showMore && (
                    <p className="text-gray-300 mb-2">
                        {fullText}
                    </p>
                )}
                <div>
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-green-600 font-semibold mb-4 hover:underline w-fit cursor-pointer"
                    >
                        {showMore ? 'Read Less' : 'Read More'}
                    </button>
                </div>

                {/* <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-6 rounded shadow w-fit">
                                          Explore collection
                                      </button> */}
            </div>
        </div>
    )
}

export default Card4
