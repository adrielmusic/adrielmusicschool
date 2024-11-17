import React from 'react'
import DarkMode from './DarkMode';
import {HiMenuAlt3, HiMenuAlt1} from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
//import Logo from '../../assets/website'

export const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/about",
    },
    {
        id: 3,
        name: "Courses",
        link: "/courses",
    },
]

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () =>{
        setShowMenu(!showMenu); 
    }
  return (
    <>
    <nav className='bg-white dark:bg-black dark:text-white duration-300'>
        <div className="container py-3 md:py-2">
            <div className="flex justify-between items-center">
                {/*Logo Section*/}
                <div>
                   <a href="#" className='flex items-center gap-3'><img src="" alt="Logo" className='w-5' /><span className='text-3xl sm:text-2xl font-semibold'>Adriel School Of Music</span></a>
                </div>
            {/*Desktop NavLinks Section*/}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-8'>
                    {
                        MenuLinks.map(({id, name, link})=>{
                            return(
                                <li key={id} className='cursor-pointer py-4'>
                                    <a href={link} className='text-sm font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-300'>{name}</a>
                                </li>
                            )
                        })
                    }
                    <button className='btn-primary'>Contact</button>
                    <DarkMode/>
                </ul>
            </div>
            {/*Mobile View*/}
            <div className='flex items-center gap-4 md:hidden'>
                <DarkMode/>
                {
                    showMenu ? (
                        <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer text-2xl'/>
                    ) : (
                        <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer text-2xl'/>
                    )
                }
            </div>
            </div>
        </div>
        {/*Mobile NavLink Section*/ }
        <ResponsiveMenu showMenu={showMenu}/>
    </nav>
    </>
  )
}

export default Navbar;