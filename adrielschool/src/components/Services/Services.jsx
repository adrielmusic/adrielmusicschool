import React from 'react'
import CountUp from 'react-countup';
import { SlBadge } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { GiWorld } from "react-icons/gi";

const Achievements = [
    {
        id: 1,
        name: "Students Registered",
        ratings: "20",
        symbol: "K+",
        icons: <SlBadge/>,
    },
    {
        id: 2,
        name: "Ratings",
        ratings: "4",
        symbol: ".8",
        icons: <CiStar/>,
    },
    {
        id: 3,
        name: "Classes Delieverd",
        ratings: "89000",
        symbol: " hrs",
        icons: <SlBadge/>,
    },
    {
        id: 4,
        name: "Countries Students Learning",
        ratings: "9",
        symbol: "+",
        icons: <GiWorld/>,
    },
]

const Services = () => {
  return (
    <>
                <section className="bg-white dark:bg-gray-950 dark:text-white duration-300 flex flex-col py-5">
                <p className="font-semibold text-2xl md:text-3xl text-center">Our Outstanding Achievements</p>
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
                    {
                        Achievements.map(({ id, name, ratings, icons, symbol, }) => {
                            return (
                                <div key={id} className="flex flex-col justify-center items-center bg-[#ffffff] dark:bg-gray-900 px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center shadow-md">
                                    <div className="flex flex-row justify-center items-center">
                                        <CiStar className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"/>
                                        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl heading-9 text-primary ml-2">
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

export default Services