import React from 'react'
import OnlineTeach from '../../assets/videos/online-teach.mp4'
import OfflineTeach from '../../assets/Videos/offline-teach.mp4'
import OneToOneTeach from '../../assets/Videos/one-one-teach.mp4'
import NumberCounter from '../NumberCounter/NumberCounter'
import Courses from '../Courses/Courses'
import HeroCarousel from './HeroCarousel'
import Testimonial from '../Testimonial/Testimonial'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Banner from '../Banner/Banner';
import BannerImg from '../../assets/images/common/banner.jpg';
import BannerImg2 from '../../assets/images/common/banner4.jpg';
import BannerImg3 from '../../assets/images/common/banner3.jpg';
import NavbarBanner from '../Navbar/NavbarBanner'
import Certifications from '../Certifications/Certifications'
import {NavLink, replace, useNavigate} from 'react-router-dom';
import FooterBanner from '../Footer/FooterBanner'
import OurTeam from '../OurTeam.jsx/OurTeam'

const slides = [
    {
    tag: "Online",
    img: OnlineTeach,
    },
    {
        tag: "one-on-one",
        img: OneToOneTeach,
    },
    {
        tag: "Offline",
        img: OfflineTeach,
    },
];
const BannerData = {
    image: BannerImg,
    tag: "Learn Music at your Doorstep",
    title: "Customized Professional Offline Tutor on Your Schedule",
    subtitle: "At Adriel School Of Music, we are committed to providing high-quality home tutoring that delivers results. We believe that learning should be fun, engaging, and tailored to each student’s unique needs. With our team of professional tutors, we make sure every student has the tools they need to succeed, right from the comfort of their own home.",
    link: "/courses",
};
const BannerData2 = {
    image: BannerImg3,
    tag: "Offline Teaching",
    title: "Professional Offline Classroom Teaching",
    subtitle: "We also offer classroom training at our center. We have individual classes and also group classes where our top-notch tutors handle classes. Our offline training also provides a dynamic and enriching environment that combines individual growth with social and musical interaction, leading to well-rounded musicianship and personal development.",
    link: "/courses",
};


const BannerData3 = {
    image: BannerImg2,
    tag: "Online Teaching",
    title: "Customized Professional Online Tutor on Your Schedule",
    subtitle: "We operate Globally and have tutors for every timezone, we ensure our lessons are delivered perfectly even if the students are connected remotely. We provide a seamless experience to the students when it comes to sharing the screen, assignments, and so on. Our main goal is to keep the class as fun, interactive, and engaging as much as possible",
    link: "/courses",
};
const Hero = () => {

    const navigate = useNavigate();

  return <>
  <NavbarBanner/>
  <main className='bg-white dark:bg-gray-950 dark:text-white duration-300'>
    <div className="container min-h-[620px] flex pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
            {/*Image Section*/}
            <div className='order-1 lg:order-2 relative rounded-lg'>
                <HeroCarousel autoSlide={true} autoSlideInterVal={8000}>
                {[
                    ...slides.map((s)=> <video className='rounded-lg' src={s.img} playsInline preload autoPlay muted loop webkit-playsinline></video>)
                ]}
                </HeroCarousel>



            </div>
            {/*Text Content Section*/}
            <div className='space-y-5 order-2 sm:order-1 xl:pr-40'>
                <h1 className='text-3xl pt-2 sm:text-4xl font-semibold'> Where Music comes to Life! Bringing out the Talent in You  {" "} <span className='text-primary'>Adriel School Of Music</span></h1>
                <p className="font-normal">
                 Adriel School Of Music has become a vibrant community of passionate Students and dedicated Educators. We are one of the best music schools in Bangalore, we also focus on sending tutors to your doorstep. Our mission is to nurture the love of music in students of all ages and skill levels.
                </p>
                {/*<button onClick={()=> navigate('/contact', {replace:true})} className='btn-primary'><a target='_blank' href="https://forms.gle/egbfwaohMsYagBeC9">Book Class Now</a></button>*/}
                <button className='btn-primary'><a target='_blank' href="https://forms.gle/egbfwaohMsYagBeC9">Book Class Now</a></button>
            </div>
        </div>
    </div>
  </main>

  <NumberCounter/>
  <WhyChooseUs/>
  <Banner {...BannerData}/>
  <Banner {...BannerData2} reverse={true}/>
  <Banner {...BannerData3}/>
  <Courses/>  
  <Certifications/>
  <Testimonial/>
  <OurTeam/>
  <FooterBanner/>



  </>
}

export default Hero