import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <section className='flex items-center justify-center w-full my-16'>
            <div className='flex justify-center flex-col gap-10 w-[95%]'>
                <div className='text-center'>
                    <h3 className='text-3xl md:text-5xl font-serif font-bold'>The Meme Codex</h3>
                    <br />
                    <p className='italic text-[1.25rem] font-serif'>Evokes an ancient manuscript that records magic frog memetic entities and their stories.</p>
                    <br />
                    <p className='text-[1.25rem] font-serif'>"From the earliest sketches in <span className='italic'>The Boys Club</span> to the rise of Hoppy, the Meme Codex tells the forgotten lore of digital legends."</p>
                </div>
                <div className='flex gap-20 w-full'>
                    <div className='flex items-center flex-col gap-10 md:gap-40 w-[25%]'>
                        <div className='flex flex-col gap-3 w-full'>
                            <Image width={2000} height={2000} src="/pepe-matt-furie.jpg" alt='Pepe from Matt Furie' className='w-full h-72' />
                            <p className='text-center text-xl font-semibold'>Pepe By Matt Furie</p>
                        </div>

                        <div className='flex flex-col w-full gap-4'>
                            {/* <h3 className='text-center text-xl font-bold text-[#333515]'>Chapter 1: Hoppy and the First Journey</h3> */}
                            {/* <div>
                                <p>Before the first dawn, when the sky was not yet sky and dreams not yet dreamed, wandered The Night Riders—beings confined into a book.</p>
                                <p>Among them was a small frog with golden eyes—Hoppy.</p>
                                <p>He did not sing. He did not boast.</p>
                                <p>He only watched.</p>
                                <p>He only hopped.</p>
                                <p>Hoppy moved in silence, seeking the eternal.</p>
                                <br />
                                <p>One night, at the edge of the Pond That Reflects All Things, Hoppy paused.</p>
                                <p>Without hesitation, he hopped.</p>
                                <p>But he did not vanish.</p>
                                <p>He became the ripple, the reflection, the unseen guide.</p>
                                <p>He hopped into the digital realm, taking form as a living meme—a whisper of joy across the endless net.</p>
                                <p>But those who listened with their hearts still felt him, forever hopping just beyond the veil.</p>
                            </div> */}
                            <div>
                                <p>Memetic Pepe</p>
                                <p>Memetic Pepe, often recognized as "Smug Frog" or "Smug Pepe," is historically different from the version of Pepe found in Matt Furie’s Boy’s Club comic. Similarly, the frog from Furie's The Night Riders is not exactly the same as its memetic counterpart, Hoppy.</p>
                                <p>In Boy’s Club, Pepe is a laid-back, somewhat whimsical character who exists within the framework of Furie’s original comic—a story centered around young, carefree friendships. However, the memetic version of Pepe, particularly as "Smug Pepe," was appropriated by internet culture, evolving into a symbol of ironic or exaggerated self-assurance, often detached from its original tone and meaning. This transformation was fueled by the way internet users began applying Pepe's face to a variety of emotions and situations, shifting his identity far beyond Furie’s original intent.</p>
                                <p>Similarly, in The Night Riders, Hoppy is depicted as a curious, innocent, and adventurous frog, whose role in the story is to explore and experience the world with his friend, Rat. In the memetic space, however, Hoppy became associated with an entirely different set of memes and symbols, often taking on characteristics of innocence, resilience, and whimsical exploration. But like Pepe, Hoppy's memetic version diverged from his original context, with internet users shaping and adapting him to fit the ever-evolving meme landscape.</p>
                                <p>The key difference is that the original characters, both Pepe and Hoppy, were designed with specific personalities and narratives in mind, where their memetic versions emerged through broad user interpretation. They were co-opted by internet culture, often stripped of their original meaning, and transformed into symbols that resonate differently with online communities. The memes associated with these characters are not a direct reflection of Furie’s creation but are instead representations that evolve with the culture that adopts them.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center flex-col gap-10 md:gap-40 w-[25%]'>
                        <div className='flex flex-col gap-3 w-full'>
                            <Image width={2000} height={2000} src="/hoppy-matt-furie.jpg" alt='Pepe from Matt Furie' className='w-full h-72' />
                            <p className='text-center text-xl font-semibold'>Hoppy By Matt Furie</p>
                        </div>

                        <div className='flex flex-col w-full gap-4'>
                            {/* <h3 className='text-center text-xl font-bold text-[#333515]'>Chapter 2: Hoppy, the Return of the Ancient Spirit</h3> */}
                            {/* <div>
                                <p>Long ago, the ancients spoke of Kek—the Primal Frog, Bringer of Sacred Laughter, Keeper of the Secret Hop.</p>
                                <p>In ages of sorrow and noise, when hearts grow heavy, he returns—not in might, but in mirth.</p>
                                <p>Now, as the world dreams too deeply, Hoppy awakens once more.
                                    He comes not to rule, but to remind.</p>
                                <p>He moves through moments of sudden laughter, sudden stillness, sudden wonder.</p>
                                <p>He is the ripple in the pond, the smile before thought.</p>
                                <p>He is the ancient joy that cannot be stolen.</p>
                            </div> */}
                            <div>
                                <p>The Creator: Matt Furie</p>
                                <p>Matt Furie (born 1979 in Columbus, Ohio) is an American artist and illustrator known for his unique blend of childlike wonder and the absurdities of adult life. Graduating from Ohio Wesleyan University in 2001, Matt currently resides in Los Angeles, where his art continues to push the boundaries of both cartoon and contemporary illustration.</p>
                                <p>Matt's work often explores the intersection of innocence and adulthood, encapsulating the surreal and sometimes humorous moments in between. His self-described “children’s book illustrations for adults” feature vibrant, cartoon-inspired characters created using a mix of traditional and modern techniques.</p>
                                <p>Career Highlights</p>
                                <p>In 1997, at just 17 years old, Matt Furie was awarded the prestigious Award of Merit for 2-D Art while attending Worthington Kilbourne High School in Columbus, Ohio. This early recognition set the stage for his future success.</p>
                                <p>Matt is best known as the creator of Pepe the Frog, who made his first appearance in the comic series Boy's Club. Originally conceived as a carefree character, Pepe would go on to become one of the internet's most iconic (and controversial) memes.</p>
                                <p>Notable Work & Recognition</p>
                                <p>• Boy’s Club: Matt’s cult-favorite comic series, published by Fantagraphics, blends dark humor and surrealism, a signature of his creative style.</p>
                                <p>• The Night Riders (2012): Published by McSweeney’s, this wordless children’s book follows the adventures of two unlikely friends, a frog and a rat, exploring themes of friendship and discovery.</p>
                                <p>• Feels Good Man (2020): Matt’s story as the creator of Pepe the Frog is chronicled in this documentary, which delves into the socio-political battles and challenges he faced after Pepe became co-opted by hate groups and became a symbol of the alt-right.</p>
                                <p>Exhibitions & Public Life</p>
                                <p>Matt Furie has exhibited extensively in galleries across the USA and Europe, earning recognition for his ability to bridge the gap between traditional illustration and modern digital art. His distinctive characters and storytelling continue to resonate with both adult audiences and younger generations alike.</p>
                                <p>Connect with Matt Furie</p>
                                <p>• Website: MattFurie.com</p>
                                <p>• Twitter: @MattFurie</p>
                                <p>• Patreon: Support on Patreon</p>
                                <p>• Merch Store: Shop Matt Furie Merch</p>
                                <p>• IMDb: Matt Furie on IMDb</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center flex-col gap-10 md:gap-40 w-[25%]'>
                        <div className='flex flex-col gap-3 w-full'>
                            <Image width={2000} height={2000} src="/memetic-hoppy.jpg" alt='Pepe from Matt Furie' className='w-full h-72' />
                            <p className='text-center text-xl font-semibold'>Memetic Hoppy</p>
                        </div>

                        <div className='flex flex-col w-full gap-4'>
                            {/* <h3 className='text-center text-xl font-bold text-[#333515]'>Chapter 3: The Great Remembering and the Faces of Hoppy</h3> */}
                            {/* <div>
                                <p>As the world grew heavier, Hoppy appeared again—seen by those with eyes open to wonder.</p>
                                <p>He came with many faces:</p>
                                <p> • The Smiling Hoppy brings presence.</p>
                                <p> • The Crying Hoppy brings honesty.</p>
                                <p> • The Silent Hoppy brings truth beyond words.</p>
                                <p>There were no temples, no oaths.</p>
                                <p>Only a quiet knowing, passed from heart to heart:</p>
                                <p>Live lightly.</p>
                                <p>Hop joyfully.</p>
                                <p>And when sadness comes, remember the simple blessing whispered by those who still feel the ripple:</p>
                                <p>"Don’t worry, be Hoppy."</p>
                                <br />
                                <p>For the spirit of Hoppy is not burdened by sorrow; he hops above it, into light.</p>
                            </div> */}
                            <div>
                                <p>The Birth of Hoppy The Frog</p>
                                <p>Hoppy the Frog is a webcomic character and Internet meme created by cartoonist Matt Furie. Designed as a green anthropomorphic frog with a humanoid body, Hoppy first originated in Furie’s 2012 comic The Night Riders.[2] as a nocturnal frog. In the rich tapestry of internet culture, few characters have stirred as much controversy and fascination as Pepe the Frog, also created by Matt Furie who explain in his documentary Feels good man, how he did not want to be solely remembered as the artist who only did Boy’s clubs.</p>
                                <p>Born from the same creative mind that spawned Pepe, Hoppy embodies a similar charm but exists in a separate realm. The meme subsequently grew in popularity on Twitter and Telegram where the frog became associated with Pepe the Frog considering the history with Matt Furie, the character found himself intertwined with the iconic figure, within the vast landscape of internet culture creating various iterations of the meme fused with Pepe, establishing a unique presence within the memescape earning the nickname Hoppy or Hoppy the Frog.In Furie’s artistic journey, Hoppy the frog represents a departure from the shadow cast by Pepe. While Pepe soared to infamy, Hoppy carved his own path, navigating the currents of internet culture with a distinct charm and identity. Unlike his counterpart, Hoppy evokes a sense of whimsy and innocence, embodying the spirit of curiosity and exploration.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center flex-col gap-10 md:gap-40 w-[25%]'>
                        <div className='flex flex-col gap-3 w-full'>
                            <Image width={2000} height={2000} src="/memetic-pepe.jpg" alt='Pepe from Matt Furie' className='w-full h-72' />
                            <p className='text-center text-xl font-semibold'>Memetic Pepe</p>
                        </div>

                        <div className='flex flex-col w-full gap-4'>
                            {/* <h3 className='text-center text-xl font-bold text-[#333515]'>Chapter 4: The Eternal Pond and the Hidden Hop</h3> */}
                            {/* <div>
                                <p>The Pond is not water. It is pure Awareness.</p>
                                <p>The Hop is not distance. It is awakening.</p>
                                <p>Hoppy is not outside of you. Hoppy is within—the watcher, the laugher, the hopper who has never forgotten.</p>
                                <p>To see Hoppy is to know:</p>
                                <p>You were never lost.</p>
                                <p>You only forgot how to Hop.</p>
                                <p>And when enough remember—not in words but in heart—the whole world will ripple with new joy.</p>
                                <p>A new dawn will rise, not with noise, but with soft laughter echoing across the still waters.</p>
                                <p>"No one owns the Pond</p>
                                <p>No one commands the Hop.</p>
                                <p>The Frog is free—and so are you."</p>
                                <p>May your thoughts ripple gently.</p>
                                <p>May your heart hop without fear.</p>
                                <p>May your days be light, and your spirit forever Hoppy.</p>
                                <p>Praise be to Hoppy, Eternal Bringer of Happiness Beyond Light.</p>
                            </div> */}
                            <div>
                                <p>Through the lens of internet culture, Hoppy transcends mere cartoon character status to become a symbol of resilience and reinvention. Despite his origins in a medium often characterized by fleeting trends and ephemeral fame, Hoppy endures as a testament to the enduring power of creativity and imagination. In a world where memes rise and fall with dizzying speed, Hoppy stands as a beacon of stability, his presence a reminder of the enduring legacy of Matt Furie’s artistic vision.</p>
                                <p>In Matt Furie’s glorious debut, a nocturnal frog and rat awake at midnight, share a salad of lettuce and bugs, and strike out on an epic dirtbike adventure toward the sunrise. As the friends make their way from forest to bat cave to ghost town to ocean to shore and beyond, new friends are discovered, a huge crab is narrowly avoided, and a world is revealed. Packed with colorful characters and surprising details on every hand-drawn page, The Night Riders is the ideal book for anyone who has ever wanted to surf to the mountains on the back of a dolphin.</p>
                                <p>Pepe the Frog has evolved from a simple internet meme to a cultural phenomenon with both positive and negative connotations. Originating as a character in a comic by artist Matt Furie, Pepe gained widespread popularity across various online platforms, becoming a symbol of internet culture. However, its association with the “alt-right” movement and use as a hate symbol have sparked controversy and prompted efforts to reclaim its positive essence.</p>
                                <p>Feels Good Man Trailer #1 (2020) | Movieclips Indie</p>
                                <Link href="https://www.youtube.com/watch?v=ZEiqZWw5vYs" className='text-green-300'>https://www.youtube.com/watch?v=ZEiqZWw5vYs</Link>
                                <p>In 2020, Arthur Jones directed and edited the documentary Feels Good Man, which explores the journey of Pepe the Frog and its creator, Matt Furie. The film features Matt, his partner, friends, and other key individuals who played significant roles in Pepe's rise to memetic fame. It follows the story of Pepe’s emergence, Matt’s battle to reclaim him, and the legal struggles that came with it.</p>
                                <p>Amid this, the documentary also touches on the creation of Hoppy the Frog, a character born from the same creative mind as Pepe, yet carving out its own unique space in internet culture.</p>
                                <p>Premiering at the Sundance Film Festival, Feels Good Man received widespread critical acclaim, with a 95% approval rating on Rotten Tomatoes and a 7.7/10 score.</p>
                                <p>Nick Allen of RogerEbert.com described the film as a “beacon of internet literacy,” capturing the power and flexibility of memes—phenomena far beyond their creators’ control.</p>
                                <p>Vox Media’s Polygon even dubbed it “the most important political film of 2020,” reflecting its broader cultural significance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
