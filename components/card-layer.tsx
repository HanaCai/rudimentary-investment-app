import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardLayered = ({authorImage,authorName,authorDetail,buttonName,linkName,showAuthor}) => {
  return (
    <div className='container-fluid px-8 my-4 '>
        <div className='flex flex-col items-center py-6 rounded-lg bg-white'>
            {
                showAuthor ? 
            <div className='flex gap-6'>
                <Image src={authorImage} alt='author-image' className=" rounded-full " width={75} height={75}/>
                <div className='flex flex-col justify-center'>
                    <p className='text-2xl text-slate-600'>{authorName}</p>
                    <p className='text-lg text-slate-600'>{authorDetail}</p>
                </div>
            </div> : null
            }
            <button className="flex text-white bg-slate-900 rounded-3xl p-2 justify-center">
                {buttonName}
            </button>
            <Link href={'/'} className=' underline'>
                <p className='text-slate-900'>{linkName}</p>
            </Link>
        </div>
    </div>
  )
}

export default CardLayered