import React from 'react'
import { SiNike } from 'react-icons/si'


const page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen flex-col' id='signin'>
      <div className='w-[350px] lg:w-[380px] h-auto p-6 rounded-lg'>
        <div className='flex justify-center mb-6'>
        <SiNike className='text-6xl '/>
        </div>
        <h2 className='text-center text-2xl font-bold text-black mb-4'>YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
        <form className="space-y-6 max-w-md mx-auto px-4">
    <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</label>
        <input type="email" id="email" required className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700" placeholder="Email address" name="email" value=""/>
    </div>
    
    <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" required className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700" placeholder="Password" name="password" value=""/>
    </div>
    
    <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
            <input type="checkbox" id="keep-signed-in" className="h-4 w-4 border-gray-300 rounded"/>
            <label htmlFor="keep-signed-in">Keep me signed in</label>
        </div>
        <div className="text-right">
            <a href="/forgot-password" className="hover:underline">Forgot your password?</a>
        </div>
    </div>
    
    <div className="text-center text-sm text-gray-600 mt-4">
        <p>
            By logging in, you agree to Nike&#39;s. 
            <a href="/privacy-policy" className="text-gray-500 underline">   Privacy Policy</a> and 
            <a href="/terms" className="text-gray-500 underline">Terms & Conditions</a>.
        </p>

       
    </div>
    
    <div className="mt-6">
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none">Sign In</button>
    </div>

    <div className="text-center text-sm text-gray-600 mt-4">
      <p>
        <div className="text-center text-sm text-gray-600 mt-4">
        <p>
        Not a Member? 
        </p>
        <p className='font-bold underline'>Join Us.</p>

       
    </div>
        </p>

       
    </div>
</form>

      </div>
      
    </div>
  )
}

export default page
