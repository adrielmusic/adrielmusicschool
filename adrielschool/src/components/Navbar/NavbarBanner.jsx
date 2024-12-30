import React from 'react';
import {motion} from 'framer-motion';
import {NavLink, replace, useNavigate} from 'react-router-dom';

const NavbarBanner = () => {
    const [isOpen, setOpen] = React.useState(true);
  return (
    isOpen &&(
    <motion.div className='bg-yellow-400 text-sm text-center font-semibold p-1 hidden lg:block relative'>
        Learn your favourite Music with help of our Adriel School Of Music
        <a className="text-blue-500 ml-2" href="https://forms.gle/crgDMKRNhjqDQAge6" target='_blank'>Book class Now</a>
        {/*<NavLink to="/contact" className='text-blue-500 ml-2'>Book Demo Now</NavLink>*/}
        <div className='absolute top-1/2 right-10 cursor-wait -translate-y-1/2' onClick={()=>setOpen(false)}>X</div>
    </motion.div>
    )
  )
}

export default NavbarBanner