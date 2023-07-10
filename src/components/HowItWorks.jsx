import React, { useState } from 'react'

import CargoOwners from './CargoOwners'
import LogisticsPartners from './LogisticsPartners'

const HowItWorks = () => {
  const [tabOpen, setTabOpen] = useState('cargo')

  return (
    <div className='md:w-3/4 mx-auto px-4 py-16'>
      <h3 className="text-2xl font-bold text-center mb-4">How it Works</h3>
      <div className="flex flex-col md:flex-row items-center md:justify-center mb-4 md:mb-0">
        <button onClick={() => {setTabOpen('cargo')}} className={(tabOpen === 'cargo' ? 'bg-secondary' : 'bg-inactive') + " font-bold rounded-full w-[200px] py-2 mb-4 md:mb-0 md:me-12"}>For Cargo Owners</button>
        <button onClick={() => {setTabOpen('logistics')}} className={(tabOpen === 'logistics' ? 'bg-secondary' : 'bg-inactive') + " font-bold rounded-full w-[200px] py-2 mb-3 md:mb-0"}>For Logistics Partners</button>
      </div>
      {tabOpen === 'cargo' ? <CargoOwners /> : <LogisticsPartners />}
    </div>
  )
}

export default HowItWorks