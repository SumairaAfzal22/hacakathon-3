import React from 'react'

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
                <a className="text-base font-medium text-white hover:text-white/70" href="/">
                  BECOME A MEMBER
                </a>
              </li>
              <li className="mb-4">
                <a className="text-base font-medium text-white hover:text-white/70" href="#">
                  SIGN UP FOR EMAIL
                </a>
              </li>
              <li className="mb-4">
                <a className="text-base font-medium text-white hover:text-white/70" href="#">
                  Send Us Feedback
                </a>
              </li>
              <li>
                <a className="text-base font-medium text-white hover:text-white/70" href="#">
                  STUDENT DISCOUNT
                </a>
              </li>
            </nav>
          </div>

          {/* Get Help */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-lg font-medium tracking-tight text-white mb-10 mt-10">GET HELP</h2>
            <nav className="list-none">
              <li className="mb-4">
                <a className="text-base font-medium text-[#757575]" href="/">
                  Order Status
                </a>
              </li>
              <li className="mb-4">
                <a className="text-base font-medium text-[#757575]" href="/">
                  Delivery
                </a>
              </li>
              <li className="mb-4">
                <a className="text-base font-medium text-[#757575]" href="/">
                  Returns
                </a>
              </li>
              <li className="mb-4">
                <a className="text-base font-medium text-[#757575]" href="/">
                  Payment Options
                </a>
              </li>
              <li className="mb-4">
                <a className="text-base font-medium text-[#757575]" href="/">
                  Contact Us On Nike.com Inquiries
                </a>
              </li>
              <li>
                <a className="text-base font-medium text-[#757575]" href="/">
                  Contact Us On All Other Inquiries
                </a>
              </li>
            </nav>
          </div>

          {/* About Me */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-lg font-medium tracking-tight text-white mb-10 mt-10">ABOUT ME</h2>
            <nav className="list-none">
              <li className="mb-4">
                <a className="text-base font-medium text-[#757575]" href="/">
                  News
                </a>
              </li>
              <li className="mb-4">
                <a className="text-base font-medium text-[#757575]" href="/">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a className="text-base font-medium text-[#757575]" href="/">
                  Investors
                </a>
              </li>
              <li>
                <a className="text-base font-medium text-[#757575]" href="/">
                  Sustainability
                </a>
              </li>
            </nav>
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
          
            <a href="#" className="w-8 h-8 text-gray-500 hover:text-white">
            
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
             
            </a>
          </span>
        </div>
      </div>
      </footer>
  )
}

export default Footer
