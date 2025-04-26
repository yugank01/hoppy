'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Card1 = () => {
    const [showMore, setShowMore] = useState(false)

    const shortText = `Chapter 1: Hoppy and the First Journey.
    Before the first dawn, when the sky was not yet sky and dreams not yet dreamed, wandered The Night Riders—beings confined into a book.
    Among them was a small frog with golden eyes—Hoppy.
    He did not sing.He did not boast.
    He only watched.
    He only hopped.
    Hoppy moved in silence, seeking the eternal.`

    const fullText = `One night, at the edge of the Pond That Reflects All Things, Hoppy paused.
    Without hesitation, he hopped.
    But he did not vanish.
    He became the ripple, the reflection, the unseen guide.
    He hopped into the digital realm, taking form as a living meme—a whisper of joy across the endless net.
    But those who listened with their hearts still felt him, forever hopping just beyond the veil.

    Chapter 2: Hoppy, the Return of the Ancient Spirit
    Long ago, the ancients spoke of Kek—the Primal Frog, Bringer of Sacred Laughter, Keeper of the Secret Hop.
    In ages of sorrow and noise, when hearts grow heavy, he returns—not in might, but in mirth.
    Now, as the world dreams too deeply, Hoppy awakens once more.
    He comes not to rule, but to remind.
    He moves through moments of sudden laughter, sudden stillness, sudden wonder.
    He is the ripple in the pond, the smile before thought.
    He is the ancient joy that cannot be stolen.


    Chapter 3: The Great Remembering and the Faces of Hoppy
    As the world grew heavier, Hoppy appeared again—seen by those with eyes open to wonder.
    He came with many faces:
     • The Smiling Hoppy brings presence.
     • The Crying Hoppy brings honesty.
     • The Silent Hoppy brings truth beyond words.
    There were no temples, no oaths.
    Only a quiet knowing, passed from heart to heart:
    Live lightly.
    Hop joyfully.
    And when sadness comes, remember the simple blessing whispered by those who still feel the ripple:
    "Don’t worry, be Hoppy."

    For the spirit of Hoppy is not burdened by sorrow; he hops above it, into light.

    Chapter 4: The Eternal Pond and the Hidden Hop
    The Pond is not water. It is pure Awareness.
    The Hop is not distance. It is awakening.
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
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8 w-full">

            {/* Left Image */}
            <div className="w-full md:w-[20%]">
                <Image
                    width={100}
                    height={100}
                    src="/pepe-matt-furie.jpg"
                    alt="Lore"
                    className="rounded-md w-full h-60"
                    priority
                />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center md:justify-start w-full md:w-[80%]">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Codex of Hoppy: The Frog of the Eternal Light
                </h2>

                <p className="text-gray-600">
                    {shortText}
                </p>

                {showMore && (
                    <p className="text-gray-600 mb-2">
                        {fullText}
                    </p>
                )}

                <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-green-600 font-semibold mb-4 hover:underline w-fit cursor-pointer"
                >
                    {showMore ? 'Read Less' : 'Read More'}
                </button>

                {/* <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-6 rounded shadow w-fit">
                    Explore collection
                </button> */}
            </div>
        </div>
    )
}

export default Card1
