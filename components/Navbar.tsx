"use client"
import React, { useState } from 'react'
import { Menu, X, Search, BookOpen, Trophy } from 'lucide-react' // optional icons if using lucide-react
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='w-full px-6 py-4'>
            <div className='flex justify-between items-center w-full'>
                <div className='text-4xl font-bold flex items-baseline'>
                    <Image width={70} height={70} src="/Wings.gif" alt='hoppy' />
                    <p>.art</p>
                </div>

                <div className='md:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className='hidden md:flex justify-center items-center gap-8 text-sm tracking-wide'>
                    <button className='cursor-pointer'>Lore</button>
                    <button className='cursor-pointer'>Hoppy's World</button>
                    <Link href="/codex-of-hoppy">
                        <button className='cursor-pointer'>Evolution of the Frogs</button>
                    </Link>
                    <div className='relative group cursor-pointer'>
                        Tools
                        <div className='absolute left-0 top-full bg-white text-black rounded-md shadow-lg z-10 min-w-[150px] hidden group-hover:flex flex-col'>
                            <button className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Meme Gallery</button>
                            <button className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Meme Generator</button>
                            <button className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Media Kit</button>
                        </div>
                    </div>
                    <button className='cursor-pointer'>Hoppy Comics</button>
                    <button className='cursor-pointer'>NFTs</button>
                </div>

                <div className='hidden md:flex items-center gap-8 text-sm tracking-wide'>
                    <Link href="/wiki" target='_blank' className='cursor-pointer'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <span>Wiki</span>
                            <BookOpen />
                        </div>
                    </Link>
                </div>
            </div>

            {menuOpen && (
                <div className='md:hidden mt-4 flex flex-col gap-4 text-sm tracking-wide'>
                    <div className='flex flex-col gap-2'>
                        <span>Lore</span>
                        <span>Hoppy's World</span>
                        <Link href="/codex-of-hoppy">
                            <button className='cursor-pointer'>Evolution of the Frogs</button>
                        </Link>

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
                        <Link href="/wiki" target='_blank'>Wiki</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
