import React from 'react'
import OnlineTeach from '../../assets/Videos/online-teach.mp4'
import OfflineTeach from '../../assets/Videos/offline-teach.mp4'
import Services from '../Services/Services'
import NumberCounter from '../NumberCounter/NumberCounter'
import Instruments from '../Instruments/Instruments'
import HeroCarousel from './HeroCarousel'
import Testimonial from '../Testimonial/Testimonial'

const slides = [OfflineTeach, OnlineTeach];

const Hero = () => {

  return <>
  <main className='bg-white dark:bg-gray-950 dark:text-white duration-300'>
    <div className="container min-h-[620px] flex pt-10 sm:pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/*Image Section*/}
            <div className='order-1 sm:order-2 relative'>
                <HeroCarousel autoSlide={true} autoSlideInterVal={8000}>
                {[
                    ...slides.map((s)=> <video className='rounded-lg' src={s} autoPlay muted loop></video>)
                ]}
                </HeroCarousel>

                <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-xl shadow-md absolute -bottom-5 -left-8">
                    <p className='text-center'>We Offer</p>
                    <p>Online Class</p>
                </div>

            </div>
            {/*Text Content Section*/}
            <div className='space-y-5 order-2 sm:order-1 xl:pr-40'>
                <h1 className='text-4xl sm:text-5xl font-semibold'> Where Music comes to Life! Bringing out the Talent in You  {" "} <span className='text-primary'>Adriel School Of Music</span></h1>
                <p className="font-normal">
                Adriel school of Music was Founded in 2014, our school has become a vibrant community of passionate Students and dedicated Educators. At Adriel school of Music, our mission is to nurture the love of music  in students of all ages and skill levels.

                </p>
                <button className='btn-primary'>Book Demo Now</button>
            </div>
        </div>
    </div>
  </main>

  <NumberCounter/>
  <Services/>
  <Instruments/>   
  <Testimonial/>
  </>
}

export default Hero