"use client"

import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black mt-12 font-[Helvetica Neue]">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Find a Store */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-lg font-medium tracking-tight text-white mb-10 mt-10">FIND A STORE</h2>
            <nav className="list-none">


              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-white hover:text-white/70">
                  BECOME A MEMBER
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="text-base font-medium text-white hover:text-white/70">
                  SIGN UP FOR EMAIL
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="text-base font-medium text-white hover:text-white/70">
                  Send Us Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base font-medium text-white hover:text-white/70">
                  STUDENT DISCOUNT
                </Link>
              </li>


            </nav>
          </div>

          {/* Get Help */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="text-lg font-medium tracking-tight text-white mb-10 mt-10">GET HELP</h2>
            <nav className="list-none">



              {/* First block: Navigation Links */}
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">Order Status</Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">Delivery</Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">Returns</Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">Payment Options</Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="text-base font-medium text-[#757575]">Contact Us On Nike.com Inquiries</Link>
              </li>
              <li>
                <Link href="/" className="text-base font-medium text-[#757575]">Contact Us On All Other Inquiries</Link>
              </li>
              </nav>
              </div>
              {/* Second block: About Me Links */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="text-lg font-medium tracking-tight text-white mb-10 mt-10">ABOUT ME</h2>
                <nav className="list-none">
                  <li className="mb-4">
                    <Link href="/" className="text-base font-medium text-[#757575]">News</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="text-base font-medium text-[#757575]">Careers</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="text-base font-medium text-[#757575]">Investors</Link>
                  </li>
                  <li>
                    <Link href="/" className="text-base font-medium text-[#757575]">Sustainability</Link>
                  </li>
                </nav>
              </div>


            
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between mt-10">
          <div className="flex items-center space-x-2">
            <a className="flex items-center" href="/">
              <img
                alt="logo"
                className="w-8 h-8"
                src="/logo-1.png"
              />
            </a>
            <span className="text-[12px] text-white">Pakistan</span>
          </div>
          <p className="text-xs font-normal tracking-tight text-[#757575] mt-4 sm:mt-0">
            ©2023 Nike, Inc. All Rights Reserved
          </p>
          <span className="flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-5">



            <Link href="#" className="w-8 h-8 text-gray-500 hover:text-white"></Link>
            <Link href="#" className="text-gray-500 hover:text-white"></Link>
            <Link href="#" className="text-gray-500 hover:text-white"></Link>
            <Link href="#" className="text-gray-500 hover:text-white"></Link>
            <FaFacebook className='text-gray-700 text-2xl'/>
            <FaTwitter className='text-gray-700 text-2xl'/>
            <FaInstagramSquare className='text-gray-700 text-2xl'/>
            <FaLinkedin className='text-gray-700 text-2xl'/>
          </span>
         
        </div>
      
    </footer>
  )
}

export default Footer
