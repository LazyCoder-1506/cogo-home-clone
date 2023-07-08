import React from 'react'
import { industriesImages } from '../assets/images/IndustriesImages'

const IndustriesSection = () => {
  return (
    <div className='bg-light py-8'>
      <div className='md:w-3/4 mx-auto px-16 md:px-2'>
      <h3 className="text-center font-bold text-2xl mb-12">Industries Served</h3>
        <div className="flex flex-row flex-wrap justify-center md:justify-between">
          {industriesImages.map((industry) => (
            <div className='basis-[50%] md:basis-[10%] mb-6'>
              <div className="flex justify-center mb-2">
                <img src={industry.image} alt="" className='w-3/4' />
              </div>
              <h5 className="font-bold text-center">{industry.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IndustriesSection