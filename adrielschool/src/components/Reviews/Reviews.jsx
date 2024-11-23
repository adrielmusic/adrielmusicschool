import React from 'react'

const Achievements = [
    {
        id: 1,
        name: "Students Registered",
        ratings: "20K+",
        icons: '',
    },
    {
        id: 2,
        name: "Ratings",
        ratings: "4.8",
        icons: '',
    },
    {
        id: 3,
        name: "Classes Delieverd",
        ratings: "89000 hrs",
        icons: '',
    },
    {
        id: 4,
        name: "Countries Students Learning",
        ratings: "9+",
        icons: '',
    },
]
const Reviews = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-950 dark:text-white duration-300 flex flex-col py-5">
                <p className="font-semibold text-2xl md:text-3xl text-center">Our Outstanding Achievements</p>
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
                    {
                        Achievements.map(({ id, name, ratings, icons }) => {
                            return (
                                <div key={id} className="flex flex-col justify-center items-center bg-[#FFF6F3] dark:bg-gray-700 px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                                    <div className="flex flex-row justify-center items-center">
                                        <img src="" alt="" />
                                        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">{ratings}</p>
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

export default Reviews