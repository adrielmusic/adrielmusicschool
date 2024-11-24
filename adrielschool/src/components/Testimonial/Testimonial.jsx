import React from 'react'
import Slider from 'react-slick';

const TestimonialsData = [
  {
    id: 1,
    name: "Abel",
    text: "lorem asddsdd ssdsdsd",
    img: "",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Abel",
    text: "lorem asddsdd ssdsdsd",
    img: "",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Abel",
    text: "lorem asddsdd ssdsdsd",
    img: "",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Abel",
    text: "lorem asddsdd ssdsdsd",
    img: "",
    delay: 0.5,
  },
  {
    id: 5,
    name: "Abel",
    text: "lorem asddsdd ssdsdsd",
    img: "",
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
    <div className="py-14 mb-10">
      <div className="container">
        {/* Header Section*/}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto">
          <h1 className='upperCase font-semibold text-orange-600'>OUR TESTIMONIALS</h1>
          <p className='font-semibold text-3xl'>What our Students Say About Us</p>
        </div>
        {/*Testiomonial Cards Section */}
        <div>
          <Slider {...setting}>
            {
              TestimonialsData.map((item) => {
                return (
                  <div key={item.id}>
                    <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-white dark:bg-gray-700'>
                      {/*upper Section*/}
                      <div className='flex justify-start items-center gap-5'>
                        <img className='w-16 h-16 rounded-full' src={item.img} alt="" />
                        <div>
                          <p className='text-xl font-bold text-black/80'>{item.name}</p>
                          <p>{item.name}</p>
                        </div>
                      </div>
                      {/*bottom Section*/}
                      <div className="py-4 space-y-4">
                        <p className='text-sm text-gray-500'>{item.text}</p>
                        <p>⭐⭐⭐⭐⭐</p>
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