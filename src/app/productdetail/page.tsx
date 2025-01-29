import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import Image from "next/image"
const page = () => {
    return (
        <section className='text-black p-3'>
            <div className="grid items-center gap-8 py-8 px-4 sm:grid-cols-1 md:grid-cols-2 sm:py-16 xl:px-16">
                <div className="flex justify-center">
                    <Image src={"/p2.png"}
                        alt="shoes"
                        width={650}
                        height={650}
                        className='w-full max-w-[500px] h-auto rounded-md'
                         />
                </div>

                <div className="text-left flex flex-col justify-start">
                    <h1 className="text-3xl lg:text-4xl font-medium text-black mb-4 leading-snug">Nike Air Force 1<br />PLT.AF.ORM</h1>
                    <p className="text-base sm:text-xl lg:text-[15px] font-normal font-poppins leading-relaxed">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish.</p>
                    <p className="mt-6 mb-4 text-lg sm:text-xl font-poppins lg:text-3xl font-medium ">₹ 8,695.00</p>
                    <a href="/addtocart">
                            <button className="bg-black text-white flex py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300"><IoCartOutline className='text-2xl'/> Add to cart</button>
                        </a>
                </div>
            </div>
        </section>
    )
}

export default page
