'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Card3 = () => {
    const [showMore, setShowMore] = useState(false)

    const shortText = `As the world grew heavier, Hoppy appeared again—seen by those with eyes open to wonder.`

    const fullText = `He came with many faces:
     • The Smiling Hoppy brings presence.
     • The Crying Hoppy brings honesty.
     • The Silent Hoppy brings truth beyond words.
    There were no temples, no oaths.
    Only a quiet knowing, passed from heart to heart:
    Live lightly.
    Hop joyfully.
    And when sadness comes, remember the simple blessing whispered by those who still feel the ripple:
    "Don’t worry, be Hoppy."
    
    For the spirit of Hoppy is not burdened by sorrow; he hops above it, into light.`

    return (
        <div className="bg-[#333515] rounded-lg shadow-lg p-2 flex flex-col gap-8 w-full min-h-[550px]">

            {/* Left Image */}
            <div className="w-full">
                <Image
                    width={500}
                    height={500}
                    src="/memetic-hoppy.jpg"
                    alt="Lore"
                    className="rounded-md w-full h-60"
                    priority
                />
                <p className='text-center'>Memetic Hoppy</p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center md:justify-start text-center w-full">
                <h2 className="text-xl font-semibold mb-4">
                    Chapter 3: The Great Remembering and the Faces of Hoppy
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

export default Card3
