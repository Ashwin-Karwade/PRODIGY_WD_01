import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-screen top-0">
        <div className="absolute top-10 flex flex-col md:flex-row items-center justify-between  pl-10 pr-10">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="font-regular text-grey-700 font-medium text-4xl md:text-5xl sm:text-2xl leading-tight mb-5">
              Responsive Landing Page
            </h1>
            <p className="font-regular text-xl mb-8 mt-5 width-[180px] text-blue-600 sm:text-black/75 md:text-xl">
            Responsive web design (RWD) is a web design approach to make web pages render well on all screen sizes and resolutions while ensuring good usability.  </p>
        
            <a
              href="/"
              className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
