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
        name: "Keyboard / Piano",
        icon: <GiMusicalKeyboard/>,
        color: "#ea7516",
        content:"The keyboard is one of the few instruments that allows you to instantly create and layer melodies, harmonies, and rhythms, making it an ideal tool for spontaneous music composition.",
        delay:0.5,
    },
    {
        id:2,
        name: "Drums",
        icon: <LiaDrumSolid/>,
        color: "#00c986",
        content:"Learning to play the drums helps improve coordination, rhythm, and timing, as drumming requires the synchronization of both hands and feet.",
        delay:0.3,
    },
    {
        id:3,
        name: "Ukulele",
        icon: <GiViolin/>,
        color: "#922aee",
        content:"Learning the ukulele offers a fun and accessible way to dive into music. It's relatively easy to pick up compared to other string instruments, making it a great choice for beginners.",
        delay:0.4,
    },
    {
        id:4,
        name: "Violin",
        icon: <GiViolin/>,
        color: "#0063ff",
        content:"The Violin instrument strengthens fine motor skills and enhances hand-eye coordination, as it demands careful finger placement and bowing technique. ",
        delay:0.2,
    },
    {
        id:5,
        name: "Guitar",
        icon: <LiaGuitarSolid/>,
        color: "#075267",
        content:"Learning to play the guitar boosts creativity, improves concentration, and enhances your sense of discipline. It’s a versatile instrument that connects people through music.",
        delay:0.6,
    },
    {
        id:6,
        name: "Vocals",
        icon: <MdOutlineKeyboardVoice/>,
        color: "#b93838",
        content:"Singing is a powerful form of self-expression to convey emotion and connect with others through music. It also boosts confidence, as mastering your voice can be incredibly empowering.",
        delay:0.7,
    },
]

const Instruments = () => {
    return (
        <div id='courses' className="dark:bg-gray-900 px-2 py-10">

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
                   <a target='_blank' href="https://forms.gle/egbfwaohMsYagBeC9"><FaArrowUpRightFromSquare className='text-orange-500 text-right cursor-pointer'/></a>
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