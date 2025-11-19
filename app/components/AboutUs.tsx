import React from 'react'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <section className='bg-gradient-to-br from-cinnamon-500 to-cinnamon-800 py-20 relative flex justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-4/5 lg:w-4/5 xl:w-3/5 animate-fade-in-down'>
                <div className='py-2 flex justify-center items-center overflow-hidden group'>
                    <Image 
                        src="/Images/about.jpg"
                        width={350}
                        height={500}
                        alt='About'
                        className='object-cover rounded-xl cursor-pointer transition-transform duration-700 group-hover:scale-95'
                    />
                </div>
                <div className='py-4'>
                    <h1 className='text-cream text-2xl'>/About Us</h1>

                    <div className='grid grid-rows-2 py-6 leading-8 text-justify'>
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
            </div>
        </section>
    )
}
