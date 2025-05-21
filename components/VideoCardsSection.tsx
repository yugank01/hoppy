// components/VideoCardsSection.tsx
import Link from 'next/link'
import React from 'react'

const videos = [
    { src: '/videos/video1.MP4', title: 'Video One' },
    { src: '/videos/video2.MP4', title: 'Video Two' },
    { src: '/videos/video3.MP4', title: 'Video Three' },
]

const VideoCardsSection = () => {
    return (
        <section className="w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Hoppy 3D</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video, idx) => (
                        <div
                            key={idx}
                            className="bg-[#63681e] rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105 p-3"
                        >
                            <video
                                className="w-full h-64 object-cover rounded-xl"
                                src={video.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                            {/* <div className="p-4">
                                <h3 className="text-lg font-semibold text-center">{video.title}</h3>
                            </div> */}
                        </div>
                    ))}
                </div>
                <Link href="https://www.instagram.com/hoppyeth/" target='_blank' className='flex justify-center items-center mt-6'>
                    <button className='bg-[#63681e] py-2 px-6 rounded-xl cursor-pointer'>More 3D</button>
                </Link>
            </div>
        </section>
    )
}

export default VideoCardsSection
