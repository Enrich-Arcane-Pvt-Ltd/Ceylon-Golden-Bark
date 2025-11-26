import React from 'react'
import Image from 'next/image'
import MotionWrapper from './MotionWrapper'

export default function Products() {
    return (
        <section className='bg-gradient-to-br from-black via-brown to-cinnamon-900 relative w-full min-h-screen py-10'>
            <div className="container mx-auto px-0 sm:px-2">
                <MotionWrapper variant='fadeUp'>
                    <div className='mb-10 text-center '>
                        <h1 className='text-cinnamon-100 text-2xl xl:text-6xl md:text-4xl font-serif'>/ Our Products</h1>
                    </div>
                </MotionWrapper>

                <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center gap-10 xl:gap-4 px-4 w-full lg:w-full xl:w-4/5 mx-auto'>
                    <MotionWrapper variant='fadeLeft'>
                        <div className='bg-light w-full max-w-[500px] h-auto lg:h-[660px] rounded-3xl flex flex-col justify-between items-center p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105'>
                            <div className='w-full sm:w-3/4 relative h-64 md:h-72 overflow-hidden rounded-xl group'>
                                <Image 
                                    src='/Images/product-1.png'
                                    alt='Ceylon Cinnamon Infused "Sugar"'
                                    fill
                                    className='object-cover rounded-xl cursor-pointer pb-2 xl:pb-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2'
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
                    </MotionWrapper>

                    <MotionWrapper variant='fadeRight'>
                        <div className='bg-light w-full max-w-[500px] h-auto lg:h-[660px] rounded-3xl flex flex-col justify-between items-center p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105'>
                            <div className='w-full sm:w-3/4 relative h-64 md:h-72 overflow-hidden rounded-xl group'>
                                <Image 
                                    src='/Images/product-4.png'
                                    alt='Ceylon Cinnamon Infused "Coffee"'
                                    fill
                                    className='object-cover rounded-xl cursor-pointer pb-2 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2'
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
                    </MotionWrapper>
                </div>
            </div>
        </section>
    )
}