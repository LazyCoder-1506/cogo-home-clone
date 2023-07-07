import React from 'react'
import image from '../assets/images/map-supply-chain.webp'

const OneStopSolution = () => {
  return (
    <div className='md:w-3/4 mx-auto px-2 pt-16'>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="font-bold text-4xl mb-2">One Stop Solution for Your Supply Chain</h1>
          <h6 className="font-pt">Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains.</h6>
        </div>
        <div className="order-first md:order-last">
          <img src={image} alt="" className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default OneStopSolution