import React from 'react'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <section className='bg-gradient-to-br from-cinnamon-500 to-cinnamon-800 py-20 relative'>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-red-300'>
                <div className='p-4 flex justify-center items-center'>
                    <Image 
                        src="/Images/about.jpg"
                        width={400}
                        height={600}
                        alt='About'
                        className='rounded-xl cursor-pointer'
                    />
                </div>
                <div className='bg-red-800'>
                    <h1>/About Us</h1>

                    <div>
                        <p>
                            Welcome to Ceylon-Golden-Bark. Your trusted partner for authentic Ceylon Cinnamon exports.
                            Rooted in the lush landscapes of Sri Lanka, we take pride in offering the world's finest cinnamon, renowned for its unique
                            aroma, delicate flavor and unparalleled health benefits.
                        </p>
                        <p>
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
