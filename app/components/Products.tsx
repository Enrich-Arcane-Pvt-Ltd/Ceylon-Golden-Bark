import React from 'react'
import Image from 'next/image'

export default function Products() {
    return (
        <section className='bg-brown relative w-full min-h-screen py-10'>
            <div className='mb-10 xl:ml-96 text-center xl:text-left animate-fade-in-down'>
                <h1 className='text-cinnamon-100 text-xl md:text-2xl font-serif'>/ Our Products</h1>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center gap-10 xl:gap-0 px-4 w-full lg:w-full xl:w-3/5 mx-auto'>
                <div className='bg-light w-full max-w-[500px] h-auto lg:h-[650px] rounded-3xl flex flex-col justify-between items-center p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-in-left'>
                    <div className='w-full sm:w-3/4 relative h-64 md:h-72 overflow-hidden rounded-xl group'>
                        <Image 
                            src='/Images/product-1.jpg'
                            alt='Ceylon Cinnamon Infused "Sugar"'
                            fill
                            className='object-cover rounded-xl cursor-pointer transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2'
                        />
                    </div>

                    <div className='w-full sm:w-3/4 flex flex-col'>
                        <h1 className='text-center text-cinnamon-400 font-semibold text-base md:text-lg transition-colors duration-300 hover:text-cinnamon-500'>
                            Ceylon Cinnamon Infused "Sugar"
                        </h1>
                        <p className='text-cinnamon-100 text-center leading-7 md:leading-8 py-4 text-sm md:text-base'>
                            A perfect blend of premium Ceylon cinnamon and fine sugar, crafted to add a warm, aromatic sweetness to your favorite dishes.
                            Ideal for coffee, desserts, oatmeal, baked goods, or a flavorful sprinkle on toast—this infusion delivers the delicate taste and
                            natural health benefits of true Ceylon cinnamon in every spoonful.
                        </p>
                    </div>
                </div>

                <div className='bg-light w-full max-w-[500px] h-auto lg:h-[650px] rounded-3xl flex flex-col justify-between items-center p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-in-right'>
                    <div className='w-full sm:w-3/4 relative h-64 md:h-72 overflow-hidden rounded-xl group'>
                        <Image 
                            src='/Images/product-4.jpg'
                            alt='Ceylon Cinnamon Infused "Coffee"'
                            fill
                            className='object-cover rounded-xl cursor-pointer transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2'
                        />
                    </div>
                    <div className='w-full sm:w-3/4 flex flex-col'>
                        <h1 className='text-center text-cinnamon-400 font-semibold text-base md:text-lg transition-colors duration-300 hover:text-cinnamon-500'>
                            Ceylon Cinnamon Infused "Coffee"
                        </h1>
                        <p className='text-cinnamon-100 text-center leading-7 md:leading-8 py-4 text-sm md:text-base'>
                            Experience a warm, naturally aromatic twist to your daily brew with our Ceylon Cinnamon Infused Coffee. 
                            Blending premium ground coffee with the delicate sweetness of true Ceylon cinnamon, this infusion delivers a smooth, 
                            comforting flavor profile and a rich, inviting aroma—crafted to elevate every sip.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}