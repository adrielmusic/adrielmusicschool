import React from 'react'
import HeroImg from '../../assets/website/heroImg.jpg'
import Services from '../Services/Services'
import Reviews from '../Reviews/Reviews'
import Instruments from '../Instruments/Instruments'

const Hero = () => {
  return <>
  <main className='bg-white dark:bg-gray-950 dark:text-white duration-300'>
    <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/*Image Section*/}
            <div className='order-1 sm:order-2 relative'>
                <img className='rounded-lg' src={HeroImg} alt="" />
                <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-xl shadow-md absolute -bottom-5 -left-8">
                    <p>Online class</p>
                </div>
            </div>
            {/*Text Content Section*/}
            <div className='space-y-5 order-2 sm:order-1 xl:pr-40'>
                <h1 className='text-4xl sm:text-5xl font-semibold'> Where MUSIC comes to Life ! Bringing out the Talent in You  {" "} <span className='text-primary'>Adriel School Of Music</span></h1>
                <p>
                Adriel school of Music was Founded in 2014 , our school has become a vibrant community of passionate Students and dedicated Educators. At Adriel school of Music, our mission is to nurture the love of music  in students of all ages and skill levels.

                </p>
                <button className='btn-primary'>Book Free Demo Now</button>
            </div>
        </div>
    </div>
  </main>
  <Reviews/>
  <Services/>
  <Instruments/>
  </>
}

export default Hero