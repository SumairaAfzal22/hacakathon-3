import Image from "next/image"
import React from 'react'

export default function hero() {
    return(
     <main className='w-full h-full '>
     <div className='bg-slate-100  h-[46px] '>
       <div className=' justify-center items-center '>
         <h3 className='text-center text-[16px]  font-bold'>
           Hello Nike App
         </h3>
         <p className=' text-center text-[11px] '>
           Download the app to access everything Nike.

           <button className='text-black text-center underline font-medium'>Get Your Great</button></p>
       </div>
      </div>
       <div className='w-full h-auto max-w-[1349px] max-h-[700px] mx-auto'>
       <Image className='w-[1349px] h-auto max-ss:w-[310px] max-ss:h-[235px]'
       src={"/nike.png"}
       alt="shoes"
       width={1344}
       height={700}/>
       </div>
       <div className="text-center mt-[60px]">
                    <p className="text-[15px] font-medium">First Look</p>
                    <h1 className="uppercase text-[30px] lg:text-[56px] font-medium text-black">Nike Air Max Pulse</h1>
                    <p className="text-[12px] ml-3 mr-3 lg:text-[15px] font-normal">
                        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br/>--designed to push you past your limits and help you go to the max.
                    </p>
                    <div className="flex justify-center gap-8 mt-6">
                        <div className="w-auto">
                            <button className="bg-black text-white flex py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">Notify Me</button>
                        </div>
                        <div className="w-auto">
                            <button className="bg-black text-white flex py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">Shop Air Max</button>
                        </div>
            </div>
            </div>            

      </main>
  
    )
}