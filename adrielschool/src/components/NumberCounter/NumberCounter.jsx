import React from 'react'
import CountUp from 'react-countup';
import { FaRegStar } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Achievements = [
  {
      id: 1,
      name: "Students Registered",
      ratings: "10",
      symbol: "K+",
      icons: <FaUserGraduate/>,
  },
  {
      id: 2,
      name: "Ratings",
      ratings: "4",
      symbol: ".8",
      icons: <FaStar/>,
  },
  {
      id: 3,
      name: "Classes Delieverd",
      ratings: "50",
      symbol: "K hrs+",
      icons: <LuBadgeCheck/>,
  },
  {
      id: 4,
      name: "Countries Students Learning",
      ratings: "12",
      symbol: "+",
      icons: <IoMdGlobe/>,
  },
]

const NumberCounter = () => {
    return (
      <>
      <section className="bg-white dark:bg-gray-950 dark:text-white duration-300 flex flex-col py-5">
          <p className="font-semibold text-2xl md:text-3xl text-center">Our Outstanding Achievements</p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
              {
                  Achievements.map(({ id, name, ratings, icons ,symbol}) => {
                      return (
                          <div key={id} className="flex flex-col justify-center items-center bg-[#ffffff] dark:bg-gray-900 px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center shadow-md">
                              <div className="flex flex-row justify-center items-center">
                                  <div className='flex flex-row justify-center items-center text-3xl text-gray-500 dark:text-white'>{icons}</div>
                                  <p className="font-bold text-2xl sm:text-4xl lg:text-4xl leading-9 text-primary ml-2">
                                      <CountUp
                                      start={0}
                                      end={ratings}
                                      suffix= {symbol}
                                      duration={3}
                                      enableScrollSpy={true}
                                      scrollSpyOnce={false}
                                      />
                                  </p>
                              </div>
                              <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">{name}</p>
                          </div>
                      )
                  })
              }
          </div>
      </section>
  </>
    )
}

export default NumberCounter