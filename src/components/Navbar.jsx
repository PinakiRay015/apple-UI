import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import {navLists} from '../constants'
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex justify-between items-center w-full max-w-screen-xl mx-auto'>
        <img className='w-5 cursor-pointer' src={appleImg} alt="" />
        
        {/* navitems */}
        <div className='sm:flex items-center hidden'>{navLists.map((nav)=>{
            return(
                <p className='cursor-pointer px-5 text-sm text-gray-300 hover:text-white transition-all' key={nav}>
                    {nav}
                </p>
            )
        })}</div>


        {/* nav buttons  */}
        <div className='flex gap-5'>
            <img className='cursor-pointer w-4' src={searchImg} alt="search" width={18} height={18} />
            <img className='cursor-pointer w-4' src={bagImg} alt="bag" width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
