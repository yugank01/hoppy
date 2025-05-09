// components/LoopingVideo.tsx
import React from 'react'

const LoopingVideo = () => {
    return (
        <div className="w-[80%] h-[80vh] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/three-d.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default LoopingVideo
