import React from 'react'

const page = () => {
    return (
        <div>
            <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#63681e] to-[#333515] text-white">
                <div className="text-center px-6 max-w-xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-400 to-[#f5f5f7] animate-pulse">
                        Coming Soon
                    </h1>
                    {/* <p className="text-xl md:text-2xl text-white/70 font-medium">
                        Get ready for the wildest experience on the web.
                        <br /> We're cooking up something extraordinary. Stay tuned!
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default page
