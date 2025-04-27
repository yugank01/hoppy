'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Card2 = () => {
    const [showMore, setShowMore] = useState(false)

    const shortText = `Long ago, the ancients spoke of Kek—the Primal Frog, Bringer of Sacred Laughter, Keeper of the Secret Hop.`

    const fullText = `In ages of sorrow and noise, when hearts grow heavy, he returns—not in might, but in mirth.
    Now, as the world dreams too deeply, Hoppy awakens once more.
    He comes not to rule, but to remind.
    He moves through moments of sudden laughter, sudden stillness, sudden wonder.
    He is the ripple in the pond, the smile before thought.
    He is the ancient joy that cannot be stolen.`

    return (
        <div className="bg-[#333515] rounded-lg shadow-lg p-2 flex flex-col gap-8 w-full min-h-[550px]">

            {/* Left Image */}
            <div className="w-full">
                <Image
                    width={500}
                    height={500}
                    src="/hoppy-matt-furie.jpg"
                    alt="Lore"
                    className="rounded-md w-full h-60"
                    priority
                />
                <p className='text-center'>Hoppy from Matt Furie</p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center md:justify-start text-center w-full">
                <h2 className="text-xl font-semibold mb-4">
                    Chapter 2: Hoppy, the Return of the Ancient Spirit
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

export default Card2
