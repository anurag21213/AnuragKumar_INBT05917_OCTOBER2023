import React from 'react'
import logo from '../images/myntra.png'
const Header = () => {
  return (
    <div className='p-4 flex items-center justify-center h-[80px] border-b-2 border-gray-300'>
      <div className='w-[10%] flex items-center justify-center  '>
        <img src={logo} className='w-[60px] h-[60px]' />
      </div>
      <div className='w-[40%] flex items-center '>
        <div className='px-[10px]'><a className=' font-semibold cursor-pointer '>MENU</a></div>
        <div className='px-[10px]'><a className=' font-semibold cursor-pointer '>KIDS</a></div>
        <div className='px-[10px]'><a className=' font-semibold cursor-pointer '>WOMEN</a></div>
        <div className='px-[10px]'><a className=' font-semibold cursor-pointer '>HOME & LIVING</a></div>
        <div className='px-[10px]'><a className=' font-semibold cursor-pointer '>BEAUTY</a></div>
        <div className='px-[10px]'><a className=' font-semibold cursor-pointer '>STUDIO</a></div>
      </div>
      <div className='w-[35%] flex items-center justify-evenly rounded-md overflow-hidden relative'>
        <div className='p-2  absolute left-[10px] '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>
        <input type='text' placeholder='Search for products,brands and more' className='w-[100%] h-[35px] bg-[#F5F5F6] outline-none px-10 placeholder:text-left focus:bg-white focus:border-[2px] ' />
      </div>
      <div className='w-[15%] flex items-center justify-evenly ' >
        <div className='flex-col flex items-center justify-center'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div className='text-[12px] font-semibold'>
            Profile
          </div>
        </div>
        <div className='flex-col flex items-center justify-center'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <div className='text-[12px] font-semibold'>
            Wishlist
          </div>
        </div>
        <div className='flex-col flex items-center justify-center'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <div className='text-[12px] font-semibold'>
            Bag
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
