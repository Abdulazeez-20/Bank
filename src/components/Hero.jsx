import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'

const Hero = () => (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`} >
        <div className={`flex-1 ${styles.flexStart} px-6 xl:px-0 sm:px-16  flex-col`}>
            <div className='flex flex-row items-center py-2 px-4 
            bg-discount-gradient rounded-[10px] mb-2'>
                <img src={discount} alt="discound" className='w-[32px] h-[32px]' />
                <p className={`${styles.paragraph}`}>
                    <span className='text-white'>20%</span> Discount for {" "}
                    <span className='font-bold text-white'>1 Month</span> Account
                </p>
            </div>

            <div className='flex flex-row items-center justify-between w-full'>
                <h1 className='text-[52px] text-white
                flex-1 font-poppins font-semibold ss:text-[72px]
                ss:leading-[100px] leading-[75px]'>
                    The Next <br className='hidden sm:block' />
                    <span className='text-gradient'>Generation</span> {" "}
                    Payment Method.
                </h1>
                <img src={robot} alt="robot img" className='w-full' />
                <h3>just a test</h3>
            </div>
        </div>
    </section>
)

export default Hero