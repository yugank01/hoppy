import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const comics = [
    { src: '/HoppyComics/hc-1.png', title: 'Comic One' },
    { src: '/HoppyComics/hc-2.png', title: 'Comic Two' },
    { src: '/HoppyComics/hc-3.png', title: 'Comic Three' },
    { src: '/HoppyComics/hc-4.png', title: 'Comic Four' },
    { src: '/HoppyComics/hc-5.png', title: 'Comic Five' },
    { src: '/HoppyComics/hc-6.png', title: 'Comic Six' },
    { src: '/HoppyComics/hc-7.png', title: 'Comic Seven' },
    { src: '/HoppyComics/hc-8.png', title: 'Comic Eight' },
    { src: '/HoppyComics/hc-9.png', title: 'Comic Nine' },
    { src: '/HoppyComics/hc-10.png', title: 'Comic Ten' },
    // { src: '/HoppyComics/hc-11.png', title: 'Comic Eleven' },
    // { src: '/HoppyComics/hc-12.png', title: 'Comic Twelve' },
    // { src: '/HoppyComics/hc-13.png', title: 'Comic Thirteen' },
    // { src: '/HoppyComics/hc-14.png', title: 'Comic Fourteen' },
    // { src: '/HoppyComics/hc-15.png', title: 'Comic Fifteen' },
    // { src: '/HoppyComics/hc-16.png', title: 'Comic Sixteen' },
    // { src: '/HoppyComics/hc-17.png', title: 'Comic Seventeen' },
    // { src: '/HoppyComics/hc-18.png', title: 'Comic Eighteen' },
    // { src: '/HoppyComics/hc-19.png', title: 'Comic Nineteen' },
    // { src: '/HoppyComics/hc-20.png', title: 'Comic Twenty' },
]

const HoppyComics = () => {
    return (
        <section className="w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Hoppy Comics</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {comics.map((comic, idx) => (
                        <div
                            key={idx}
                            className="bg-[#63681e] rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105 p-3"
                        >
                            <Image
                                width={200}
                                height={200}
                                className="w-full object-cover rounded-xl"
                                src={comic.src}
                                alt={comic.title}
                            />
                            {/* <div className="p-4">
                                <h3 className="text-lg font-semibold text-center">{video.title}</h3>
                            </div> */}
                        </div>
                    ))}
                </div>
                <Link href="https://www.instagram.com/hoppyeth/" target='_blank' className='flex justify-center items-center mt-6'>
                    <button className='bg-[#63681e] py-2 px-6 rounded-xl cursor-pointer'>More Comics</button>
                </Link>
            </div>
        </section>
    )
}

export default HoppyComics
