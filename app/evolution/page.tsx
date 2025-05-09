import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <div className='flex items-center justify-center w-full my-16'>
            <div className='flex justify-center flex-col w-[95%]'>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <h3 className='text-2xl md:text-4xl font-serif font-bold'>Evolution of the Frogs</h3>
                    <Image width={500} height={500} src="/meet-hoppy.jpg" alt='evolution' className='rounded-lg' />
                </div>

                <div className='flex flex-col w-full justify-center items-center gap-8'>
                    <div className="w-[70%] mt-8 p-5 bg-[#63681e] rounded-2xl gap-8 flex flex-col">
                        <p>Memetic Pepe, often recognized as "Smug Frog" or "Smug Pepe," is historically different from the version of Pepe found in Matt Furie’s Boy’s Club comic. Similarly, the frog from Furie's The Night Riders is not exactly the same as its memetic counterpart, Hoppy.</p>
                        <div className='flex justify-center items-center'>
                            {/* <Image width={200} height={600} src="/memetic-pepe.jpg" alt='evolution' className='rounded-l-lg h-64' /> */}
                            <Image width={500} height={1000} src="/evolution1.png" alt='evolution' className='rounded-lg' />
                        </div>
                        <p>In Boy’s Club, Pepe is a laid-back, somewhat whimsical character who exists within the framework of Furie’s original comic—a story centered around young, carefree friendships. However, the memetic version of Pepe, particularly as "Smug Pepe," was appropriated by internet culture, evolving into a symbol of ironic or exaggerated self-assurance, often detached from its original tone and meaning. This transformation was fueled by the way internet users began applying Pepe's face to a variety of emotions and situations, shifting his identity far beyond Furie’s original intent.</p>
                        <p>Similarly, in The Night Riders, Hoppy is depicted as a curious, innocent, and adventurous frog, whose role in the story is to explore and experience the world with his friend rat. In the memetic space, however, Hoppy became associated with an entirely different set of memes and symbols, often taking on characteristics of innocence, resilience, and whimsical exploration. But like Pepe, Hoppy's memetic version diverged from his original context, with internet users shaping and adapting him to fit the ever-evolving meme landscape.</p>
                        <div className='flex justify-center items-center'>
                            {/* <Image width={350} height={600} src="/hoppy-matt-furie.jpg" alt='evolution' className='rounded-l-lg h-60' /> */}
                            <Image width={650} height={1000} src="/evolution2.png" alt='evolution' className='rounded-lg' />
                        </div>
                        <p>The key difference is that the original characters, both Pepe and Hoppy, were designed with specific personalities and narratives in mind, where their memetic versions emerged through broad user interpretation. They were co-opted by internet culture, often stripped of their original meaning, and transformed into symbols that resonate differently with online communities. The memes associated with these characters are not a direct reflection of Furie’s creation but are instead representations that evolve with the culture that adopts them.</p>
                    </div>

                    <div className="w-[70%] p-5 bg-[#63681e] rounded-2xl gap-8 flex flex-col">
                        <p className='text-lg font-bold'>The Creator: Matt Furie</p>
                        <p>Matt Furie (born 1979 in Columbus, Ohio) is an American artist and illustrator known for his unique blend of childlike wonder and the absurdities of adult life. Graduating from Ohio Wesleyan University in 2001, Matt currently resides in Los Angeles, where his art continues to push the boundaries of both cartoon and contemporary illustration.</p>
                        <p>Matt's work often explores the intersection of innocence and adulthood, encapsulating the surreal and sometimes humorous moments in between. His self-described “children’s book illustrations for adults” feature vibrant, cartoon-inspired characters created using a mix of traditional and modern techniques.</p>
                        <div className='flex flex-col'>
                            <p className='text-lg font-bold'>Career Highlights</p>
                            <p>In 1997, at just 17 years old, Matt Furie was awarded the prestigious Award of Merit for 2-D Art while attending Worthington Kilbourne High School in Columbus, Ohio. This early recognition set the stage for his future success.</p>
                        </div>
                        <p>Matt is best known as the creator of Pepe the Frog, who made his first appearance in the comic series Boy's Club. Originally conceived as a carefree character, Pepe would go on to become one of the internet's most iconic (and controversial) memes.</p>
                        <div className='flex flex-col'>
                            <p className='text-lg font-bold'>Notable Work & Recognition</p>
                            <p>• Boy’s Club: Matt’s cult-favorite comic series, published by Fantagraphics, blends dark humor and surrealism, a signature of his creative style.</p>
                            <p>• The Night Riders (2012): Published by McSweeney’s, this wordless children’s book follows the adventures of two unlikely friends, a frog and a rat, exploring themes of friendship and discovery.</p>
                            <p>• Feels Good Man (2020): Matt’s story as the creator of Pepe the Frog is chronicled in this documentary, which delves into the socio-political battles and challenges he faced after Pepe became co-opted by hate groups and became a symbol of the alt-right.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-lg font-bold'>Exhibitions & Public Life</p>
                            <p>Matt Furie has exhibited extensively in galleries across the USA and Europe, earning recognition for his ability to bridge the gap between traditional illustration and modern digital art. His distinctive characters and storytelling continue to resonate with both adult audiences and younger generations alike.</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-lg font-bold'>Connect with Matt Furie</p>
                            <p>• Website: MattFurie.com</p>
                            <p>• Twitter: @MattFurie</p>
                            <p>• Patreon: Support on Patreon</p>
                            <p>• Merch Store: Shop Matt Furie Merch</p>
                            <p>• IMDb: Matt Furie on IMDb</p>
                        </div>
                    </div>

                    <div className="w-[70%] p-5 bg-[#63681e] rounded-2xl gap-8 flex flex-col">
                        <p className='text-lg font-bold'>The Birth of Hoppy The Frog</p>
                        <p>Hoppy the Frog is a webcomic character and Internet meme created by cartoonist Matt Furie. Designed as a green anthropomorphic frog with a humanoid body, Hoppy first originated in Furie’s 2012 comic The Night Riders.[2] as a nocturnal frog. In the rich tapestry of internet culture, few characters have stirred as much controversy and fascination as Pepe the Frog, also created by Matt Furie who explain in his documentary Feels good man, how he did not want to be solely remembered as the artist who only did Boy’s clubs.</p>
                        <p>Born from the same creative mind that spawned Pepe, Hoppy embodies a similar charm but exists in a separate realm. The meme subsequently grew in popularity on Twitter and Telegram where the frog became associated with Pepe the Frog considering the history with Matt Furie, the character found himself intertwined with the iconic figure, within the vast landscape of internet culture creating various iterations of the meme fused with Pepe, establishing a unique presence within the memescape earning the nickname Hoppy or Hoppy the Frog.In Furie’s artistic journey, Hoppy the frog represents a departure from the shadow cast by Pepe. While Pepe soared to infamy, Hoppy carved his own path, navigating the currents of internet culture with a distinct charm and identity. Unlike his counterpart, Hoppy evokes a sense of whimsy and innocence, embodying the spirit of curiosity and exploration.</p>
                    </div>

                    <div className="w-[70%] p-5 bg-[#63681e] rounded-2xl gap-8 flex flex-col">
                        <p>Through the lens of internet culture, Hoppy transcends mere cartoon character status to become a symbol of resilience and reinvention. Despite his origins in a medium often characterized by fleeting trends and ephemeral fame, Hoppy endures as a testament to the enduring power of creativity and imagination. In a world where memes rise and fall with dizzying speed, Hoppy stands as a beacon of stability, his presence a reminder of the enduring legacy of Matt Furie’s artistic vision.</p>
                        <p>In Matt Furie’s glorious debut, a nocturnal frog and rat awake at midnight, share a salad of lettuce and bugs, and strike out on an epic dirtbike adventure toward the sunrise. As the friends make their way from forest to bat cave to ghost town to ocean to shore and beyond, new friends are discovered, a huge crab is narrowly avoided, and a world is revealed. Packed with colorful characters and surprising details on every hand-drawn page, The Night Riders is the ideal book for anyone who has ever wanted to surf to the mountains on the back of a dolphin.</p>
                        <p>Pepe the Frog has evolved from a simple internet meme to a cultural phenomenon with both positive and negative connotations. Originating as a character in a comic by artist Matt Furie, Pepe gained widespread popularity across various online platforms, becoming a symbol of internet culture. However, its association with the “alt-right” movement and use as a hate symbol have sparked controversy and prompted efforts to reclaim its positive essence.</p>
                        <div>
                            <p>Feels Good Man Trailer #1 (2020) | Movieclips Indie</p>
                            <Link href="https://www.youtube.com/watch?v=ZEiqZWw5vYs" target='_blank' className='text-green-300'>https://www.youtube.com/watch?v=ZEiqZWw5vYs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
