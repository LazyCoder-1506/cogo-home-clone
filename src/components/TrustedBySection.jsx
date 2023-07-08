import React from 'react'
import { partnerImages } from '../assets/images/PartnersImages'

const TrustedBySection = () => {
  return (
    <div className='my-12 overflow-x-hidden'>
      <h4 className="text-2xl font-bold text-center">Trusted By</h4>
      <div className='w-[300%] md:w-[170%] h-32 overflow-x-hidden relative'>
        <div className='w-[300%] md:w-[170%] flex items-center h-32 justify-around absolute left-0 infinite-scroll gap-8'>
          {partnerImages.map((image) => (
            <div className="flex justify-center items-start w-[8rem]">
              <img src={image} alt="" />
            </div>
          ))}
          {partnerImages.map((image) => (
            <div className="flex justify-center items-start w-[8rem]">
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustedBySection