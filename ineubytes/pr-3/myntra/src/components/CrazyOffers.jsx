import React from 'react'
import img1 from '../images/crz_img1.jpg'
import img2 from '../images/crz_img2.jpg'
import img3 from '../images/crz_img3.jpg'
import img4 from '../images/crz_img4.jpg'
import img5 from '../images/crz_img5.jpg'
import img6 from '../images/crz_img6.jpg'
import download from '../images/downloadbanner.jpg'

const CrazyOffers = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h2 className=' text-[#BC9E2D] text-4xl uppercase font-serif my-4' >Festive Crazy Offers</h2>
            <div className=' w-screen  bg-[#A02823] flex items-center justify-evenly flex-wrap'>
                <img src={img1} className='w-[270px] h-[320px]' />
                <img src={img2} className='w-[270px] h-[320px]' />
                <img src={img3} className='w-[270px] h-[320px]' />
                <img src={img4} className='w-[270px] h-[320px]' />
                <img src={img5} className='w-[270px] h-[320px]' />
                <img src={img6} className='w-[270px] h-[320px]' />
            </div>
            <div className=' mx-[20px] h-[350px]'>
             <img src={download} className='w-[100%] h-[100%]' />
            </div>
            <div>

            </div>
        </div>
    )
}

export default CrazyOffers
