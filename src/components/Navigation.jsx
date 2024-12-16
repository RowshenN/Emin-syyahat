import React from 'react'

import logo from '../images/logo.svg'
import globe from '../images/globe.svg'
import vector from '../images/Vector.svg'

const Navigation = () => {
  return (
    <div className='w-full mt-[20px] px-5'>
        <div className='w-full flex items-center justify-between'>
            <div className='w-[75px]'>
                <img src={logo} className='w-full object-contain' alt="logo" />
            </div>

            <div className='flex items-center text-[14px] font-[poppins-medium] justify-center gap-4'>
                <div className='bg-[#F9F9F9] py-[10px] px-5 rounded-[29px] w-full flex items-center justify-center gap-9'>
                    <p className='cursor-pointer'>About us</p>
                    <p className='cursor-pointer'>Turkmenistan</p>
                    <p className='flex cursor-pointer items-center justify-center gap-2'>Tours <img src={vector} alt="vector" /></p>
                    <p className='cursor-pointer'>Hotels</p>
                    <p className='cursor-pointer'>Visa</p>
                    <p className='cursor-pointer'>Blog</p>
                </div>

                <div className='bg-[#F9F9F9] cursor-pointer py-[10px] px-5 gap-2 rounded-[29px] flex items-center justify-center'>
                    <img src={globe} alt="globe" />
                    <p>EN</p>
                </div>
            </div>

            <div className='bg-[#009833] py-[10px] px-5 text-[14px] font-[poppins-medium] text-white rounded-[29px]'>
                <button className='w-full outline-none'>Contact us</button>
            </div>
        </div>
    </div>
  )
}

export default Navigation