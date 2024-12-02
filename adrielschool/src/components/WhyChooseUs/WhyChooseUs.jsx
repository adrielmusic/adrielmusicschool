import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { RiPresentationLine } from "react-icons/ri";
import {delay, motion} from 'framer-motion';
import { SlideLeft } from '../../utility/animation';

const WhyChooseData = [
    {
        id:1,
        title: "One-One Teaching",
        desc: "All our special education experts have a experience in music industry.",
        link: "#",
        icon: <FaChalkboardTeacher/>,
        bgColor: "#0063ff",
        delay: 0.3,
    },
    {
        id:2,
        title: "24/7 Tutor Availablity",
        desc: "All our special education experts have a experience in music industry.",
        link: "#",
        icon: <MdEventAvailable/>,
        bgColor: "#73bc00",
        delay: 0.6,
    },
    {
        id:3,
        title: "Interative Session",
        desc: "All our special education experts have a experience in music industry.",
        link: "#",
        icon: <RiPresentationLine/>,
        bgColor: "#fa6400",
        delay: 0.9,
    },
    {
        id:4,
        title: "Affordable Prices",
        desc: "All our special education experts have a experience in music industry.",
        link: "#",
        icon: <MdPriceChange/>,
        bgColor: "#fe6baa",
        delay: 0.9,
    },
]
const WhyChooseUs = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
        <div className="container py-12">
            {/*Headder Section */}
            <div className='space-y-4 p-6  text-center max-w-[500px] mx-auto mb-5'>
                <h1 className='uppercase font-semibold text-orange-600'>Why Choose Us</h1>
                <p className='font-semibold text-3xl'>Benefits of learning Instruments with us</p>
            </div>
            {/*Card Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    WhyChooseData.map((item)=>{
                        return(
                            <motion.div 
                            variants={SlideLeft(item.delay)}
                            initial="hidden"
                            whileInView={"visible"}
                            className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] dark:bg-gray-700">
                                {/*Icon Section */}
                                <div className='w-10 h-10 rounded-lg flex justify-center items-center text-white'>
                                    <div className='text-2xl' style={{color:item.bgColor}}>{item.icon}</div>
                                </div>
                                <p className='text-2xl font-semibold'>{item.title}</p>
                                <p className='text-sm text-gray-500 dark:text-white'>{item.desc}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs