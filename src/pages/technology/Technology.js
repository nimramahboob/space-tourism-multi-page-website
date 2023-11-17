import React, { useState } from 'react'
import { TechnologyData } from '../../data/technologyData'

function Technology() {
  const [technologyData, setTechnologyData] = useState(TechnologyData)
  const [technologyId, setTechnologyId] = useState(1)

  return (
    <div className='lg:flex lg:flex-col lg:justify-end lg:items-end'>
      <div className='technology-image'></div>

      <div className='lg:w-11/12'>

        <h1 className='font-barlow-condensed text-base uppercase tracking-[2.7px] text-white text-center my-2 md:text-xl md:tracking-[3.38px] md:mt-10 md:mb-8 md:text-left md:ml-8 lg:my-14 lg:text-[28px] lg:tracking-[4.27px]'>
          <span className='opacity-[.25] font-bold'>03 </span>Space launch 101
        </h1>

        <div className='lg:w-full'>
          {
            technologyData.filter(technology => technology.id === technologyId)
              .map(technology => (
                <div key={technology.id} className='flex flex-col items-center lg:flex-row lg:gap-24'>

                  <div className='mt-8 w-full h-[170px] md:h-[310px] lg:order-2 lg:h-[572px] flex-[3_3_0%] lg:mt-0'>
                    <img src={technology.image} alt={technology.name}
                      className='w-full h-full object-cover'/>
                  </div>

                  <div className='md:w-3/5 md:m-auto md:flex md:flex-col md:items-center lg:order-1 lg:flex-row flex-[4_4_0%] lg:gap-14'>

                    <div className='flex items-center justify-center gap-4 mt-[34px] mb-[26px] cursor-pointer md:mt-[56px] md:mb-[44px] lg:flex-col lg:mt-0 lg:mb-0 lg:gap-8'>
                      {technologyData.map(technology => (
                        <div key={technology.id}
                          className={`w-[40px] h-[40px] rounded-full border-grey border-[1px] flex justify-center items-center md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] ${technology.id === technologyId ? 'bg-white  text-black border-none' : 'bg-none text-white'}`}
                          onClick={() => setTechnologyId(technology.id)}
                        >
                          <p className='text-base tracking-[1px] md:text-2xl md:tracking-[1.5px] lg:text-[32px]'>{technology.id}</p>
                        </div>
                      ))}
                    </div>

                    <div className='mx-7 text-center lg:text-left'>
                      <p className='text-sm tracking-[2.36px] font-barlow-condensed uppercase md:text-base md:tracking-[2.7px]'>THE TERMINOLOGY…</p>
                      <h2 className='font-bellefair text-2xl text-white mt-[9px] md:text-[40px] md:mt-4 lg:text-[56px] lg:mt-5'>{technology.name}</h2>
                      <p className='mt-4 text-[15px] md:text-base md:mt-4 lg:[18px] lg:mt-[17px]'>{technology.description}</p>
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

export default Technology