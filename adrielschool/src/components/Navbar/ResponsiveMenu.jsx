import React from 'react'
import { MenuLinks } from './Navbar'

const ResponsiveMenu = ({showMenu}) => {
  return <div className={`${showMenu? "left-0" : "left-[-100%]"} fixed bottom-0 top-0 w-[75%] transition-all duration-200 shadow-md pt-16 px-8 bg-white dark:bg-gray-900 z-50 flex flex-col justify-between pb-4`}>
    {/*Menu Section*/ }
    <div className="card">
    <nav className='mt-2'>
        <ul className='space-y-4 text-xl'>
            {
            MenuLinks.map(({id, name, link})=>{
                return(
                    <li key={id}>
                        <a href={link} className='mb-5 inline-block'>{name}</a>
                    </li>
                )
            })  
            }
        </ul>
    </nav>
    </div>
  </div>
}

export default ResponsiveMenu