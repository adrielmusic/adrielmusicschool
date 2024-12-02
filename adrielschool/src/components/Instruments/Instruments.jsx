import React from 'react';
import {delay, motion} from 'framer-motion';
import { SlideLeft } from '../../utility/animation';
import { GiViolin } from "react-icons/gi";
import { LiaDrumSolid } from "react-icons/lia";
import { GiMusicalKeyboard } from "react-icons/gi";
import { LiaGuitarSolid } from "react-icons/lia";
import { IoRecordingOutline } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdLibraryMusic } from "react-icons/md";

const InstrumentsList = [
    {
        id:1,
        name: "Violin",
        icon: <GiViolin/>,
        color: "#0063ff",
        content:"Our experienced instructors focus on building a strong foundation in music theory, proper technique, and musical expression, helping you develop the skills to play with confidence.",
        delay:0.2,
    },
    {
        id:2,
        name: "Drums",
        icon: <LiaDrumSolid/>,
        color: "#00c986",
        content:"Our experienced instructors focus on building a strong foundation in music theory, proper technique, and musical expression, helping you develop the skills to play with confidence.",
        delay:0.3,
    },
    {
        id:3,
        name: "Ukulele",
        icon: <GiViolin/>,
        color: "#922aee",
        content:"Our experienced instructors focus on building a strong foundation in music theory, proper technique, and musical expression, helping you develop the skills to play with confidence.",
        delay:0.4,
    },
    {
        id:4,
        name: "Keyboard",
        icon: <GiMusicalKeyboard/>,
        color: "#ea7516",
        content:"Our experienced instructors focus on building a strong foundation in music theory, proper technique, and musical expression, helping you develop the skills to play with confidence.",
        delay:0.5,
    },
    {
        id:5,
        name: "Guitar",
        icon: <LiaGuitarSolid/>,
        color: "#075267",
        content:"Our experienced instructors focus on building a strong foundation in music theory, proper technique, and musical expression, helping you develop the skills to play with confidence.",
        delay:0.6,
    },
    {
        id:6,
        name: "Recording",
        icon: <IoRecordingOutline/>,
        color: "#986d1d",
        content:"Our experienced instructors focus on building a strong foundation in music theory, proper technique, and musical expression, helping you develop the skills to play with confidence.",
        delay:0.7,
    },
    {
        id:7,
        name: "Vocals",
        icon: <MdOutlineKeyboardVoice/>,
        color: "#b93838",
        content:"Our experienced instructors focus on building a strong foundation in music theory, proper technique, and musical expression, helping you develop the skills to play with confidence.",
        delay:0.8,
    },
    {
        id:8,
        name: "Mixing",
        icon: <HiMiniComputerDesktop/>,
        color: "#464646",
        content:"Our experienced instructors focus on building a strong foundation in music theory, proper technique, and musical expression, helping you develop the skills to play with confidence.",
        delay:0.9,
    },
    {
        id:9,
        name: "Music Production",
        icon: <MdLibraryMusic/>,
        color: "#464646",
        content:"Our experienced instructors focus on building a strong foundation in music theory, proper technique, and musical expression, helping you develop the skills to play with confidence.",
        delay:0.9,
    },
]

const Instruments = () => {
    return (
        <div className="dark:bg-gray-900 px-2 py-10">

  <div id="features" className="mx-auto max-w-6xl">
    <p className="text-center text-base font-semibold leading-7 dark:text-white text-orange-500">Courses</p>
    <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
      Learn Your Favourite Instruments
    </h2>
    <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
        {
            InstrumentsList.map((item)=>{
                return(
                    <motion.li 
                    variants={SlideLeft(item.delay)}
                    initial="hidden"
                    whileInView={"visible"} 
                    key={item.id} className="shadow-[0_0_22px_rgba(0,0,0,0.15)] rounded-xl px-6 py-8  bg-white dark:bg-gray-700 dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black">
                    <p className='mx-auto h-10 w-10 text-5xl'>{item.icon}</p>
                    <h3 className="my-3 font-display font-medium">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        {item.content}
                    </p>
                    <FaArrowUpRightFromSquare className='text-orange-500 text-right cursor-pointer'/>
                  </motion.li>
                )
            })
        }

    </ul>
  </div>

  <div>

  </div>
  </div>
    )
}

export default Instruments