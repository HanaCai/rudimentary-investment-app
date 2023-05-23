import Image from 'next/image'
import React from 'react'

const CommonCard = ({title,description,cardImage,switchPlace}) => {
  return (
    <div className='contianer-fluid mx-auto bg-slate-500'>
        <div className={switchPlace ? 'flex p-8 flex-row-reverse' :'flex p-8'} >
            <div className='flex flex-col w-1/2'>
                <p className='text-6xl text-slate-900'>
                    {title}
                </p>
                <p className='text-lg text-slate-700'>
                    {description}
                </p>
            </div>
            <div className='flex flex-col w-1/2'>
                <Image src={cardImage} alt='card image' width={250} height={300}  className=' w-11/12 h-80'/>
            </div>
        </div>
    </div>
  )
}

export default CommonCard