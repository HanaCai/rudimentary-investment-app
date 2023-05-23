import Layout from '@/components/Layout'
import Image from 'next/image';
import React from 'react'
import batikLogo from '../public/images/batik.jpg'
import { Fragment, useState } from "react";
// import {
//     Accordion,
//     AccordionHeader,
//     AccordionBody,
// } from "@material-tailwind/react";


const Portfolio = () => {
    const body = [
        {
            name: 'Large-cap',
            percentage: 50,
            holdings: [
                {
                    name: 'iShares Core S&P 500 ETF',
                    symbol: 'IVV',
                    percentage: 25,
                },
                {
                    name: 'Invesco QQQ Trust',
                    symbol: 'QQQ',
                    percentage: 25,
                },
            ],
        },
        {
            name: 'Small-cap',
            percentage: 10,
            holdings: [
                {
                    name: 'SPDR S&P 600 Small Cap Value ETF',
                    symbol: 'SLYV',
                    percentage: 10,
                },
            ],
        },
        {
            name: 'International',
            percentage: 10,
            holdings: [
                {
                    name: 'iShares Core MSCI Emerging Markets ETF',
                    symbol: 'IEMG',
                    percentage: 10,
                },
            ],
        },
        {
            name: 'Bonds',
            percentage: 30,
            holdings: [
                {
                    name: 'Vanguard Total Bond Market ETF',
                    symbol: 'BND',
                    percentage: 20,
                },
                {
                    name: 'iShares MBS ETF',
                    symbol: 'MBB',
                    percentage: 10,
                },
            ],
        },
    ];
    const name = 'Batik Porfolio';
    const [currentAccordionIndex,setCurrentAccordionIndex] = useState(0);
    function onOpen(index){
        console.log(index,'index');
        setCurrentAccordionIndex(index);
    }
    return (
        <Layout>
            <section className="contianer-fluid mx-auto bg-slate-100 ">
                <div className=" flex flex-col px-8">
                    <div className='flex justify-between items-center'>
                        <h1 className='text-center text-4xl text-slate-900'>{name}</h1>
                        <Image src={batikLogo} alt='batik' width={100} height={75} />
                    </div>
                    <hr className=' bg-slate-200 h-0.5 w-full my-2' />
                    <div className='flex flex-col items-center gap-4'>
                        <p className='text-lg text-slate-400'>Portfolio Value</p>
                        <p className='text-2xl text-slate-900'>$466,165.14</p>
                        <p className='text-lg text-slate-400'>$30,076</p>
                        <button className='p-3 rounded-3xl text-center border-2 border-slate-900 text-slate-900'>Transfer Money</button>
                    </div>
                    <div className='text-2xl text-slate-900'>
                    Portfolio Holdings
                    </div>
                    {
                        body.map((item,index)=>{
                            return(
                                <div id="accordion-collapse" data-accordion="collapse" className='py-8' key={index}>
                                <h2 id="accordion-collapse-heading-1">
                                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1" onClick={()=>onOpen(index)}>
                                    <span>{item?.name} {item?.percentage} % </span>
                                    <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </h2>
                                {
                                    item?.holdings?.map((holding)=>{
                                        return(
                                            <div id="accordion-collapse-body-1" className={currentAccordionIndex === index ? '' : 'hidden'} aria-labelledby="accordion-collapse-heading-1">
                                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                                {
                                                    <p className="mb-2 text-gray-500 dark:text-gray-400">{holding.symbol} {holding.name} {holding.percentage}% </p>
                                                }
                                            </div>
                                            </div>    
                                        )
                                    })
                                }

                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </Layout>
    )
}

export default Portfolio