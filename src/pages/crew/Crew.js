import React, { useState } from 'react'
import { CrewData } from '../../data/crewData'

function Crew() {
  const [crewData, setcrewData] = useState(CrewData)
  const [crewPersonId, setCrewPersonId] = useState(1)

  return (
    <div className=''>

      <div className='crew-image'></div>

      <div className='mx-7 md:mx-8 lg:w-10/12 lg:m-auto'>

        <h1 className='font-barlow-condensed text-base uppercase tracking-[2.7px] text-white text-center my-2 md:text-xl md:tracking-[3.38px] md:my-10 md:text-left lg:my-14 lg:text-[28px] lg:tracking-[4.27px]'>
          <span className='opacity-[.25] font-bold'>02 </span>Meet your crew
        </h1>

        <div className='md:w-4/6 m-auto md:mt-14 lg:w-full lg:m-auto lg:mt-0'>
          {
            crewData.filter(person => person.id === crewPersonId)
              .map(person => (
                <div key={person.id} className='text-center flex flex-col items-center lg:flex-row lg:justify-between lg:text-left'>

                  <div className='mt-8 md:order-2 md:mt-0 md:bottom-0 lg:order-2 h-[222px] md:h-[500px] lg:h-[700px]  lg:flex-1  lg:-mt-24 lg:flex lg:items-center lg:flex-row lg:justify-end'>
                    <img src={person.image} alt={person.name} className='h-full' />
                  </div>

                  <div className='w-full h-[1px] bg-dark-purple md:hidden'></div>


                  <div className='md:order-1 flex items-center flex-col lg:order-1 lg:flex-1 lg:items-start'>
                    <div className='flex gap-3 my-8 md:order-2 md:my-10 cursor-pointer lg:mt-28'>
                      {crewData.map(person => (
                        <div
                          className={`w-[10px] h-[10px] lg-w-[15px] lg-h-[15px] bg-white rounded-full 
                  ${person.id === crewPersonId ? 'opacity-100' : 'opacity-[0.17]'}`}
                          onClick={() => setCrewPersonId(person.id)}
                        >

                        </div>
                      ))}
                    </div>

                    <div className='md:order-1 lg:order-1'>
                      <p className='font-bellefair text-base uppercase text-white opacity-50 md:text-2xl lg:text-[32px]'>{person.occupation}</p>

                      <h2 className='font-bellefair text-2xl uppercase text-white mt-2 md:text-[40px] md:mt-3 lg:mt-5 lg:text-[56px] lg:leading-tight'>{person.name}</h2>

                      <p className='text-[15px] mt-4 md:text-base lg:text-lg lg:mr-40'>{person.introduction}</p>
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

export default Crew