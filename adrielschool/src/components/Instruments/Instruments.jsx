import React from 'react'
import { GiGuitarHead } from "react-icons/gi";
import { LiaDrumSolid } from "react-icons/lia";
import { GiViolin } from "react-icons/gi";
import { GiMusicalKeyboard } from "react-icons/gi";
const Instruments = () => {
    return (
        <>

            <div class="max-w-screen-[1440px] mx-auto bg-gray-900">
                <p class="text-4xl md:text-4xl font-semibold  mb-5 ml-4">Instruments</p>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-2">

                    <div class="p-4 bg-white shadow border rounded-[10px]">

                        <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 4V5M12 19V20M5.07178 8L5.9378 8.5M18.0622 15.5L18.9282 16M18.9282 7.99999L18.0622 8.49999M5.93781 15.5L5.07178 16M16 12C16 9.79086 14.2091 8 12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12Z"
                                    stroke="#252432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                        <p class="font-[Inter] text-lg text-[#252432] my-5">Web Design</p>

                        <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                            stunning, user-centric websites that elevate your brand and engage your audience.</p>

                    </div>

                    <div class="p-4 bg-white shadow border rounded-[10px]">

                        <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.2442 4.86956C11.0022 3.47968 12.9979 3.47968 13.7559 4.86956L14.9723 7.09993C15.2599 7.62738 15.7694 7.99758 16.36 8.10817L18.8571 8.57579C20.4132 8.86719 21.0299 10.7653 19.9422 11.9157L18.1969 13.7617C17.7842 14.1983 17.5895 14.7973 17.6668 15.3931L17.9938 17.9125C18.1975 19.4824 16.5829 20.6555 15.1527 19.9766L12.8577 18.8871C12.3149 18.6295 11.6851 18.6295 11.1424 18.8871L8.84732 19.9766C7.41713 20.6555 5.80257 19.4824 6.00629 17.9125L6.3332 15.3931C6.41051 14.7973 6.21588 14.1983 5.80313 13.7617L4.05781 11.9157C2.97019 10.7653 3.58689 8.86719 5.14299 8.57579L7.64007 8.10817C8.2306 7.99758 8.74014 7.62738 9.02779 7.09993L10.2442 4.86956Z"
                                    stroke="#252432" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>

                        </button>

                        <p class="font-[Inter] text-lg text-[#252432] my-5">UI/UX Design</p>

                        <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                            stunning, user-centric websites that elevate your brand and engage your audience.</p>

                    </div>

                    <div class="p-4 bg-white shadow border rounded-[10px]">

                        <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 18H6C4.34315 18 3 16.6569 3 15V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V15C21 16.6569 19.6569 18 18 18H14M10 18V21M10 18H14M14 18V21M10 21H14M10 21H9M14 21H15"
                                    stroke="#252432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>

                        <p class="font-[Inter] text-lg text-[#252432] my-5">Responsive Design</p>

                        <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                            stunning, user-centric websites that elevate your brand and engage your audience.</p>

                    </div>


                    <div class="p-4 bg-white shadow border rounded-[10px] lg:row-span-2">

                        <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.01005 11.75C9.42426 11.75 9.76005 11.4142 9.76005 11C9.76005 10.5858 9.42426 10.25 9.01005 10.25V11.75ZM9.00005 10.25C8.58583 10.25 8.25005 10.5858 8.25005 11C8.25005 11.4142 8.58583 11.75 9.00005 11.75V10.25ZM15.01 11.75C15.4243 11.75 15.76 11.4142 15.76 11C15.76 10.5858 15.4243 10.25 15.01 10.25V11.75ZM15 10.25C14.5858 10.25 14.25 10.5858 14.25 11C14.25 11.4142 14.5858 11.75 15 11.75V10.25ZM6.77814 8.75H17.222V7.25H6.77814V8.75ZM19.4653 10.8274L20.0038 17.8274L21.4994 17.7124L20.9609 10.7124L19.4653 10.8274ZM17.7604 20.25H6.23968V21.75H17.7604V20.25ZM3.99631 17.8274L4.53477 10.8274L3.03919 10.7124L2.50073 17.7124L3.99631 17.8274ZM6.23968 20.25C4.92903 20.25 3.89579 19.1342 3.99631 17.8274L2.50073 17.7124C2.33319 19.8904 4.05527 21.75 6.23968 21.75V20.25ZM20.0038 17.8274C20.1043 19.1342 19.0711 20.25 17.7604 20.25V21.75C19.9448 21.75 21.6669 19.8904 21.4994 17.7124L20.0038 17.8274ZM17.222 8.75C18.3977 8.75 19.3752 9.65519 19.4653 10.8274L20.9609 10.7124C20.8106 8.75865 19.1815 7.25 17.222 7.25V8.75ZM6.77814 7.25C4.81863 7.25 3.18947 8.75865 3.03919 10.7124L4.53477 10.8274C4.62494 9.65519 5.60244 8.75 6.77814 8.75V7.25ZM14.25 6V8H15.75V6H14.25ZM9.75005 8V6H8.25005V8H9.75005ZM12 3.75C13.2427 3.75 14.25 4.75736 14.25 6H15.75C15.75 3.92893 14.0711 2.25 12 2.25V3.75ZM12 2.25C9.92898 2.25 8.25005 3.92893 8.25005 6H9.75005C9.75005 4.75736 10.7574 3.75 12 3.75V2.25ZM9.01005 10.25H9.00005V11.75H9.01005V10.25ZM15.01 10.25H15V11.75H15.01V10.25Z"
                                    fill="#252432" />
                            </svg>

                        </button>

                        <p class="font-[Inter] text-lg text-[#252432] my-5">E-commerce Solutions:</p>

                        <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                            stunning, user-centric websites that elevate your brand and engage your audience.</p>

                        <img class="hidden lg:block mt-5 rounded-[10px]" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Pictures" />

                    </div>

                    <div class="p-4 bg-white shadow border rounded-[10px] lg:col-span-2 flex justify-between gap-5">

                        <div>
                            <button class="p-3 py-4 bg-[#F5F8FF] rounded-[10px] cursor-default">
                                <svg width="21" height="13" viewBox="0 0 21 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21 0L14.3528 12.8765H8.05945L10.8101 7.61233H10.6832C8.37078 10.5927 4.91823 12.5553 0 13V7.6855C0 7.6855 3.1455 7.50067 4.99585 5.57067H0.0023098V0H5.71431L5.61596 4.58333H5.74275L8.03687 0H12.5781L12.2834 4.555H12.4103L14.7885 0H21Z"
                                        fill="#5B54FF" />
                                </svg>

                            </button>

                            <p class="font-[Inter] text-lg text-[#252432] my-5">Webflow</p>

                            <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                                stunning, user-centric websites that elevate your brand and engage your audience.</p>

                        </div>
                        <div>
                            <img class="hidden lg:block mt-5 rounded-[10px]" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=400" alt="Pictures" />
                        </div>

                    </div>


                    <div class="p-4 bg-white shadow border rounded-[10px]">

                        <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 9L9.53354 10.5201C10.7287 11.2372 10.8423 12.9262 9.75394 13.7968L7 16M12 16H17M6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21Z"
                                    stroke="#252432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>

                        <p class="font-[Inter] text-lg text-[#252432] my-5">Custom Development</p>

                        <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                            stunning, user-centric websites that elevate your brand and engage your audience.</p>

                    </div>

                </div>
            </div>

            <div className="bg-white dark:bg-gray-950 dark:text-white">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
                    <p className="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase text-gray-400 tracking-wider">
                        Our Course Certification
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