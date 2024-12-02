import React from 'react'
import Slider from 'react-slick';
import ManAvatar from '../../assets/images/common/man-avatar.png'

const TestimonialsData = [
  {
    id: 1,
    name: "Ajan Subramanian",
    info: "Student",
    text: "Solomon Sir was extremely patient with me. He taught me the basics of music theory in a short time span and was very attentive to my needs. I highly recommend him to any beginners who are starting to learn piano at an older age.",
    img: ManAvatar,
    rating: "⭐⭐⭐⭐⭐",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Sathiyavathi Saravanan",
    info: "Parent",
    text: "My daughter is truly enjoying her piano class. The instructor Mr.Solomon is absolutely fantastic person. He is professional in teaching. I just want to send in appreciation for being a wonderful teacher in all aspects. Thanks.",
    img: ManAvatar,
    rating: "⭐⭐⭐⭐⭐",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Harini Muthu",
    info: "Student",
    text: "I’ve learned to play keyboard here. Had 1:1 sessions and it was great experience. Solomon was the trainer for me. His classes were more practical and easy to get along with. The classes were flexible too. It was worth time and money!!",
    img: ManAvatar,
    rating: "⭐⭐⭐⭐",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Narendhar murthy",
    info: "Parent",
    text: "My son has been taking classes with Solomon sir for a year now. He has shown amazing progress and sir has been very patient and keeps challenging him to get better at his skills. I would strongly recommend classes with sir.",
    img: ManAvatar,
    rating: "⭐⭐⭐⭐⭐",
    delay: 0.5,
  },
  {
    id: 5,
    name: "Monica G S",
    info: "Parent",
    text: "One of best piano tutors in Bangalore, the concepts covered with respect to theory and practical knowledge is immense., the good part is the tricks and different techniques taught here which enables for quick learning.",
    img: ManAvatar,
    rating: "⭐⭐⭐⭐⭐",
    delay: 0.4,
  },
  {
    id: 6,
    name: "harsith visaakan",
    info: "Parent",
    text: "Solomon sir teaches from the basic and has wide knowledge. I strongly recommend Solomon sir for taking piano classes.",
    img: ManAvatar,
    rating: "⭐⭐⭐⭐⭐",
    delay: 0.4,
  },
  {
    id: 6,
    name: "Gouthami Prasad J R",
    info: "Parent",
    text: "I'm glad I found a teacher as patient, friendly and knowledgable that helped my kid to learn and play piano quickly!!!!",
    img: ManAvatar,
    rating: "⭐⭐⭐⭐⭐",
    delay: 0.4,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="py-14  bg-white dark:bg-gray-900 dark:text-white">
      <div className="container">
        {/* Header Section*/}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto">
          <h1 className='upperCase font-semibold text-orange-600'>OUR TESTIMONIALS</h1>
          <p className='font-semibold text-2xl'>What our Students & Parents Say About Us</p>
        </div>
        {/*Testiomonial Cards Section */}
        <div>
          <Slider {...setting}>
            {
              TestimonialsData.map((item) => {
                return (
                  <div key={item.id}>
                    <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-white'>
                      {/*upper Section*/}
                      <div className='flex justify-start items-center gap-5'>
                        <img className='w-16 h-16 rounded-full' src={item.img} alt="" />
                        <div>
                          <p className='text-xl font-bold text-black/80'>{item.name}</p>
                          <p>{item.info}</p>
                        </div>
                      </div>
                      {/*bottom Section*/}
                      <div className="py-2 space-y-4">
                        <p className='text-sm text-gray-500'>{item.text}</p>
                        <p>{item.rating}</p>
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
  )
}

export default Testimonial