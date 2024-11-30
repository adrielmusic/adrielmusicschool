import React from 'react';
import {motion} from 'framer-motion';

const NavbarBanner = () => {
    const [isOpen, setOpen] = React.useState(true);
  return (
    isOpen &&(
    <motion.div className='bg-yellow-400 text-sm text-center font-semibold p-1 hidden lg:block relative'>
        Learn your favourite Music with help of our Adriel Music School
        <a href="#" className='text-blue-500 ml-2'>Book Demo Now</a>
        <div className='absolute top-1/2 right-10 cursor-wait -translate-y-1/2' onClick={()=>setOpen(false)}>X</div>
    </motion.div>
    )
  )
}

export default NavbarBanner