import React from 'react'

import img1 from '../images/fimg1.png'
import img2 from '../images/fimg2.png'

const Footer = () => {
    return (
        <div className='m-[60px] flex items-start justify-center flex-wrap'>
            <div className='w-[15%] my-1 '>
                <h6 className='uppercase font-semibold'>Online Shopping</h6>
                <ul>
                    <li className=' font-base text-[grey]'><a>Men</a></li>
                    <li className=' font-base text-[grey]'><a>Women</a></li>
                    <li className=' font-base text-[grey]'><a>Kids</a></li>
                    <li className=' font-base text-[grey]'><a>Home&Living</a></li>
                    <li className=' font-base text-[grey]'><a>Beauty</a></li>
                    <li className=' font-base text-[grey]'><a>Gift Cards</a></li>
                    <li className=' font-base text-[grey]'><a>Myntra Insider</a></li>
                </ul>
            </div>
            <div className='w-[15%] my-1 '>
                <h6 className='uppercase font-semibold'>Customer policies</h6>
                <ul>
                    <li className=' font-base text-[grey]'><a>Contact Us</a></li>
                    <li className=' font-base text-[grey]'><a>FAQ</a></li>
                    <li className=' font-base text-[grey]'><a>T&C</a></li>
                    <li className=' font-base text-[grey]'><a>Track Orders</a></li>
                    <li className=' font-base text-[grey]'><a>Terms Of Use</a></li>
                    <li className=' font-base text-[grey]'><a>Shipping</a></li>
                    <li className=' font-base text-[grey]'><a>Cancellation</a></li>
                    <li className=' font-base text-[grey]'><a>Returns</a></li>
                    <li className=' font-base text-[grey]'><a>Privacy Policy</a></li>
                    <li className=' font-base text-[grey]'><a>Grievance Officer</a></li>
                </ul>
            </div>
            <div className='w-[30%] my-1 flex items-center justify-evenly flex-col'>
                <h6 className='uppercase font-semibold'>Expericnce Myntra app on mobile</h6>
                <div className=' flex items-center justify-evenly w-[100%] my-4'>
                    <img src={img2} className='w-[40%] h-[50px] rounded-md hover:cursor-pointer' />
                    <img src={img1} className='w-[40%] h-[50px] rounded-md hover:cursor-pointer' />

                </div>
            </div>
            <div className='w-[20%] my-1 py-8'>
                <div className='flex items-center justify-center my-4'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  
                    </div>
                    <div>
                        <h5 className=' inline font-bold'>100% ORIGINAL</h5> <span className=' text-[grey]' > gurantee for all products at myntra.com</span>
                    </div>

                </div>
                <div className='flex items-center justify-center my-4'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>                  
                    </div>
                    <div>
                        <h5 className=' inline font-bold uppercase'>Return within 14 days</h5> <span className=' text-[grey]' > of receiving orders</span>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Footer
