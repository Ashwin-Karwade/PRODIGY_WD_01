import React, { useState } from 'react'
import { LuMenuSquare} from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'

const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
       <div className='w-full sticky top-0 z-50 py-6 bg-[#031b93]'>
    <div className="md:flex items-center justify-between pl-10 pr-10 ">
        <div className="flex items-center">
            <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-2 sm:h-9" alt="Landwind Logo"/>
            <span className="self-center text-sm sm:text-[25px] font-semibold whitespace-nowrap text-white font-sans mr-2">Responsive landing page</span>
        </div>
        <div className='md:hidden absolute right-8 top-7 '>
            <button onClick={()=> setIsOpen(!isOpen)} className='text-2xl'>
               {isOpen? <IoClose />:<LuMenuSquare />}
            </button>
        </div>
 
        <div className={`md:flex transition-all duration-1000 ease-out text-[18px]  md:items-center md:pb-0 pb-10 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${isOpen?"top-16":"top-[-490px]"}  text-[#f0e0f3]`}>
                    <a href="/"
                        className="block md:inline-block pl-4 py-2  pr-4 hover:bg-[#030d59] hover:border-2 hover:border-orange-400 hover:text-white rounded-md font-bold font-sans tracking-wide ">Home</a>
                <a href="/"
                        className="block md:inline-block  pl-4  py-2 pr-4  hover:bg-[#030d59]  hover:border-2 hover:border-orange-400 hover:text-white rounded-md  font-bold font-sans tracking-wide">Company</a>
                <a href="/"
                        className="block md:inline-block  pl-4 pr-4 py-2  hover:bg-[#030d59]    hover:border-2 hover:border-orange-400 hover:text-white rounded-md  font-bold font-sans tracking-wide">Features</a>
                <a href="/"
                        className="block md:inline-block  pl-4 pr-4 py-2  hover:bg-[#030d59]   hover:border-2 hover:border-orange-400 hover:text-white rounded-md  font-bold font-sans tracking-wide">Team</a>
                <a href="/"
                        className="block md:inline-block  pl-4 pr-4 py-2   hover:bg-[#030d59]   hover:border-2 hover:border-orange-400 hover:text-white rounded-md  font-bold font-sans tracking-wide">Contact</a>
        </div>

    </div>
    </div>

    </div>
  )
}

export default NavigationBar
