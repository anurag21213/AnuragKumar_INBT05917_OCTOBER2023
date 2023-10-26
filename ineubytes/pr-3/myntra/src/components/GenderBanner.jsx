import React from 'react'
import img1 from '../images/bg.png'
import img2 from '../images/banner.jpg'

const GenderBanner = () => {
  return (
    <div>
     <div className='m-[20px] h-[300px]'>
      <img src={img2} className='w-[100%] h-[100%]'/>
     </div>
      <div className='m-[30px] p-2  h-[500px]'>
      <img src={img1} className='w-[100%] h-[100%]'/>
      </div>
    </div>
  )
}

export default GenderBanner
