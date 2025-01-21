import React from 'react'
import GlobeImg from '../../assets/images/common/globe.jpg'
import MaleAvatar from '../../assets/images/common/male-avatar.jpg'
import BannerImg from '../../assets/images/common/banner.jpg';
import BannerImg2 from '../../assets/images/common/banner2.png';

const BannerData = {
    image: BannerImg,
    tag: "OUR STORY",
    title: "LOREAM ASAS  AS AS AS AS AS",
    subtitle: "Founded by Mr.Solomon Raj K , who is a Mechanical Engineer by Profession and also a well trained certified pianist ,music producer and a passionate Music educator, Adriel School of Music was born out of a vision to make the music education accessible and enjoyable for all irrespective of their location, with experience in teaching and performing, we bring a deep Love of music into every lesson",
    link: "/courses",
};
const BannerData2 = {
    image: BannerImg2,
    tag: "OUR VALUES",
    title: "LOREAM ASAS  AS AS AS AS A",
    subtitle: "We believe that each student is unique and deserves a personalized approach that caters to their learning style and musical interests. We customize the curriculum based on every student’s need.",
    link: "/courses",
};

const AboutUs = () => {
  return (

    <div className="bg-gray-100 pb-4 dark:bg-gray-900 text-black dark:text-white">

      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>



    <section  className="py-4 px-4">
        <h2 className="text-xl font-bold">WHO WE ARE?</h2>
        <p className="pt-2">Adriel School Of Music is where passion for music meets exceptional education! Established in <span className='font-bold'>2014</span>, we have been nurturing talent and inspiring creativity for over 10 years. Our music school is dedicated to providing top-quality music education in a fun, supportive, and engaging environment for students of all ages and skill levels. Our school has become a vibrant community of passionate Students and dedicated Educators. We are one of the best music schools in Bangalore, we also focus on sending tutors to your doorstep. We offer Offline classes, Online classes and send tutors to your doorstep.</p>
    </section>




    <section  className="py-4 px-4">
        <h2 className="text-xl font-bold text-orange-400">What We Do?</h2>
        <p className=" pt-2">Adriel School Of Music has trained more than a thousand passionate students online and offline from different countries who have succeeded in their musical journeys as performers and talented musicians. We are a group of well-trained certified tutors who are experts at piano/keyboard, violin, Drums, Vocals, Guitar, and Ukulele.</p>
        
    </section>


    <section className="bg-primary text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          " To redefine music education through innovative teaching methods and technology, create awareness and to nourish future generations and give them an environment to learn and love music "
        </p>
      </section>



    <section className="text-center py-12 px-4">
      <h2 className="text-2xl font-bold ">Mission And Values</h2>
      <p className="mt-4 max-w-2xl mx-auto">
      At Adriel School Of Music, our mission is to nurture the love of music in students of all ages and skill levels.
      </p>
      <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
        <div className="transition transform hover:scale-110">
          <h3 className="text-xl font-bold" >12+</h3>
          <p className="text-orange-400">Countries</p>
        </div>
        <div className="transition transform hover:scale-110">
          <h3 className="text-xl font-bold" >10+</h3>
          <p className="text-orange-400">Years of Experience</p>
        </div>
      </div>
    </section>



    <section id="testimonies" className="pt-12 dark:bg-gray-900 bg-gray-200">
    <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                <div
                    className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                    Words from Others
                </div>
                <h1 className="mb-5 text-3xl font-semibold text-black dark:text-white md:text-center md:text-5xl">
                    It's not just us.
                </h1>
                <p className="text-xl text-orange-400 md:text-center md:text-2xl">
                    Here's what others have to say about us.
                </p>
            </div>
        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">


            <ul className="space-y-8">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={GlobeImg}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Harini Muthu</h3>
                                        <p className="text-gray-500 text-md">Student</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">I’ve learned to play keyboard here. Had 1:1 sessions and it was great experience. Solomon was the trainer for me. His classNamees were more practical and easy to get along with. The classNamees were flexible too. It was worth time and money!!</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={MaleAvatar}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Zackirunissha Gopinathan</h3>
                                        <p className="text-gray-500 text-md">Parent</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">My son has been taking online piano classNamees from India while living in the USA, and the experience has been excellent. The instructor is knowledgeable and provides clear, structured lessons. The timing works well despite the time difference, and the platform is reliable. The course offers great value, especially given the personalized attention. Overall, I highly recommend it for anyone seeking quality piano instruction online.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={GlobeImg}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Ajan Subramanian</h3>
                                        <p className="text-gray-500 text-md">Student</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Solomon Sir was extremely patient with me. He taught me the basics of music theory in a short time span and was very attentive to my needs. I highly recommend him to any beginners who are starting to learn piano at an older age.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={GlobeImg}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Nitya Pillai</h3>
                                        <p className="text-gray-500 text-md">Parent</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Solomon is a dedicated, passionate piano teacher. My daughter and I have been learning from him for a few months and he’s great at understanding the student’s level and tailoring the instruction appropriately. The songs are selected based on the student’s interest and goals and the difficulty level is adjusted in a way to keep the students engaged. He’s great with children and adults alike.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul className="hidden space-y-8 sm:block">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={GlobeImg}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Sahasra S</h3>
                                        <p className="text-gray-500 text-md">Parent</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Solomon Sir is the best keyboard tutor who teaches fundamentals which is very essential for the kids so that they will remember the concepts easily.. He found my kids talent and now my daughter is a record holder in India book of records for finding the notes by hearing the sound.. He trained my kid well and gave a good support and encouraged my kid and it is now a proud memorable moment for our life time.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={MaleAvatar}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Gouthami Prasad J R</h3>
                                        <p className="text-gray-500 text-md">Student</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">I'm glad I found a teacher as patient, friendly and knowledgable that helped my kid to learn and play piano quickly!</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={GlobeImg}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">narendhar murthy</h3>
                                        <p className="text-gray-500 text-md">Parent</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">My son has been taking classNamees with Solomon sir for a year now. He has shown amazing progress and sir has been very patient and keeps challenging him to get better at his skills. I would strongly recommend classNamees with sir.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={MaleAvatar}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Bhuvaneeshwari Vinoth kumar</h3>
                                        <p className="text-gray-500 text-md">Parent</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">The teacher is polite and kind, my son takes online lessons from here for almost 2 years now and we are happy about it.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul className="hidden space-y-8 lg:block">
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={MaleAvatar}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">harsith visaakan</h3>
                                        <p className="text-gray-500 text-md">Parent</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">Solomon sir teaches from the basic and has wide knowledge. I strongly recommend Solomon sir for taking piano classNamees.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={GlobeImg}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Cordula</h3>
                                        <p className="text-gray-500 text-md">Parent</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">My son is getting trained from Mr solomon raj piano tutor from past 2 years. His methods and curriculum are brilliant. Than you sir</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="" className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4"><img
                                        src={MaleAvatar}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Isaac Joshua</h3>
                                        <p className="text-gray-500 text-md">Student</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">I've had the pleasure of taking keyboard lessons with Mr.Solomon and I can't recommend him enough! He is a friendly teacher who has helped me to improve my skills in playing keyboard.
I thought that online className will be boring than offline className but he change that.Many recommended to join here initially but i ignored online classNamees then i joined here.
</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li className="text-sm leading-6">
                    <div className="relative group">
                        <div
                            className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="
                        " className="cursor-pointer">
                            <div
                                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div className="flex items-center space-x-4">
                                    <img src={GlobeImg}
                                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman"/>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Andrea</h3>
                                        <p className="text-gray-500 text-md">Parent</p>
                                    </div>
                                </div>
                                <p className="leading-normal text-gray-300 text-md">One of best piano tutors in Bangalore, the concepts covered with respect to theory and practical knowledge is immense , the good part is the tricks and different techniques taught here which enables for quick learning , anybody looking for a music tutor please reach out to Adriel school of music</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


        </div>
    </div>
     </section>


  </div>


  )
}

export default AboutUs