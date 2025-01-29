import React from 'react'
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6"
import { IoIosSearch, IoMdPhonePortrait } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { RiMessage2Fill } from 'react-icons/ri'



const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
            <h1 className="text-xl lg:text-[32px] font-semibold mt-12 mb-8">GET HELP</h1>
            <div className="mb-8 relative w-[90%] max-w-[460px]">
                <input type="text" className="border border-[#757575] text-gray-700 text-sm lg:text-[15px] rounded-[8px] p-2 w-full h-[48px] lg:h-[56px] pl-10 focus:outline-none focus:ring-2 focus:ring-gray-600" placeholder="What can we help you with?" value=""/>
                <IoIosSearch  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer" />
                  
                
            </div>
            <div className="flex flex-wrap lg:flex-nowrap w-full max-w-screen-xl px-4">
                <div className="w-full lg:w-[65%] p-4 border-b lg:border-b-0 lg:border-r border-gray-300">
                    <h2 className="text-lg lg:text-[28px] font-semibold mb-6 text-center">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                    <p className="text-sm lg:text-[15px] text-black mb-6 ml-4">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                    <p className="text-sm lg:text-[15px] text-black mb-6 ml-4">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                    <p className="text-sm lg:text-[15px] text-black mb-8 ml-8">
                        If you enter your PAN information at checkout, you &#x27;ll be able to pay for your order with PayTM or a local credit or debit card.<br/>
                        <span className="text-[16px] mt-3 mb-6">Apple Pay</span>
                    </p>
                    <p className="text-sm lg:text-[15px] text-[#111111] mb-6">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you &#x27;re not already a Member, join us today.</p>
                    <div className="flex space-x-4 justify-start mt-6">
                        <a href="/signin">
                            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">Sign In</button>
                        </a>
                        <a href="/cart">
                            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">Shop Nike</button>
                        </a>
                    </div>
                    <div className="mt-12">
                        <h1 className="text-2xl font-bold text-black mb-4">FAQS</h1>
                        <p className=" font-bold text-black mb-4">Does my card need international purchases enabled?</p>
                        <p className="font-normal mb-4">
                            Yes, we recommend asking your bank to enable international purchases on your card. You will be notified<br/>at checkout if international purchases need to be enabled.
                        </p>
                        <p className=" font-normal mb-4">Please note, some banks may charge a small transaction fee for international orders.</p>
                        <h2 className=" font-bold text-black mb-4">Can I pay for my order with multiple methods?</h2>
                        <p className=" font-normal mb-4">No, payment for Nike orders can&#x27;t be split between multiple payment methods.</p>
                        <h2 className="font-bold text-black mb-4">What payment method is accepted for SNKRS orders?</h2>
                        <p className="font-normal mb-4">You can use any accepted credit card to pay for your SNKRS order.</p>
                        <h2 className="font-bold text-black mb-4">Why don&#x27;t I see Apple Pay as an option?</h2>
                        <p className=" font-normal mb-4">To see Apple Pay as an option in the Nike App or on Nike.com, you &#x27;ll need to use a compatible Apple device running the latest OS. Additionally, you &#x27;ll need to use Safari to use Apple Pay on Nike.com.</p>
                        <p className="font-normal mb-6">Was this answer helpful?</p>
                        <div className="flex gap-2 mb-4">
                        <FaThumbsUp />
                        <FaThumbsDown />
                           </div>
                        <p className="text-[#757575] mb-4">RELATED</p>
                        <h1 className="text-[16px] text-black font-semibold underline">WHAT ARE NIKE &#x27;S DELIVERY OPTIONS?</h1>
                        <h1 className="text-[16px] text-black font-semibold underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h1>
                    </div>
                </div>
                <div className="w-full lg:w-[35%] p-6 flex justify-center">
                    <div className="w-full max-w-[313px] p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-[28px] font-semibold mb-6 uppercase text-center text-black">Contact Us</h2>
                        <div className="space-y-6">
                            <div className="flex flex-col items-center text-center">
                            <IoMdPhonePortrait className='text-4xl'/>
                                <p className="font-medium text-black">000 800 919 0566</p>
                                <p className="text-sm text-gray-600">
                                    Products &amp;Orders: 24 hours a day,<br/>16:30, Monday - Friday
                                </p>
                                <p className="text-sm text-gray-600">7 days a week</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                            <RiMessage2Fill className='text-4xl' />
                                <p className="font-medium text-black">24 hours a day</p>
                                <p className="text-sm text-gray-600">7 days a week</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                            <MdEmail className='text-4xl'/>
                                <p className="font-medium text-black">We&#x27;ll reply within</p>
                                <p className="text-sm text-gray-600">five business days</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                            <IoLocationSharp className='text-4xl' />
                                <p className="font-medium text-black uppercase">Store Locator</p>
                                <p className="text-sm text-gray-600">Find Nike retail stores near you</p>
                            </div>
                        </div>
                    </div>
            </div>
            
                    </div>
                </div>
          
       
        
  )
}

export default page
