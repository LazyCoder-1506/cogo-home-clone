import React from 'react'
import CountUp from 'react-countup'

const NumbersSection = () => {
  return (
    <div className='md:w-3/4 mx-auto px-2 my-16'>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-32">
        <div className="text-center">
          <CountUp start={0} end={180} delay={1} suffix='+' className='text-primary font-bold text-4xl' />
          <h4 className="text-lg font-bold">Countries Served</h4>
        </div>
        <div className="text-center">
          <CountUp start={0} end={10000} delay={1} className='text-primary font-bold text-4xl' />
          <h4 className="text-lg font-bold">Ports Pairs Served</h4>
        </div>
        <div className="text-center">
          <CountUp start={0} end={30000} delay={1} suffix='+' className='text-primary font-bold text-4xl' />
          <h4 className="text-lg font-bold">Tons of Air Cargo Moved</h4>
        </div>
        <div className="text-center">
          <CountUp start={0} end={700000} delay={1} className='text-primary font-bold text-4xl' />
          <h4 className="text-lg font-bold">Containers Moved</h4>
        </div>
      </div>
    </div>
  )
}

export default NumbersSection