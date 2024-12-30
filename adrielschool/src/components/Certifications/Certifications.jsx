import React from 'react'
import ABRSM from '../../assets/images/common/abrsm.png'
import TRINITY from '../../assets/images/common/TRINITY.png'
import ADRIEL from '../../assets/images/Logo/adriel.png'

const Certifications = () => {
  return(
  <div className='dark:bg-gray-900 bg-white dark:text-white text-black'>
  <div className="container">
    <h1 className="text-center font-semibold text-2xl">Our Course Certification</h1>
    <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
      <img className='h-20' src={ABRSM} alt="" />
      <img className='h-11' src={TRINITY} alt="" />
      <img className='h-20' src={ADRIEL} alt="" />
    </div>
  </div>
</div>
  )
}

export default Certifications