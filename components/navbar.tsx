import Image from 'next/image'
import React from 'react'
import logo from '../public/images/logo.jpg'
import homeIcon from '../public/icons/home.svg'
import messagesIcon from '../public/icons/messages.svg'
import settingsIcon from '../public/icons/settings.svg'
import Link from 'next/link'
import { useRouter } from "next/router";
const navbar = () => {
    const router = useRouter();
  return (
    <div className='container-fluid bg-slate-800'>
        <div className='flex justify-between pt-2 pb-2 px-2'>
            <div className='flex w-9/12'>
            <Image src={logo} alt='Logo' width={60} height={50} />
            </div>
            <div className='flex justify-evenly w-1/4'>
                <Link href={'/'} className='flex flex-col items-center text-white text-xs'>
                    <Image src={homeIcon} alt='home' width={25} height={25} className='rounded-lg'/>
                    Home
                </Link>
                <Link href={'/portfolio'} className='flex flex-col items-center text-white text-xs' onClick={() => router.push("/portfolio")}>
                    <Image src={messagesIcon} alt='Messages' width={25} height={25} className='rounded-lg'/>
                    Portfolio
                </Link>
                <Link href={'/settings'} className='flex flex-col items-center text-white text-xs' onClick={() => router.push("/settings")}>
                    <Image src={settingsIcon} alt='Settings' width={25} height={25} className='rounded-lg'/>
                    Settings
                </Link>
            </div>

        </div>
    </div>
  )
}

export default navbar