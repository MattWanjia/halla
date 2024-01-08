import NavigationDrawer from '@/components/NavigationDrawer'
import React, {useState} from 'react'
import {MdHome, MdContactSupport} from 'react-icons/md'
import { FaUser, FaHistory } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import RequestCard from '@/components/RequestCard';

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const openDrawer = () => {
        setIsOpen(true)
    }

    const closeDrawer = () => {
        setIsOpen(false)
    }

    const textClass = 'font-semibold text-gray-600'

  return (
    <div className='h-screen w-screen flex flex-row bg-white'>
        <div onMouseLeave={closeDrawer} onMouseEnter={openDrawer} className={`h-full bg-[#51ce9c] flex flex-col items-center ${isOpen ? 'translate-x-0 w-48' : 'translate-x-0 w-12'}`}>
            <img className='w-12'  onClick={toggleDrawer} src='/logo.jpg'/>
            <ul className='space-y-5 pt-4'>
                <li>{isOpen ? <p className={textClass}>DASHBOARD</p> : <MdHome size={25} color='gray'/>}</li>
                <li>{isOpen ? <p className={textClass}>PROFILE</p> : <FaUser size={25} color='gray'/>}</li>
                <li>{isOpen ? <p className={textClass}>HISTORY</p> : <FaHistory size={25} color='gray'/>}</li>
                <li>{isOpen ? <p className={textClass}>SETTINGS</p> : <IoSettings size={25} color='gray'/>}</li>
                <li>{isOpen ? <p className={textClass}>ABOUT</p> : <FcAbout size={25} color='gray'/>}</li>
                <li>{isOpen ? <p className={textClass}>SUPPORT</p> : <MdContactSupport size={25} color='gray'/>}</li>
            </ul>
        </div>
        <div className='h-full w-full flex flex-row justify-center'>
            <div className='w-3/4 h-full bg-blue-200'>

            </div>
            <div className='w-1/3 h-full flex items-center justify-center'>
                <div className='w-3/4 h-5/6 border-2 border-[#51ce9c] rounded-md flex flex-col items-center p-2 space-y-2'>
                    <p className='text-sm font-semibold text-[#51ce9c]'>Upcoming Requests</p>
                    <RequestCard/>
                </div>
            </div>
        </div>
    </div>
  )
}
