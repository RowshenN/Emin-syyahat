import React from 'react'

import surat from '../../images/hotel.png'
import map from '../../images/map.svg'

const HotleCards = ({country,name}) => {
  return (
    <div className='w-full relative'>
        <img src={surat} alt="surat" className='w-full -z-10 object-contain' />

        <div className='absolute rounded-lg py-4 px-5 mx-auto left-3 bottom-3 w-[90%] z-10 bg-white'>
            <p className='mb-[13px] text-[16px] font-[poppins-medium] '>" {name} " hotel</p>
            <div className='w-full flex items-center justify-start gap-2'>
                <img src={map} alt="map" />
                <p className='text-[14px] font-[poppins-medium]'>{country}</p>
            </div>
        </div>
    </div>
  )
}

export default HotleCards