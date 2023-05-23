import Layout from '@/components/Layout'
import React from 'react'

const Settings = () => {
    const name = 'Contact Information'
  return (
    <Layout>
        <div className='container-fluid p-8'>
        <h1 className='text-center text-4xl text-slate-900 pb-4'>{name}</h1>
        <form action="">
            <div className='flex flex-wrap '>
                <div className=' flex flex-col sm:w-1/2 w-full px-2'>
                    <label htmlFor="">Legal First Name</label>
                    <input type="text" placeholder='adrian' className=' border-0 border-b-2 border-slate-300 focus:outline-0'/>
                </div>
                <div className=' flex flex-col sm:w-1/2 w-full px-2'>
                    <label htmlFor="">Legal Last Name</label>
                    <input type="text" placeholder='howe' className=' border-0 border-b-2 border-slate-300 focus:outline-0' />
                </div>
                <div className=' flex flex-col sm:w-1/2 w-full px-2'>
                    <label htmlFor="">Preffered First Name</label>
                    <input type="text" placeholder='Ed' className=' border-0 border-b-2 border-slate-300 focus:outline-0' />
                </div>
                <div className=' flex flex-col sm:w-1/2 w-full px-2'>
                    <label htmlFor="">Phone</label>
                    <input type="number" placeholder='+16861546684' minLength={9} maxLength={11} className=' border-0 border-b-2 border-slate-300 focus:outline-0' />
                </div>
                <div className=' flex flex-col sm:w-1/2 w-full px-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Email' className=' border-0 border-b-2 border-slate-300 focus:outline-0' />
                </div>
            </div>
        </form>
        </div>
    </Layout>
  )
}

export default Settings