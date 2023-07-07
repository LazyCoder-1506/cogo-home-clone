import React from 'react'
import { OceanFCL, OceanLCL, InternationalAir, CustomsHandling, FtlPtl, TrailerRail, CogoAssured, DomesticFulfilment, DoorToDoor, CargoInsurance, PayLater, ExportFactoring, FreightRates, QuickPremium, DutiesTaxes, TrackingVisibility, RightArrow } from '../assets/svgs/ProductIcons'

const OurProducts = () => {
  return (
    <div className='md:w-3/4 mx-auto px-2 py-4'>
      <h3 className="text-center font-bold text-3xl mb-16">Our Products</h3>
      <div className="grid gap-y-8">
        <div className="grid md:grid-cols-3 gap-x-8">
          <div className="flex items-center">
            <h4 className="font-bold text-2xl">End to End Cross Border Logistics</h4>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <OceanFCL />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Ocean: FCL</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <OceanLCL />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Ocean: LCL</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <InternationalAir />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">International Air</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <CustomsHandling />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Customs, CFS, & Handling</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8">
          <div className="flex items-center">
            <h4 className="font-bold text-2xl">Domestic Logistics</h4>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <FtlPtl />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">FTL, PTL</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <TrailerRail />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Trailer & Rail Container Haulage</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8">
          <div className="flex items-center">
            <h4 className="font-bold text-2xl">Supply Chain Solutions</h4>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <CogoAssured />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">CogoAssured</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <DomesticFulfilment />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Domestic Fulfilment</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <DoorToDoor />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Door to Door Shipments</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <CargoInsurance />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Cargo Insurance</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8">
          <div className="flex items-center">
            <h4 className="font-bold text-2xl">Financial Services</h4>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <PayLater />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Pay Later</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <ExportFactoring />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Export Factoring</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8">
          <div className="flex items-center">
            <h4 className="font-bold text-2xl">Trade Management Solutions</h4>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <FreightRates />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Freight Rates & Schedules</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <QuickPremium />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Quick Premium Quotations</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <DutiesTaxes />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Duties & Taxes Calculator</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
            <div className="grid content-between bg-white p-3 shadow-lg w-full hover:border border-primary cursor-pointer rounded-[10px]">
              <div>
                <div className='flex justify-center'>
                  <TrackingVisibility />
                </div>
                <h4 className="font-bold mb-1 md:mb-3 text-center">Tracking & Visibility</h4>
              </div>
              <div className="flex justify-center items-center">
                <h5 className="text-primary font-bold font-pt me-1">Find out More</h5>
                <RightArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProducts