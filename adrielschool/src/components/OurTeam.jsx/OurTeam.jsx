import React from 'react'
import Slider from 'react-slick';
import Img1 from '../../assets/images/Team/solomon.jpg'
import Img2 from '../../assets/images/Team/theodore.jpg'
import Img3 from '../../assets/images/Team/victor.jpg'
import Img4 from '../../assets/images/Team/Riddhi.jpg'
import Img5 from '../../assets/images/Team/maxwell.jpg'
import Img6 from '../../assets/images/Team/dan.jpg'
import Img7 from '../../assets/images/Team/Deepak.jpg'
import Img8 from '../../assets/images/Team/Ancin.jpg'

const OurTeamData = [
    {
        id:1,
        name:"Theodore Dsouza",
        position: "Piano / Guitar / Ukulele Instructor",
        description: "Theo has over 8+years experience as a musician and sound engineer. He has a unique way of communicating with students and he also makes complex music concepts simpler for students to understand.",
        image: Img2,
    },
    {
        id:2,
        name:"Victor Joy",
        position: "Drums Instructor",
        description: "Victor is a highly skilled self taught drummer with 7+years of experience. He has teaching experience of 3+ years, he has participated in YUGAM, Alora, battle of bands, Musicora Best Drummer.",
        image: Img3,
    },
    {
        id:3,
        name:"Riddhi Devi",
        position: "Vocal Instructor",
        description: "Riddhi has over 3+years of experience as a dedicated music tutor, she is specialized in teaching vocals to children from beginner to intermediate levels, her approach is tailored to inspire young learners.",
        image: Img4,
    },
    {
        id:4,
        name:"Maxwell Rex",
        position: "Piano / Keyboard Instructor",
        description: "Max is a Self taught musician with 8+ years of experience, and also he was selected for Indian Jazz fest, IIT MADRAS and he is specialized in teaching vocals to children from beginner to intermediate levels.",
        image: Img5,
    },
    {
        id:5,
        name:"Dan Baraily",
        position: "Guitar Instructor",
        description: "Dan is an experienced and certified guitarist with a passion for teaching. He has been playing the electric guitar for over 10 years, performing at concerts and collaborating with bands in various genres.",
        image: Img6,
    },
    {
        id:6,
        name:"Deepak Gochhayat",
        position: "Guitar Instructor",
        description: "Deepak has over 11 years of experience in music, Deepak is Grade 3 Certified from Rockschool. Deepak has received the Highest achiever’s award from Rockschool of music, London from eastern zone.",
        image: Img7,
    },
    {
        id:7,
        name:"Ancin V R",
        position: "Violin Instructor",
        description: "Ancin is a passionate and skilled musician with over 5 years of experience sharing the joy of music through teaching. A natural ability to connect with students of all ages nurturing talents and dedication.",
        image: Img8,
    },
]

const OurTeam = () => {
    const setting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slideToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slideToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      }
  return (
    <div>



    <div className='bg-white dark:bg-gray-900'>
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="text-orange-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented Tutors of Our Organization</h1>
                    </div>
                </div>


                <div className="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-4 mb-8">
    <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl">
        
        <img className="hidden object-cover rounded-l-xl md:block" height="50%" width="50%" style={{"clipPath": 'polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)' }} src={Img1}/>

        <article className="relative p-6 md:p-8 md:col-span-2">
            <svg className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12  md:block" width="256"
                height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                    stroke="currentColor" strokeWidth="8"></path>
            </svg>

            <div className="space-y-8">
                <div className="flex items-center">
                   <img className="w-24 h-24 object-cover rounded-full md:hidden" src={Img1}/>
                   <div className='px-4'>
                    <p className="font-bold text-lg md:hidden">Solomon Raj K</p>
                    <p className='text-orange-500 md:hidden'>Chief Executive Officer</p>
                    </div>
                </div>
                <p className="text-base sm:leading-relaxed ">
                As both an Educator and Entrepreneur, Solomon Raj K has over 10 years of experience in Music Mentoring, Sound Engineering and Music Production. Under his leadership, Adriel School Of Music has embraced virtual learning, giving students access to world-class instructors and resources from anywhere in the world. This forward-thinking mindset, combined with Raj's dedication to each student’s personal growth has made the school a leader in music education. 
                </p>

                <footer className="flex items-center space-x-4 md:space-x-0">
                    <div>
                    <p className="font-bold text-lg hidden md:block">Solomon Raj K</p>
                    <p className='text-orange-500 hidden md:block'>Chief Executive Officer</p>
                    </div>
                </footer>
            </div>


        </article>
    </blockquote>
</div>




                <div className="w-full  pt-10">

                    <div className="container">
                    <Slider {...setting}>
                        {
                            OurTeamData.map((item)=>{

                                return(
                                    <div key={item.id} className='container mx-auto'>
                                    <div role="list" aria-label="Behind the scenes People " className="flex flex-col gap-4 mt-4">
                            
                                    <div role="listitem" className="relative mt-16 mb-32 sm:mb-24 ">
                                        <div className="rounded overflow-hidden shadow-md bg-white">
                                            <div className="absolute -mt-20 w-full flex justify-center">
                                                <div className="h-32 w-32">
                                                    <img src={item.image} alt="Display Picture of Solomon Raj" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="px-6 mt-16 mb-10">
                                                <h1 className="font-bold text-3xl text-center mb-1">{item.name}</h1>
                                                <p className="text-gray-800 text-sm text-center">{item.position}</p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
        
                                </div> 

                                </div>
                                
                                
                                )

                            })
                        }



                
                        </Slider>
                    </div>
                </div>

   


    </div>


    </div>
  )
}

export default OurTeam