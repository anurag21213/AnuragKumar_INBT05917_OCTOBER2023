import React from 'react'

import img1 from '../images/cat_img1.jpg'
import img2 from '../images/cat_img2.jpg'
import img3 from '../images/cat_img3.jpg'
import img4 from '../images/cat_img4.jpg'
import img5 from '../images/cat_img5.jpg'
import img6 from '../images/cat_img6.jpg'
import img7 from '../images/cat_img7.jpg'
import img8 from '../images/cat_img8.jpg'
import img9 from '../images/cat_img9.jpg'
import img10 from '../images/cat_img10.jpg'
import img11 from '../images/cat_img11.jpg'
import img12 from '../images/cat_img12.jpg'

const Category = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
    <h2 className=' text-[#BC9E2D] text-4xl uppercase font-serif my-4' >Category Specials</h2>
    <div className='w-[90%] flex justify-evenly items-center flex-wrap'>
      <img src={img1} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img2} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img3} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img4} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img5} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img6} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img7} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img8} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img9} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img10} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img11} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
      <img src={img12} className='w-[220px] h-[320px] border-2 border-gray-300 m-2'/>
    </div>
     
    </div>
  )
}

export default Category
