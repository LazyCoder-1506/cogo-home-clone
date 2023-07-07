import React, { useState } from 'react'

const CookieSection = () => {
  const [showCookieSection, setShowCookieSection] = useState(true)

  return (
    <div className={(showCookieSection ? 'grid' : 'hidden') + ' grid-cols-1 md:grid-cols-4 gap-4 fixed bottom-0 left-0 right-0 bg-white z-[999] content-center justify-between shadow-[0px_1px_6px_rgba(169,188,218,0.65)] p-6'}>
      <div className='md:col-span-3 grid gap-4'>
        <h4 className='font-bold'>Notice</h4>
        <h4 className="font-normal">
          We have selected third parties to use cookies or similar technologies for technical purposes and, with your consent, for other purposes as specified in the cookie policy.
          Denying consent may make related features unavailable.
        </h4>
        <h4 className="font-normal">
          Use the “Accept” button to consent to the use of such technologies. Use the “Reject” button to continue without accepting.
        </h4>
      </div>
      <div className='flex md:justify-end items-center'>
        <button onClick={() => setShowCookieSection(false)} className='bg-primary me-4 cursor-pointer rounded-full px-8 py-2 text-white font-bold'>Reject</button>
        <button onClick={() => setShowCookieSection(false)} className='bg-secondary me-4 cursor-pointer rounded-full px-8 py-2 font-bold'>Accept</button>
      </div>
    </div>
  )
}

export default CookieSection