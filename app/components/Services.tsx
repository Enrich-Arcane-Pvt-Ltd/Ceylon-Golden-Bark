import React from 'react'
import Image from 'next/image'

export default function Services() {
    return (
        <section className='bg-gradient-to-br from-cinnamon-500 to-cinnamon-800 py-20 relative'>
            <div className='mb-10 xl:ml-96 text-center xl:text-left animate-fade-in-down'>
                <h1 className='text-cinnamon-100 text-xl md:text-2xl font-serif'>/ Why to Choose Us</h1>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 xl:place-items-stretch place-items-center'>
                <div className='py-2 flex justify-center xl:justify-end xl:mr-8 items-center overflow-hidden group w-3/4 xl:w-auto'>
                    <Image 
                        src="/Images/about.jpg"
                        width={500}
                        height={500}
                        alt='About'
                        className='object-cover rounded-xl cursor-pointer transition-transform duration-700 group-hover:scale-95 animate-fade-in-down'
                    />
                </div>
                
                <div>
                    <div className='py-2 flex justify-center xl:justify-start animate-fade-in-right'>
                        <div className='flex flex-col w-3/4 pb-8'>
                            <div className='flex flex-row items-center w-full'>
                                <Image 
                                    src="/Images/vanilla.png"
                                    width={40}
                                    height={100}
                                    alt='About'
                                    className='object-contain'
                                />
                                <h1 className='text-gold-100 font-semibold ml-3 xl:text-4xl text-xl'>Premium Quality</h1>
                            </div>
                            <div className='flex flex-row items-center w-full xl:pt-4 pt-2'>
                                <div className='xl:w-14 w-28 md:w-16'></div>
                                <p className='text-cinnamon-100 tracking-wide md:tracking-wider border-b pb-4 border-gold-100 xl:w-3/4'>
                                    We ensure that every stick, quill, and powder meets the highest quality standards.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 flex justify-center xl:justify-start animate-fade-in-right'>
                        <div className='flex flex-col w-3/4 pb-8'>
                            <div className='flex flex-row items-center w-full'>
                                <Image 
                                    src="/Images/map-2.png"
                                    width={40}
                                    height={100}
                                    alt='About'
                                    className='object-contain'
                                />
                                <h1 className='text-gold-100 font-semibold ml-3 xl:text-4xl text-xl'>Ethical Practices</h1>
                            </div>
                            <div className='flex flex-row items-center w-full xl:pt-4 pt-2'>
                                <div className='xl:w-14 w-28 md:w-16'></div>
                                <p className='text-cinnamon-100 tracking-wide md:tracking-wider border-b pb-4 border-gold-100 xl:w-3/4'>
                                    We work closely with local farmers, empowering communities and ensuring fair wages.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 flex justify-center xl:justify-start animate-fade-in-right'>
                        <div className='flex flex-col w-3/4 pb-8'>
                            <div className='flex flex-row items-center w-full'>
                                <Image 
                                    src="/Images/web.png"
                                    width={40}
                                    height={100}
                                    alt='About'
                                    className='object-contain'
                                />
                                <h1 className='text-gold-100 font-semibold ml-3 xl:text-4xl text-xl'>Global Reach</h1>
                            </div>
                            <div className='flex flex-row items-center w-full xl:pt-4 pt-2'>
                                <div className='xl:w-14 w-28 md:w-16'></div>
                                <p className='text-cinnamon-100 tracking-wide md:tracking-wider border-b pb-4 border-gold-100 xl:w-3/4'>
                                    Our products are trusted by wholesalers, retailers and food manufactures across the globe.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 flex justify-center xl:justify-start animate-fade-in-right'>
                        <div className='flex flex-col w-3/4 pb-8'>
                            <div className='flex flex-row items-center w-full'>
                                <Image 
                                    src="/Images/reputation.png"
                                    width={40}
                                    height={100}
                                    alt='About'
                                    className='object-contain'
                                />
                                <h1 className='text-gold-100 font-semibold ml-3 xl:text-4xl text-xl'>Customer Satisfaction</h1>
                            </div>
                            <div className='flex flex-row items-center w-full xl:pt-4 pt-2'>
                                <div className='xl:w-14 w-28 md:w-16'></div>
                                <p className='text-cinnamon-100 tracking-wide md:tracking-wider border-b pb-4 border-gold-100 xl:w-3/4'>
                                    We got the extra mile to ensure your experience with us is seamless and fulfilling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
