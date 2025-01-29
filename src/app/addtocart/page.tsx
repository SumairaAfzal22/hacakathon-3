import React from 'react'
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from 'react-icons/ri';
const page = () => {
    return (
        <div className='flex justify-center items-center w-full' >
            <div className='bg-white w-full lg:w-[1100px] lg:h-[540px] flex flex-col lg:flex-row p-6'>
                <div className='w-full lg:w-2/3 p-4'>
                    <div className='w-full h-[63px] bg-gray-200 flex items-center px-4 mb-4'>
                        <h1 className='font-medium'>Free delivery</h1>
                        <p className='text-[11px] font-normal ml-4'>Applies to orders of ₹ 14 000.00 or more.</p>
                        <button className='ml-8 text-[11px] font-medium underline'>View details</button>
                    </div>
                    <h1 className='text-2xl font-serif mb-6'>Bag</h1>
                    <div className='mb-6'>
                        <div className="flex items-start gap-4">
                            <Image src={"/product-4.png"} alt="Product Top"
                                width={100}
                                height={100}
                                className=" lg:w-[150px] lg:h-[150px] object-cover rounded-md" />
                            <div className="flex-grow">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-medium">Nike Dri-FIT ADV TechKnit Ultra</h2>
                                    <p className="text-sm font-medium text-black">₹ 3,895.00</p>
                                </div>
                                <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
                                <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                                <div className="flex gap-6 mt-2">
                                    <span className="text-sm font-medium">Size: L</span>
                                    <span className="text-sm font-medium">Quantity: 1</span>
                                </div>
                                <div className="flex items-center gap-4 mt-4">
                                    <FaRegHeart />
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div >
                        <div className="flex items-start gap-4">
                            <Image src={"/p2.png"} alt="Product Top"
                                width={100}
                                height={100}
                                className=" lg:w-[150px] lg:h-[150px] object-cover rounded-md" />
                            <div className="flex-grow">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-medium">Nike Dri-FIT ADV TechKnit Ultra</h2>
                                    <p className="text-sm font-medium text-black">₹ 3,895.00</p>
                                </div>
                                <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
                                <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                                <div className="flex gap-6 mt-2">
                                    <span className="text-sm font-medium">Size: 8</span>
                                    <span className="text-sm font-medium">Quantity: 1</span>
                                </div>
                                <div className="flex items-center gap-4 mt-4">
                                    <FaRegHeart />
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="w-full lg:w-1/3 p-4 flex flex-col ">
                        <h1 className="text-xl font-sans font-medium mb-4">Summary</h1>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Subtotal</span>
                                <span className="text-sm font-medium text-black">₹ 20,890.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Estimated Delivery &amp; Handling</span>
                                <span className="text-sm font-medium text-black">Free</span>
                            </div>
                            <div className="flex justify-between border-t pt-3">
                                <span className="text-sm font-medium text-gray-700">Total</span>
                                <span className="text-sm font-medium text-black">₹ 20,890.00</span>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <a href="/checkoutpage">
                                <button className="w-[334px] h-[60px] rounded-[30px] bg-black text-white text-sm font-medium">Member Checkout</button>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default page
