import React from 'react'
import Image from 'next/image'
import MotionWrapper from './MotionWrapper'

export default function AboutUs() {
    return (
        <section className='py-20 relative w-full min-h-screen xl:flex justify-center'>
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/Images/background.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                    fill
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 -z-10"></div>

            <div className="container mx-auto px-0 sm:px-2 flex relative justify-center">
                <div className='grid grid-cols-1 xl:grid-cols-2 w-4/5 lg:w-4/5 xl:w-4/5 xl:place-items-center'>
                    <MotionWrapper variant='fadeLeft'>
                        <div className='py-2 flex justify-center items-center overflow-hidden group'>
                            <Image 
                                src="/Images/about.png"
                                width={450}
                                height={500}
                                alt='About'
                                className='object-cover rounded-xl cursor-pointer transition-transform duration-700 group-hover:scale-95'
                            />
                        </div>
                    </MotionWrapper>

                    <MotionWrapper variant='fadeRight'>
                        <div className='py-4'>
                            <h1 className='text-cream text-2xl xl:text-6xl md:text-4xl'>/About Us</h1>
                            <div className='grid grid-rows-2 py-6 leading-8 xl:leading-10 text-justify xl:text-xl'>
                                <p className='text-cinnamon-100'>
                                    Welcome to <span className='italic text-gold-500 font-semibold'>Ceylon-Golden-Bark</span> your trusted partner for authentic Ceylon Cinnamon exports.
                                    Rooted in the lush landscapes of Sri Lanka, we take pride in offering the world's finest cinnamon, renowned for its unique
                                    aroma, delicate flavor and unparalleled health benefits.
                                </p>
                                <p className='py-2 text-cinnamon-100'>
                                    Our Story Our journey began with a passion for sharing the natural treasures of Sri Lanka with the world. With generations of
                                    experience in cultivating and processing Ceylon cinnamon, we are committed to preserving the authenticity and tradition that make 
                                    our cinnamon truly exceptional.
                                </p>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    )
}
