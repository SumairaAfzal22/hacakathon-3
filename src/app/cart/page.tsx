import Image from "next/image"
import React from 'react'
import { RiCheckboxBlankLine } from 'react-icons/ri'

const page = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row justify-between items-center p-10'>
        <h1 className='text-2xl font-medium'>New (500)</h1>
        <div>
          <select className='text-black px-2 py-1 w-[86px] h-[28px] md:w-auto' name='sorting' id='sorting'>
            <option value='sortby'>Sort by</option>
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Kid'>Kid</option>
          </select>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row mt-10 gap-8'>
        <div className='w-full lg:w-[260px] p-4 border-b lg:border-none'>
          <ul className='list-disc pl-5 space-y-2 font-medium'>
            <li className='font-medium'>Shoes</li>
            <li>Sports Bras</li>
            <li>Tops & T-Shirts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousers & Tights</li>
            <li>Shorts</li>
            <li>Tracksuits</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Socks</li>
            <li>Accessories & Equipment</li>

          </ul>

          <div className='mt-12 border-t-2 border-b-2 p-2'>
            <h1 className='text-black px-2 py-1'>Gender</h1>
            <div className='flex gap-1 items-center'>
              <RiCheckboxBlankLine className='text-gray-500' />
              <h3>Men</h3>

            </div>
            <div className='flex gap-1 items-center'>
              <RiCheckboxBlankLine className='text-gray-500' />
              <h3>Women</h3>

            </div>
            <div className='flex gap-1 items-center'>
              <RiCheckboxBlankLine className='text-gray-500' />
              <h3>Unisex</h3>

            </div>
          </div>

          <div className='mt-12 border-t-2 border-b-2 p-2'>
            <h1 className='text-black px-2 py-1'>Kid</h1>
            <div className='flex gap-1 items-center'>
              <RiCheckboxBlankLine className='text-gray-500' />
              <h3>Boys</h3>

            </div>
            <div className='flex gap-1 items-center'>
              <RiCheckboxBlankLine className='text-gray-500' />
              <h3>Girls</h3>

            </div>

          </div>

          <div className='mt-12 border-t-2 border-b-2 p-2'>
            <h1 className='text-black px-2 py-1'>Shop By Price</h1>
            <div className='flex gap-1 items-center'>
              <RiCheckboxBlankLine className='text-gray-500' />
              <h3>Under ₹ 2 500.00</h3>

            </div>
            <div className='flex gap-1 items-center'>
              <RiCheckboxBlankLine className='text-gray-500' />
              <h3>₹ 2 501.00 - ₹ 7 500.00</h3>
              </div>
            </div>
          </div>
        </div>

         <div className="flex flex-wrap justify-between items-center w-full gap 4">
          <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
            <Image
              src="/p1.png"
              alt="Men's Shoes"
              className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
              width={500}
              height={500}
            />
            <p className="text-lg font-normal text-amber-800">Just In </p>
            <h2 className="text-lg font-medium">Nike Court Vision Low Next Nature</h2>
            <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
            <p className="text-sm text-gray-500">Colors: 1, 2</p>
            <p className="text-lg font-medium text-black mt-4">MRP : ₹ 4 995.00</p>

          </div>
          
          
          <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
            <Image
              src="/p2.png"
              alt="Men's Shoes"
              className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
              width={500}
              height={500}
            />
            <p className="text-lg font-normal text-amber-800">Just In </p>
            <h2 className="text-lg font-medium">Nike Air Force 1 PLT.AF.ORM</h2>
            <h3 className="text-lg font-normal text-gray-500">Women's Shoes</h3>
            <p className="text-sm text-gray-500">Colors: 1, 2</p>
            <p className="text-lg font-medium text-black mt-4">MRP : ₹ 8 695.00</p>

          </div>
        

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p3.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Air Force 1 Mid 07</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">MRP : ₹ 13 295.00</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p4.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Air Jordan 1 Elevate Low</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p4.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Air Jordan 1 Elevate Low</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p5.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Standard Issue</h2>
          <h3 className="text-lg font-normal text-gray-500">Women's Basketball Jersey</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">MRP : ₹ 4 995.00</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p6.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Air Force 1 Mid 07</h2>
          <h3 className="text-lg font-normal text-gray-500">Women's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>


        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p7.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Sustainable Materials </p>
          <h2 className="text-lg font-medium">Nike Dri-FIT UV Hyverse</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p8.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Sustainable Materials </p>
          <h2 className="text-lg font-medium">Nike Dri-FIT UV Hyverse</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p9.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Air Force 1 Mid 07</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p8.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Sustainable Materials </p>
          <h2 className="text-lg font-medium">Nike Dri-FIT UV Hyverse</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p11.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Air Force 1 Mid '07</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p10.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Men's Tight-Fit Sleeveless Top</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p11.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Air Force 1 Mid 07</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>
    
        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p12.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Air Force 1 Mid 07</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p13.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Air Force 1 Mid 07</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>


        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p14.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Alate All U</h2>
          <h3 className="text-lg font-normal text-gray-500">Women's Light-Support Lightly Lined U-Neck Printed Sports Bra</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">MRP : ₹ 2 195.00</p>

        </div>

        <div className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2">
          <Image
            src="/p15.png"
            alt="Men's Shoes"
            className="w-full h-[200px] sm:h-[260px] lg:h-[360px] object-cover mb-4"
            width={500}
            height={500}
          />
          <p className="text-lg font-normal text-amber-800">Just In </p>
          <h2 className="text-lg font-medium">Nike Dri-FIT Challenger</h2>
          <h3 className="text-lg font-normal text-gray-500">Men's Shoes</h3>
          <p className="text-sm text-gray-500">Colors: 1, 2</p>
          <p className="text-lg font-medium text-black mt-4">$99.99</p>

        </div>
        </div>
      



    </div>









  )
}

export default page
