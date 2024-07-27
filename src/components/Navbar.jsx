import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import {navLists} from '../constants'
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex justify-between items-center w-full'>
        <img className='w-5' src={appleImg} alt="" />
        
        {/* navitems */}
        <div className='sm:flex gap-8 items-center hidden'>{navLists.map((nav)=>{
            return(
                <div className='' key={nav}>
                    {nav}
                </div>
            )
        })}</div>


        {/* nav buttons  */}
        <div className='flex gap-5'>
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
