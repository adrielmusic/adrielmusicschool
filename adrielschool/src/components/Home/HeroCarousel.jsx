import React, { useEffect, useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { BiChevronLeft } from 'react-icons/bi'

const HeroCarousel = ({children: slides, autoSlide=false, autoSlideInterVal = 10000, }) => {

    const [curr, setCurr] = useState(0)
    const prev = () => setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1))

    useEffect(()=>{
        if(!autoSlide) return
        const sildeInterval = setInterval(next, autoSlideInterVal)
        return () => clearInterval(sildeInterval);
    }, [])


  return <>
    <div className=' overflow-hidden'>
        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%` }}>{slides}</div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
            <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={prev}>
                <BiChevronLeft size={40} />
            </button>
            <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={next}>
                <BiChevronRight size={40} />
            </button>
        </div>


        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {slides.map((_, i)=>(
                    <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr == i ? "p-2" : "bg-opacity-50"}`}
                    />
                ))}
            </div>
        </div>

        <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-xl shadow-md absolute -bottom-5 -left-8">
                    <p className='text-center'>We Offer</p>
                    <p><span className={`font-bold ${curr == 1 ? "text-green-600" : "text-orange-500"}`}>{curr == 1 ? "Offline" : "Online"}</span> Class</p>
       </div>
    </div>





    </>
}

export default HeroCarousel