'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Card1 = () => {
    const [showMore, setShowMore] = useState(false)

    const shortText = `Before the first dawn, when the sky was not yet sky and dreams not yet dreamed, wandered The Night Riders—beings confined into a book.`

    const fullText = `Among them was a small frog with golden eyes—Hoppy.
    He did not sing.He did not boast.
    He only watched.
    He only hopped.
    Hoppy moved in silence, seeking the eternal.
    One night, at the edge of the Pond That Reflects All Things, Hoppy paused.
    Without hesitation, he hopped.
    But he did not vanish.
    He became the ripple, the reflection, the unseen guide.
    He hopped into the digital realm, taking form as a living meme—a whisper of joy across the endless net.
    But those who listened with their hearts still felt him, forever hopping just beyond the veil.`

    return (
        <div className="bg-[#333515] rounded-lg shadow-lg p-2 flex flex-col gap-8 w-full min-h-[550px]">

            {/* Left Image */}
            <div className="w-full">
                <Image
                    width={500}
                    height={500}
                    src="/pepe-matt-furie.jpg"
                    alt="Lore"
                    className="rounded-md w-full h-60"
                    priority
                />
                <p className='text-center'>Pepe from Matt Furie</p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center md:justify-start text-center w-full">
                <h2 className="text-xl font-semibold mb-4">
                    Chapter 1: Hoppy and the First Journey.
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

export default Card1
