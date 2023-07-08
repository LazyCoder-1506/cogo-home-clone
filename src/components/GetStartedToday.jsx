import React from 'react'

const GetStartedToday = () => {
  return (
    <div className='md:w-[65%] mx-auto px-4 py-16'>
      <div className="grid md:grid-cols-3 gap-8 md:gap-0 items-center">
        <div className='md:col-span-2 order-last md:order-first'>
          <h1 className="text-4xl font-bold mb-4">Get Started Today</h1>
          <p className="mb-4">Plan, Book and Finance your shipment in one place.</p>
          <p className="mb-4">Experience how Cogoport’s Global Trade Platform can Turbocharge your Business.</p>
          <button className="bg-primary text-white font-bold w-full md:w-auto py-2 px-8 rounded-lg">Get Started</button>
        </div>
        <div className="flex justify-end">
          <img className='get-started-img w-full md:w-[90%]' src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&w=384&q=75" alt="" />
        </div>
      </div>
    </div>
  )
}

export default GetStartedToday