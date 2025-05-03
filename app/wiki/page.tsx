import Link from 'next/link';
import React from 'react';

export default function HoppyWikiPage() {
    return (
        <div className='flex justify-center'>
            <div className="w-[80%] my-8 p-10 bg-[#63681e] rounded-2xl">
                {/* Top Info Table */}
                <div className="border border-gray-300 mb-6">
                    <div className="border-b border-gray-300 p-4 bg-blue-300 font-bold text-center">
                        Hoppy the Frog
                    </div>
                    <div className="p-4 text-center font-bold bg-blue-300">
                        Publication information
                    </div>
                    <div className="flex border-t border-gray-300">
                        <div className="w-1/2 border-r border-gray-300 p-2">
                            <Link href="https://en.wikipedia.org/wiki/First_appearance" target='_blank'> <strong className='text-blue-300'>First comic appearance</strong></Link>
                        </div>
                        <div className="w-1/2 p-2">
                            <em>The Nights Riders</em> (2012)
                        </div>
                    </div>
                    <div className="flex border-t border-gray-300">
                        <div className="w-1/2 border-r border-gray-300 p-2">
                            <strong>Created by</strong>
                        </div>
                        <div className="w-1/2 p-2">
                            <Link href="https://en.wikipedia.org/wiki/Matt_Furie" target='_blank' className='text-blue-300'>Matt Furie</Link>
                        </div>
                    </div>
                    <div className="p-4 text-center font-bold bg-blue-300 border-t border-gray-300">
                        Publication information
                    </div>
                    <div className="flex border-t border-gray-300">
                        <div className="w-1/2 border-r border-gray-300 p-2">
                            <strong>Species</strong>
                        </div>
                        <div className="w-1/2 p-2">
                            <Link href="https://en.wikipedia.org/wiki/Frog" target='_blank' className='text-blue-300'>Frog</Link>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="wiki-content">
                    <p className="mb-4">
                        <strong>Hoppy the Frog</strong> is a webcomic character and Internet meme created by cartoonist Matt Furie.
                        Designed as a green anthropomorphic frog with a humanoid body, Hoppy first originated in Furie's 2012
                        comic <em>The Night Riders</em> as a nocturnal frog.
                    </p>

                    <p className="mb-6">
                        In the rich tapestry of internet culture, few characters have stirred as much controversy and
                        fascination as Pepe the Frog, also created by Matt Furie who explain in his documentary <em>Feels Good Man</em>,
                        how he did not want to be solely remembered as the artist who only did <em>Boy's clubs</em>. Born from the
                        same creative mind that spawned Pepe, Hoppy embodies a similar charm but exists in a separate realm.
                    </p>

                    {/* Table of Contents */}
                    <div className="mb-6 border border-gray-300 p-4 bg-gray-50 rounded-xl">
                        <h2 className="text-2xl font-bold mb-2 text-[#333515]">Contents</h2>
                        <ul className="list-disc pl-5">
                            <li className="mb-1">
                                <a href="#origin" className="text-blue-500 hover:underline">1 Origin: <em>The Nights Riders</em></a>
                            </li>
                            <li className="mb-1">
                                <a href="#meme" className="text-blue-500 hover:underline">2 As an internet meme</a>
                            </li>
                            <li className="mb-1">
                                <a href="#see-also" className="text-blue-500 hover:underline">3 See also</a>
                            </li>
                            <li className="mb-1">
                                <a href="#references" className="text-blue-500 hover:underline">4 References</a>
                            </li>
                            <li className="mb-1">
                                <a href="#external-links" className="text-blue-500 hover:underline">5 External links</a>
                            </li>
                        </ul>
                    </div>

                    {/* Origin Section */}
                    <div id="origin" className="mb-6">
                        <h2 className="text-2xl font-bold border-b border-gray-300 pb-1 mb-3">Origin: <em>The Nights Riders</em></h2>
                        <p className="mb-4">
                            Hoppy the Frog was created by American artist and cartoonist Matt Furie in his 2012 comic <em>The Night Riders</em> as
                            a nocturnal frog. In the comic, a nocturnal frog and rat awake at midnight, share a salad of lettuce and bugs,
                            and strike out on an epic dirtbike adventure toward the sunrise. As the friends make their way from forest to
                            bat cave to ghost town to ocean to shore and beyond, new friends are discovered, a huge crab is narrowly avoided,
                            and a world is revealed. The comic, <em>The Night Riders</em> is packed with colorful characters and surprising details
                            on every hand-drawn page, and is meant for anyone who has ever wanted to surf to the mountains on the back of a dolphin.
                        </p>
                    </div>

                    {/* Internet Meme Section */}
                    <div id="meme" className="mb-6">
                        <h2 className="text-2xl font-bold border-b border-gray-300 pb-1 mb-3">As an internet meme</h2>
                        <p className="mb-4">
                            The meme grew in popularity on Twitter and Telegram where the frog became associated with Pepe the Frog
                            considering the history with Matt Furie. The character found himself intertwined with the iconic figure,
                            within the vast landscape of internet culture creating various iterations of the meme fused with Pepe,
                            establishing a unique presence within the memescape earning the nickname Hoppy or Hoppy the Frog.
                        </p>
                    </div>

                    {/* See Also Section */}
                    <div id="see-also" className="mb-6">
                        <h2 className="text-2xl font-bold border-b border-gray-300 pb-1 mb-3">See also</h2>
                        <ul className="list-disc pl-8">
                            <li className="mb-1">
                                <a href="#" className="text-blue-400 hover:underline">Pepe the Frog</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="text-blue-400 hover:underline">Matt Furie</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="text-blue-400 hover:underline">Meme hack</a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="text-blue-400 hover:underline">Toad worship</a>
                            </li>
                        </ul>
                    </div>

                    {/* References Section */}
                    <div id="references" className="mb-6">
                        <h2 className="text-2xl font-bold border-b border-gray-300 pb-1 mb-3">References</h2>
                        <ol className="list-decimal pl-8">
                            <li className="mb-2">
                                <span className="text-sm">
                                    <strong>^</strong> <em>"Behind the Scenes Of The Night Riders With Matt Furie"</em>. mcsweeneys.net. Retrieved 30 April 2024.
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-sm">
                                    <strong>^</strong> Michael Cavna, <em>"Matt Furie is trying to reclaim his famous cartoon Pepe the Frog — through NFTs"</em>.
                                    washingtonpost.com. 30 May 2021. Retrieved 30 April 2024.
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-sm">
                                    <strong>^</strong> Ben Kenigsberg, <em>"'Feels Good Man' Review: The Evolution of a Poisonous Frog"</em>.
                                    nytimes.com. 3 September 2020. Retrieved 30 April 2024.
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-sm">
                                    <strong>^</strong> <em>"Hoppy Memes"</em>. tenor.com. Retrieved 30 April 2024.
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-sm">
                                    <strong>^</strong> <em>"hoppy Meme Templates"</em>. imgflip.com. Retrieved 30 April 2024.
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-sm">
                                    <strong>^</strong> <em>"Three remarkable picture books from McSweeney's: The Night Riders; Symphony City; Lost Sloth"</em>.
                                    boingboing.net. 18 July 2013. Retrieved 30 April 2024.
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-sm">
                                    <strong>^</strong> Sam Thielman, <em>"Matt Furie on life after Pepe the Frog: 'You have to lead by example'"</em>.
                                    theguardian.com. 29 October 2020. Retrieved 30 April 2024.
                                </span>
                            </li>
                        </ol>
                    </div>

                    {/* External Links Section */}
                    <div id="external-links">
                        <h2 className="text-2xl font-bold border-b border-gray-300 pb-1 mb-3">External links</h2>
                        <ul className="list-disc pl-8">
                            <li className="mb-1">
                                <a href="#" className="text-blue-400 hover:underline">Feels Good Man</a> Documentary
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}