import React from 'react'
import Card1 from './Card1'

const CardsSection = () => {
    return (
        <div className='flex justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center gap-8 w-[85%]'>
                <Card1 />
                <Card1 />
                <Card1 />
            </div>
        </div>
    )
}

export default CardsSection
