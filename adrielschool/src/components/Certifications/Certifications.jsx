import React from 'react'
import ABRSM from '../../assets/images/common/abrsm.png'
import TRINITY from '../../assets/images/common/TRINITY.png'

const Certifications = () => {
  return <>
    <div class="bg-white py-6 sm:py-4 lg:py-2">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
            <h2 class="mb-2 text-center text-2xl font-semibold text-gray-800 lg:mb-0 lg:text-3xl">Our Course Certification</h2>
        </div>

        <div class="grid grid-cols-1 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">

            <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                <img class="w-auto h-24" src={ABRSM} alt="" />
            </div>
  
            <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
            <img class="w-auto h-12" src={TRINITY} alt="" />
            </div>

            <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img class="w-auto h-24" src={ABRSM} alt="" />
            </div>
  




        </div>
    </div>
</div>
  </>
}

export default Certifications