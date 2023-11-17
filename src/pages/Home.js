import React from 'react'
import coverImage from '../images/close.svg'

function Home() {
    return (
        <div >
            {/* <img
                src={coverImage}
                alt='home image'
                className='-z-50 absolute h-full bg-cover top-0 left-0'
            /> */}
            <div src='' className='home-image' />

            <div className='mt-5 flex flex-col items-center text-center px-7 md:w-3/5 md:m-auto md:px-0 md:mt-24 lg:flex lg:flex-row lg:text-left lg:w-4/5 lg:justify-between'>
                <div className='lg:flex-1'>
                    <p className='font-barlow-condensed text-base tracking-[2.7px] md:text-xl md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]'>SO, YOU WANT TO TRAVEL TO</p>
                    <h2 className='font-bellefair text-[80px] text-white mt-2 md:text-[150px] md:mt-0 md:leading-snug lg:-ml-3'>SPACE</h2>
                    <p className='text-[15px] mt-3 md:text-base md:mt-0 lg:text-lg lg:mt-0 lg:mr-24'>Letâ€™s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because weâ€™ll give you a truly out of this world experience!</p>
                </div>
                <div className='lg:flex-1 flex items-end justify-end'>
                <div className='w-[150px] h-[150px] md:w-[242px] md:h-[242px] rounded-full bg-white flex items-center justify-center mt-24 md:mt-36 lg:w-[274px] lg:h-[274px]'>
                    <p className='font-bellefair text-xl tracking-[1.25px] text-dark md:text-[32px] md:tracking-[2px]'>EXPLORE</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home