import React from 'react'
import { RightArrow } from '../assets/svgs/ProductIcons'

const MainFooter = () => {
  return (
    <div className='bg-secondary pt-[100px] relative' id='footer-section'>
      <div className="md:w-[45%] mx-auto flex justify-between items-center py-8 md:py-12">
        <div className="hidden md:block">
          <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport-subscribe.png&w=256&q=75" alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Subscribe to our newsletter now!</h3>
          <p className="mb-4 text-center md:text-left">Don’t miss out on the latest happenings at Cogoport.</p>
          <div className="flex justify-center md:justify-start">
            <input type="text" className="w-3/5 py-2 px-4 rounded-l-lg" placeholder='Enter your email here' />
            <button className="bg-primary text-white font-bold px-4 py-2 rounded-r-lg">Subscribe <svg xmlns="http://www.w3.org/2000/svg" className='fill-white inline' viewBox="0 0 14 14" width="1em" height="1em" role="img"><path class="ic-m-arrow_next_svg__ic_m_arrow_next" d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021" fill-rule="evenodd"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-12 px-4 md:px-12 pb-8">
        <div className="md:col-span-2 border-b md:border-none border-black">
          <h5 className="text-lg font-bold md:underline mb-4">Products</h5>
          <div className="hidden md:grid grid-cols-2 gap-12 items-start">
            <div className='grid grid-cols-1 gap-3'>
              <a className='hover:underline' href="">Global Trade Platform</a>
              <p className="font-bold">Cross-border Logistic</p>
              <a className='hover:underline' href="">Ocean: FCL</a>
              <a className='hover:underline' href="">OCean: LCL</a>
              <a className='hover:underline' href="">International Air</a>
              <a className='hover:underline' href="">Customs, CFS, & Handling</a>
              <p className="font-bold">Doemstic Logistics</p>
              <a className='hover:underline' href="">Surface: FTL, PTL, Rail</a>
              <a className='hover:underline' href="">Trailer & Rail Container haulage</a>
              <p className="font-bold">Trade Management Solutions</p>
              <a className='hover:underline' href="">Freight Rates & Schedules</a>
              <a className='hover:underline' href="">Quick Premium Quotations</a>
              <a className='hover:underline' href="">Duties & Taxes Calculator</a>
              <a className='hover:underline' href="">Tracking & Visibility</a>
              <p className="font-bold">CogoMaps</p>
              <a className='hover:underline' href="">Shipment Planner</a>
              <a className='hover:underline' href="">Trade Info</a>
              <a className='hover:underline' href="">Global Routes</a>
              <a className='hover:underline' href="">Live Congestion</a>
            </div>
            <div className='grid grid-cols-1 gap-3'>
              <p className="font-bold">Supply Chain Solutions</p>
              <a className='hover:underline' href="">CogoAssured</a>
              <a className='hover:underline' href="">Fulfilment Logistics</a>
              <a className='hover:underline' href="">Door to Door Shipments</a>
              <a className='hover:underline' href="">Cargo Insurance</a>
              <p className="font-bold">Financial Services</p>
              <a className='hover:underline' href="">Pay Later</a>
              <a className='hover:underline' href="">Export Factoring</a>
              <a className='hover:underline' href="">CogoFx</a>
            </div>
          </div>
        </div>
        <div className='border-b md:border-none border-black'>
          <h5 className="text-lg font-bold md:underline mb-4">Partners</h5>
          <div className="hidden md:grid grid-cols-1 gap-3 items-start">
            <a className='hover:underline' href="">Global Partner Network</a>
            <p className="font-bold">Our Logistics Providers</p>
            <a className='hover:underline' href="">Freight Forwarders</a>
            <a className='hover:underline' href="">Transporters</a>
            <a className='hover:underline' href="">Custom Agents</a>
            <p className="font-bold">Partnership Program</p>
            <a className='hover:underline' href="">Channel Partners</a>
            <a className='hover:underline' href="">Overseas Agents</a>
          </div>
        </div>
        <div className='border-b md:border-none border-black'>
          <h5 className="text-lg font-bold md:underline mb-4">Tools</h5>
          <div className="hidden md:grid grid-cols-1 gap-3 items-start">
            <a className='hover:underline' href="">Rate Discovery</a>
            <a className='hover:underline' href="">Freight Rate Trends</a>
            <a className='hover:underline' href="">Tracking</a>
            <a className='hover:underline' href="">HS Code Finder</a>
            <a className='hover:underline' href="">Personal Trade Assistant</a>
          </div>
        </div>
        <div className='border-b md:border-none border-black'>
          <h5 className="text-lg font-bold md:underline mb-4">Company</h5>
          <div className="hidden md:grid grid-cols-1 gap-3 items-start">
            <a className='hover:underline' href="">About us</a>
            <a className='hover:underline' href="">Careers</a>
            <a className='hover:underline' href="">Newsroom</a>
            <a className='hover:underline' href="">Leadership</a>
            <a className='hover:underline' href="">Login</a>
            <a className='hover:underline' href="">Sign up</a>
          </div>
        </div>
        <div className='border-b md:border-none border-black'>
          <h5 className="text-lg font-bold md:underline mb-4">Knowledge Center</h5>
          <div className="hidden md:grid grid-cols-1 gap-3 items-start">
            <a className='hover:underline' href="">Blogs</a>
            <a className='hover:underline' href="">News & Updates</a>
            <a className='hover:underline' href="">Events</a>
            <a className='hover:underline' href="">Reports</a>
            <a className='hover:underline' href="">Notifications</a>
            <p className="font-bold">Resources</p>
            <a className='hover:underline' href="">Port info</a>
            <a className='hover:underline' href="">Shipping Terms</a>
            <a className='hover:underline' href="">Help Center</a>
            <a className='hover:underline' href="">Incoterms</a>
          </div>
        </div>
        <div className="md:hidden">
        <h5 className="text-lg font-bold md:underline mb-4">Contact Us</h5>
        </div>
      </div>
    </div>
  )
}

export default MainFooter