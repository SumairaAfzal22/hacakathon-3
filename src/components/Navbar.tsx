import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { IoIosSearch } from 'react-icons/io'
import { SiJordan, SiNike } from 'react-icons/si'
import { SheetDemo } from './Sheet'


const Navbar = () => {
    return (
        <header className='bg-gray-100 w-full' >
          <div>
            <div className='container w-full h-[36px] flex justify-between items-center px-4'>
                <div className='hidden md:flex items-center'>
                    <SiJordan />
                </div>
                <h1 className='text-center text-sm lg:text-base font-medium mx-auto'>Skip to main content </h1>

                <div className='hidden md:flex space-x-4 text-sm lg:text-base'>
                    <a href="#" className='hover:underline text-sm'>Find a Store |</a>
                    <a href="help" className='hover:underline text-sm'>Help |</a>
                    <a href="joinus" className='hover:underline text-sm'>Join Us |</a>
                    <a href="signin" className='hover:underline text-sm'>Sign In</a>
                </div>
                </div>

                <div className='md:hidden flex justify-evenly items-center py-2'>
                    <a href="#" className='hover:underline text-sm'>Find a Store|</a>
                    <a href="help" className='hover:underline text-sm'>Help |</a>
                    <a href="joinus" className='hover:underline text-sm'>Join Us |</a>
                    <a href="signin" className='hover:underline text-sm'>Sign In</a>
                </div>
            
            </div>
            <main className='container mx-auto bg-white flex justify-between items-center px-4 py-2 '>
                <div className=''>
                    <SiNike className='justify-start text-4xl  ' />
                </div>
                <div className=' flex justify-center items-center  '>

                </div>
                <ul className='hidden md:block  '>
                    <li className='space-x-5'>
                        <Link href={""}>New&Featured</Link>
                        <Link href={"cart"}>Men</Link>
                        <Link href={""}>Women</Link>
                        <Link href={""}>Kids</Link>
                        <Link href={"productdetail"}>Sale</Link>
                        <Link href={""}>SNKRS</Link>
                    </li>
                </ul>


                <div className='flex items-center space-x-6'>
                    <div className='hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2'>
                        <IoIosSearch />
                        <input type="text"
                            placeholder='     Search'

                            className='bg-slate-100 outline-none text-sm  ' />
                    </div>


                    <CiHeart/>
                    <HiOutlineShoppingBag/>
                    
                    <SheetDemo/>

                </div>

            </main>
        </header>



    )
}

export default Navbar
