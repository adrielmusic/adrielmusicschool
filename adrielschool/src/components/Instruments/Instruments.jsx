import React from 'react'
import { GiGuitarHead } from "react-icons/gi";
import { LiaDrumSolid } from "react-icons/lia";
import { GiViolin } from "react-icons/gi";
import { GiMusicalKeyboard } from "react-icons/gi";
const Instruments = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-950 dark:text-white duration-300 py-12 sm:py-12 lg:py-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl mb-6">We are just
                            getting started!</h2>
                        <p className="mb-4">We are teaching most of the musical instruments</p>

                    </div>
                    <div
                        className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                        <div className="relative">
                            <div className="absolute -inset-1">
                                <div
                                    className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                </div>
                            </div>
                            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                                <div className="p-9">
                                    <GiMusicalKeyboard className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"/>
                                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Piano</h3>
                                    <p className="mt-6 text-base text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sint nulla pariatur ab cumque exercitationem, consequuntur, aliquid praesentium quibusdam corrupti numquam laboriosam accusamus minima, illum a. Minima at ipsam odit!</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white shadow-md rounded-xl">
                            <div className="p-9">
                            <GiGuitarHead  className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"/>
                  
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Guitar</h3>
                                <p className="mt-6 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iusto velit dolorem id molestias. Beatae qui eius rerum cumque pariatur repellat, voluptas iure delectus quaerat amet, enim reiciendis! Ducimus, debitis.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-1">
                                <div
                                    className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                </div>
                            </div>
                            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                                <div className="p-9">
                                    <LiaDrumSolid className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"/>
                                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Drums</h3>
                                    <p className="mt-6 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae officiis odit atque error qui labore! Laudantium cum culpa possimus eius atque ullam suscipit rerum, dolore, reiciendis, eum laborum unde voluptatibus?</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white shadow-md rounded-xl">
                            <div className="p-9">
                                <GiViolin className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"/>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Violin</h3>
                                <p className="mt-6 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cumque cupiditate libero earum, voluptates sapiente suscipit fugit voluptatem est explicabo nemo quia molestias veniam error quaerat ipsum omnis numquam deleniti?</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-1">
                                <div
                                    className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                </div>
                            </div>
                            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                                <div className="p-9">
                                    <GiMusicalKeyboard className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"/>
                                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Keyboard
                                    </h3>
                                    <p className="mt-6 text-base text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex magni dicta, amet eveniet quam dolores atque veniam aspernatur, ipsa sunt neque illum dolorum esse placeat, cumque commodi. Nihil, culpa magnam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white shadow-md rounded-xl">
                            <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                                <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                                <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                                </rect>
                                <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                                <path
                                    d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                                    stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                                <path
                                    d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                                    stroke="#111827" stroke-width="2"></path>
                            </svg>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Saxaphone</h3>
                                <p className="mt-6 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, alias laborum fugiat earum libero possimus, molestiae quaerat esse similique veritatis nobis obcaecati? Alias delectus deleniti neque corporis aperiam autem dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-white dark:bg-gray-950 dark:text-white">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
        <p className="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase text-gray-400 tracking-wider">
            We are providing Certification
        </p>

        <a className="flex items-center justify-center text-gray-400 hover:text-gray-200" href="https://ploi.io"
            target="_blank" title="Ploi">
            <svg className="w-auto h-6 fill-current" viewBox="0 0 253 93.3">
                <path
                    d="M25.7 66a11.4 11.4 0 01-9.5-4.7q-3.6-4.7-3.7-12.6T16.2 36a11.4 11.4 0 019.5-4.7 11.4 11.4 0 019.6 4.7Q39 40.7 39 48.7t-3.6 12.6a11.5 11.5 0 01-9.6 4.7zm3.8-45.1a18.9 18.9 0 00-10.2 2.7 18 18 0 00-6.7 7.5h-.3v-9.3H0v71.5h12.6V66.5h.3a17 17 0 006.6 7.2 19.4 19.4 0 0010.2 2.6q10.2 0 16.1-7.4t6-20.3q0-12.9-6-20.4T29.5 21zM59.2 75.5h12.6V2.5H59.2v73.1zM105.3 66.6a11.5 11.5 0 01-9.6-4.7Q92 57.2 92 48.7t3.6-13.3a12.1 12.1 0 0119.2 0q3.6 4.7 3.6 13.3t-3.6 13.2a11.5 11.5 0 01-9.6 4.7zm0 10q11.8 0 19-7.4t7-20.6q0-13-7.1-20.4t-19-7.5q-11.7 0-18.8 7.5t-7.1 20.4q0 13.2 7 20.6t19 7.4zM145 13.7a6.7 6.7 0 004.9-2 6.6 6.6 0 002-4.8 6.6 6.6 0 00-2-4.9 6.8 6.8 0 00-5-2 6.7 6.7 0 00-4.8 2 6.5 6.5 0 00-2 4.9 6.5 6.5 0 002 4.8 6.6 6.6 0 004.8 2zm-6.3 61.9h12.6V21.8h-12.7v53.8zM168.8 76a5.7 5.7 0 10-4.1-1.6 5.6 5.6 0 004 1.7zM191.5 13.4a5.3 5.3 0 004-1.6A5.3 5.3 0 00197 8a5.5 5.5 0 10-11 0 5.3 5.3 0 001.5 4 5.3 5.3 0 004 1.5zm-4.4 62.1h8.8V22.8H187v52.8zM228.6 68.7a13.8 13.8 0 01-11.2-5q-4.3-5.2-4.3-14.5t4.3-14.4a14.9 14.9 0 0122.4 0q4.2 5 4.2 14.4t-4.2 14.4a13.8 13.8 0 01-11.2 5.1zm0 7.8q10.9 0 17.6-7.4t6.8-20q0-12.5-6.8-19.9T228.7 22q-11 0-17.7 7.3t-6.7 20q0 12.6 6.7 20t17.7 7.3z">
                </path>
            </svg>
        </a>
      </div>
</div>
        </>
    )
}

export default Instruments