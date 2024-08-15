import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className=' padding-container max-container w-full pb-24'>
        <Image src="/car.img1.png" alt='camp' width={50} height={50}/>
        <p className='regular-18 -mt-1 mb-3 text-green-50'>
          WE ARE HERE FOR YOU
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
           <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Make your Ride easy</h2>
           <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            In our country, not every one is rich, not every one have the 
            capability to buy a car. But don't be sad.. we are with you
            we will provide you the best car for your journey and make your
            every moment happy
           </p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full '>
        <Image src="/boat.png" alt='boat' width={1440} height={580} className='w-full object-cover object-center 2xl:rounded-5xl'/>

      </div>

    </section>
  )
}

export default Guide