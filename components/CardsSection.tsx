import React from 'react'
import Card1 from './cards/Card1'
import Card2 from './cards/Card2'
import Card3 from './cards/Card3'
import Card4 from './cards/Card4'

const CardsSection = () => {
    return (
        <div className='flex flex-col gap-10 justify-center items-center w-full'>
            <h2 className='text-center text-3xl md:text-5xl font-bold'>Codex of Hoppy: The Frog of the Eternal Light</h2>
            <div className='flex flex-col md:flex-row items-start justify-center gap-8 w-[85%]'>
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>
        </div>
    )
}

export default CardsSection
