import React from 'react'
import OnlineTeach from '../../assets/videos/online-teach.mp4'
import OfflineTeach from '../../assets/Videos/offline-teach.mp4'
import Services from '../Services/Services'
import NumberCounter from '../NumberCounter/NumberCounter'
import Instruments from '../Instruments/Instruments'
import HeroCarousel from './HeroCarousel'
import Testimonial from '../Testimonial/Testimonial'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Banner from '../Banner/Banner';
import BannerImg from '../../assets/images/common/banner.jpg';
import BannerImg2 from '../../assets/images/common/banner2.png';
import NavbarBanner from '../Navbar/NavbarBanner'
import FAQ from '../FAQ/FAQ'
import Certifications from '../Certifications/Certifications'
import {NavLink, replace, useNavigate} from 'react-router-dom';

const slides = [
    {
    tag: "Online",
    img: OnlineTeach,
    },
    {
        tag: "Offline",
        img: OfflineTeach,
    },
];
const BannerData = {
    image: BannerImg,
    tag: "Learn Music at your Doorstep",
    title: "Personalized Professional Offline Tutor on Your Schedule",
    subtitle: "For anybody who wants to learn music but has timing constraints or is not willing to travel or have any kind of blockers - we got you covered ! We provide home tutors who come to your doorstep based on the time slot you choose and train you",
    link: "#",
};
const BannerData2 = {
    image: BannerImg2,
    tag: "Online One-One Teaching",
    title: "Personalized Professional Online Tutor on Your Schedule",
    subtitle: "We understand that life can be busy, so we offer flexible lesson times to fit your schedule, including weekends , mornings and evenings for online classes. We operate Globally and have tutors for every timezone.",
    link: "#",
};

const Hero = () => {

    const navigate = useNavigate();

  return <>
  <NavbarBanner/>
  <main className='bg-white dark:bg-gray-950 dark:text-white duration-300'>
    <div className="container min-h-[620px] flex pt-10 sm:pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/*Image Section*/}
            <div className='order-1 sm:order-2 relative'>
                <HeroCarousel autoSlide={true} autoSlideInterVal={8000}>
                {[
                    ...slides.map((s)=> <video className='rounded-lg' src={s.img} autoPlay muted loop></video>)
                ]}
                </HeroCarousel>



            </div>
            {/*Text Content Section*/}
            <div className='space-y-5 order-2 sm:order-1 xl:pr-40'>
                <h1 className='text-4xl pt-2 sm:text-5xl font-semibold'> Where Music comes to Life! Bringing out the Talent in You  {" "} <span className='text-primary'>Adriel School Of Music</span></h1>
                <p className="font-normal">
                Adriel school of Music was Founded in 2014, our school has become a vibrant community of passionate Students and dedicated Educators. At Adriel school of Music, our mission is to nurture the love of music  in students of all ages and skill levels.

                </p>
                <button onClick={()=> navigate('/contact', {replace:true})} className='btn-primary'>Book Demo Now</button>
            </div>
        </div>
    </div>
  </main>

  <NumberCounter/>
  <WhyChooseUs/>
  <Banner {...BannerData}/>
  <Banner {...BannerData2} reverse={true}/>
  <Instruments/>  
  <Testimonial/>
  <FAQ/>
  </>
}

export default Hero