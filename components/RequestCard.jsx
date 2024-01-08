import React from 'react'
import {FaUser} from 'react-icons/fa'

export default function RequestCard() {
  return (
    <div className='w-5/6 bg-gray-100 flex flex-row p-2 rounded-md'>
        <div className='w-1/5 flex items-center'>
            <FaUser color='blue' size={30}/>
        </div>
        <div className='w-4/5'>
            <p className='text-[#51ce9c] text-sm'>Edward Okoth</p>
            <p className='text-[#51ce9c] text-xs'>Lawyer</p>
            {/*<p className='text-blue-300 text-sm cursor-pointer'>Respond to request</p>*/}
            <div className='w-full flex flex-row justify-between pt-2'>
                <button className='bg-green-400 text-xs hover:w-1/2 px-2 rounded-md'>ACCEPT</button>
                <button className='bg-red-400 text-xs hover:w-1/2 px-2 rounded-md'>REJECT</button>
            </div>
        </div>
    </div>
  )
}
