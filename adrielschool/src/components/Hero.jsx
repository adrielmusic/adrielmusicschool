import React from 'react'
import HeroImg from '../assets/website/heroImg.jpg'

const Hero = () => {
  return <>
  <main className='bg-white dark:bg-gray-950 dark:text-white duration-300'>
    <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/*Image Section*/}
            <div className='order-1 sm:order-2 relative'>
                <img className='rounded-lg' src={HeroImg} alt="" />
            </div>
            {/*Text Content Section*/}
            <div className='space-y-5 order-2 sm:order-1 xl:pr-40'>
                <h1 className='text-4xl sm:text-5xl font-semibold'>Learn your favourite Music with our {" "} <span className='text-primary'>Adriel School Of Music</span></h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, a molestiae praesentium beatae assumenda consequuntur laborum ab ut facere quod sit enim temporibus nesciunt dolores consequatur explicabo perspiciatis tempora doloremque?
                </p>
                <button className='btn-primary'>Book Demo Now</button>
            </div>
        </div>
    </div>
  </main>
  </>
}

export default Hero