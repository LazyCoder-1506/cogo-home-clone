import React, { useState } from 'react'

const DiscountRibbon = () => {
  const [showRibbon, setShowRibbon] = useState(true)

  return (
    <div>
      {showRibbon ? <div className='bg-primary py-2 px-2'>
        <div className="md:w-[90%] mx-auto flex justify-center relative pr-4">
          <div className="flex items-center">
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport_icon&w=16&q=75" alt="" className="h-[80%] me-2" />
            <span className="text-white font-bold text-sm font-pt">
              Limited Time Offer: Get 15% off on all Cogo Assured Rates.
              <a href='' className="text-secondary hover:underline ms-2">Book Today!</a>
            </span>
          </div>
          <button className='right-0 absolute p-0' onClick={() => {setShowRibbon(false)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FBDC22" viewBox="0 0 14 14" role="img" className="w-5"><path class="ic-m-cross_svg__ic_m_cross" d="M2.828 2.516a.922.922 0 0 0-.31.311.372.372 0 0 0 .004.353c.033.066.654.704 1.908 1.959L6.288 7 4.43 8.861c-1.254 1.255-1.875 1.893-1.908 1.959-.09.181-.049.348.13.529.172.173.351.217.528.129.066-.033.704-.654 1.959-1.908L7 7.712 8.861 9.57c1.255 1.254 1.893 1.875 1.959 1.908.177.088.355.044.529-.129.173-.174.217-.352.129-.529-.033-.066-.654-.704-1.908-1.959L7.712 7 9.57 5.139c1.254-1.255 1.875-1.893 1.908-1.959.088-.177.044-.356-.129-.528-.181-.179-.348-.22-.529-.13-.066.033-.704.654-1.959 1.908L7 6.288 5.139 4.43C3.884 3.176 3.246 2.555 3.18 2.522a.384.384 0 0 0-.352-.006" fill-rule="evenodd"></path></svg>
          </button>
        </div>
      </div> : <div></div>}
    </div>
  )
}

export default DiscountRibbon