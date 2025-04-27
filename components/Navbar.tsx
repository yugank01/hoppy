"use client"
import React, { useState } from 'react'
import { Menu, X, Search, BookOpen, Trophy } from 'lucide-react' // optional icons if using lucide-react
import Image from 'next/image'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='w-full px-6 py-4'>
            <div className='flex justify-between items-center w-full'>
                <div className='text-4xl font-bold flex items-baseline'>
                    <Image width={60} height={60} src="/hoppy-logo1.svg" alt='hoppy' />
                    <p>.art</p>
                </div>

                <div className='md:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <ul className='hidden md:flex justify-center items-center gap-8 text-sm tracking-wide'>
                    <li>Lore</li>
                    <li>Hoppy's World</li>
                    <li>Evolution of Hoppy & Pepe</li>
                    <li className='relative group cursor-pointer'>
                        Tools
                        <ul className='absolute left-0 top-full bg-white text-black rounded-md shadow-lg z-10 min-w-[150px] hidden group-hover:flex flex-col'>
                            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Meme Gallery</li>
                            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Meme Generator</li>
                            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Media Kit</li>
                        </ul>
                    </li>
                    <li>Hoppy Comics</li>
                    <li>NFTs</li>
                </ul>

                <div className='hidden md:flex items-center gap-8 text-sm tracking-wide'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <p>Wiki</p>
                        <BookOpen />
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className='md:hidden mt-4 flex flex-col gap-4 text-sm tracking-wide'>
                    <div className='flex flex-col gap-2'>
                        <span>Lore</span>
                        <span>Hoppy's World</span>
                        <span>Evolution of Hoppy & Pepe</span>

                        <div className='relative'>
                            <details className='group'>
                                <summary className='cursor-pointer'>Tools</summary>
                                <ul className='flex flex-col pl-4 pt-2'>
                                    <li className='py-1'>Meme Gallery</li>
                                    <li className='py-1'>Meme Generator</li>
                                    <li className='py-1'>Media Kit</li>
                                </ul>
                            </details>
                        </div>

                        <span>Hoppy Comics</span>
                        <span>NFTs</span>
                    </div>

                    <div className='flex flex-col gap-2 pt-4 border-t border-gray-200'>
                        <span>Wiki</span>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
