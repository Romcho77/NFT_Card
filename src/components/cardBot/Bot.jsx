import React from 'react'

export default function Bot() {
  return (
    <div className='flex flex-col p-[5%] gap-2'>
        <h2 className='text-white text-start text-2xl font-medium hover:text-teal-200'>
            Equilibrium #3429
        </h2>
        <p className='text-[#6A7E9F] text-start text-[20px]'>Our Equilibrium collection promotes balance and calm.</p>
        
        <div className='flex justify-between'>

            <div className='flex gap-3'>
                <img src="./../assets/images/icon-ethereum.svg" alt="" />
                <p className='text-start text-teal-300'>0.041 ETH</p>
            </div>
            <div className='flex gap-3'>
                <img src="./../assets/images/icon-clock.svg" alt="" />
                <p className='text-start text-slate-400'>3 days left</p>
            </div>
        </div>

        <div className='border-t-2 p-[2%] flex justify-start gap-5 items-center'>
            <div className="flex justify-center items-center h-[100%] w-[20%] img  rounded-full border-white">
                <img src="./../assets/images/image-avatar.png" className='h-[60%] w-[60%] border-2 rounded-full' alt="" />
            </div>
            <p className='text-[#6A7E9F]'>Creation of <span className='text-white hover:text-teal-300'>Jules Wyvern</span></p>
        </div>

    </div>
  )
}
