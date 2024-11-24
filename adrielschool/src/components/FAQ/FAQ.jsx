import React from 'react'

const Faq = [
    {
        id : 1,
        title : 'How can I create an account?',
        name : 'To create an account, simply click on the "Sign Up" button at the top of the page. You’ll need to provide a [email, username, password], and you’ll be able to start exploring immediately!',
    },
    {
        id : 2,
        title : 'Why can’t I log into my account?',
        name : "If you're unable to log in, make sure you're using the correct username and password. If you’ve forgotten your password, click on 'Forgot Password' to reset it. For further assistance, reach out to support.",
    },
    {
        id : 3,
        title : 'How can I contact you if I have an issue or feedback?',
        name : "For support or general inquiries, please contact us at email : adrielschoolofmusicdec@gmail.com Mobile : +91 7019598505",
    },
]
const FAQ = () => {
  return (
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
                        stroke="#111827" strokeWidth="2" strokeLinecap="round"></path>
                    <path
                        d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                        stroke="#111827" strokeWidth="2"></path>
                </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Saxaphone</h3>
                    <p className="mt-6 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, alias laborum fugiat earum libero possimus, molestiae quaerat esse similique veritatis nobis obcaecati? Alias delectus deleniti neque corporis aperiam autem dolorem.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default FAQ