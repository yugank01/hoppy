import React from 'react'
import Card1 from './cards/Card1'
import Card2 from './cards/Card2'
import Card3 from './cards/Card3'
import Card4 from './cards/Card4'

const CardsSection = () => {
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center gap-8 w-[85%]'>
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>
        </div>
    )
}

export default CardsSection
