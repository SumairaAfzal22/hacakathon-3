import React from 'react'
import { SiNike } from 'react-icons/si'

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen" id="joinus">
    <div className="w-[350px] lg:w-[380px] h-auto p-6 rounded-lg bg-white shadow-lg">
   
      <div className='flex justify-center mb-6'>
              <SiNike className='text-6xl '/>
              </div>
    
  
        <h2 className="text-center text-2xl font-bold uppercase text-black mb-4">Become a Nike Member</h2>
        <p className="text-center text-sm text-[#8D8D8D] mb-4 capitalize">Create your Nike member profile and get first access to the very best of Nike products, inspiration, and community.</p>
        <form className="space-y-6 max-w-lg mx-auto px-4">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]">Email address</label>
            <input
              type="email"
              id="email"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="Email address"
              name="email"
              value=""
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]">Password</label>
            <input
              type="password"
              id="password"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Password"
              name="password"
              value=""
            />
          </div>

          {/* First Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="First Name"
              name="firstName"
              value=""
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]">Last Name</label>
            <input
              type="text"
              id="lastName"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Last Name"
              name="lastName"
              value=""
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label htmlFor="dob" className="text-sm lg:text-[14px] font-normal text-[#8D8D8D]">Date of Birth</label>
            <input
              type="date"
              id="dob"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Date of Birth"
              name="dob"
              value=""
            />
          </div>

          {/* Birthday Reward Text */}
          <div>
            <p className="text-[15px] text-[#8D8D8D]">Get a Nike Member Reward every year on your Birthday.</p>
          </div>

          {/* Nationality */}
          <div className="flex flex-col">
            <label htmlFor="nationality" className="text-sm font-medium text-[#8D8D8D]">Nationality</label>
            <input
              type="text"
              id="nationality"
              required
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Pakistani"
              name="nationality"
              value=""
            />
          </div>

          {/* Gender Selection */}
          <div className="flex gap-4">
            <div className="flex flex-col w-[48%]">
              <label htmlFor="male" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]">Male</label>
              <input
                type="text"
                id="male"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Male"
                name="gender"
                value=""
              />
            </div>
            <div className="flex flex-col w-[48%]">
              <label htmlFor="female" className="text-sm lg:text-[14px] font-medium text-[#8D8D8D]">Female</label>
              <input
                type="text"
                id="female"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Female"
                name="gender"
                value=""
              />
            </div>
          </div>

          {/* Subscribe Checkbox */}
          <div className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              id="subscribe"
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="subscribe" className="ml-2 text-[#8D8D8D] text-[11px]">
              Sign up for emails to get updates from Nike on products, offers, and your member benefits.
            </label>
          </div>

          {/* Terms and Privacy Policy */}
          <div className="text-center text-sm text-[12px] text-[#8D8D8D] mt-2">
            <p>
              By creating an account, you agree to Nike's.
              <a href="/privacy-policy" className="text-[#8D8D8D] underline">  Privacy Policy</a>
              and
              <a href="/terms" className="text-[#8D8D8D] underline">Terms of Use</a>.
            </p>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 font-medium uppercase hover:bg-gray-600 focus:outline-none"
            >
              Join Us
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-[#8D8D8D] mt-4">
          <p>
            Already a member?{" "}
            <a href="/signin" className="text-black text-[12px] font-normal underline">
              Sign In
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default page
