"use client"
import React, { useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react' // Optional icons from lucide-react

export default function MusicSection() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <section
            id="music"
            className="w-[90%] sm:w-[65%] p-5 bg-[#63681e] rounded-2xl gap-8 flex flex-col items-center relative"
        >
            <h2 className="text-3xl font-bold text-white mb-2">Music</h2>

            <div className="relative w-full">
                <video
                    className="w-full object-cover rounded-xl"
                    ref={videoRef}
                    src="/music.MP4"
                    autoPlay
                    loop
                    // muted
                    playsInline
                    preload="auto"
                />

                {/* Play/Pause Button */}
                <button
                    onClick={togglePlayPause}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition"
                >
                    {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>
            </div>
        </section>
    )
}
