import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DestinationData } from '../../data/destinationData'

function Destination() {
  const [destinationData, setdestinationData] = useState(DestinationData)
  const [destinationId, setDestinationId] = useState(1)
  console.log(destinationId)
  return (
    <div className='mx-7 md:mx-8'>
      <div className='destination-image'></div>

      <div className='lg:w-11/12 lg:m-auto'>
        
        <h1 className='font-barlow-condensed text-base uppercase tracking-[2.7px] text-white text-center my-2 md:text-xl md:tracking-[3.38px] md:my-10 md:text-left lg:my-14 lg:text-[28px] lg:tracking-[4.27px]'>
          <span className='opacity-[.25] font-bold'>01 </span>Pick your destination
        </h1>

        <div className='text-center md:w-9/12 md:m-auto lg:w-full lg:text-left'>
          {
            destinationData.filter(destination => destination.id === destinationId)
              .map(destination => (
                <div key={destination.id} className='lg:flex lg:justify-between lg:items-center lg:gap-32'>

                  <div className='lg:flex-1 lg:-mb-16'>
                    <img src={destination.image}
                      className='w-[170px] m-auto mt-8 md:w-[300px] md:mt-[60px] lg:w-[445px] lg:m-0'
                    />
                  </div>

                  <div className='lg:flex-1'>
                    <ul className='flex items-center justify-center lg:justify-start mt-[26px] uppercase text-sm font-barlow-condensed tracking-[2.36px] md:mt-[53px] md:text-base md:tracking-[2.7px]'>
                      {destinationData.map(destination => (
                        <li key={destination.id}
                          onClick={() => setDestinationId(destination.id)}
                          className='mx-3 lg:mx-0 lg:mr-7 hover:text-white hover:border-b-2 py-2 cursor-pointer md:mx-4'
                        >
                          {destination.title}
                        </li>
                      ))}
                    </ul>

                    <h2 className='text-[58px] uppercase text-white font-bellefair mt-2 md:text-[80px] md:mt-6 lg:text-[100px] lg:mt-5s'>{destination.title}</h2>
                    <p className='text-[15px] md:my-2 lg:my-0 lg:text-lg'>{destination.description}</p>

                    <div className='my-8 bg-dark-purple w-full h-[1px] md:mt-12 md:mb-8'></div>

                    <div className='md:flex md:items-center md:justify-between lg:justify-start'>
                      <div className='lg:mr-14'>
                        <p className='text-sm font-barlow-condensed tracking-[2.36px]'>AVG. DISTANCE</p>
                        <p className='text-[28px] font-bellefair text-white uppercase mt-1'>{destination.distance}</p>
                      </div>

                      <div className='mt-8 md:mt-0'>
                        <p className='text-sm font-barlow-condensed tracking-[2.36px] uppercase'>Est. travel time</p>
                        <p className='text-[28px] font-bellefair text-white uppercase mt-1'>{destination.time}</p>
                      </div>
                    </div>
                  </div>

                </div>
              ))
          }
        </div>

      </div>
    </div>
  )
}

export default Destination