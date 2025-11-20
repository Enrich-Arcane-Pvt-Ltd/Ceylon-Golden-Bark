import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/Images/hero.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                    fill
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 -z-10"></div>

            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-yellow-600/20 rotate-45 -z-5 animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-40 h-40 border-2 border-amber-400/20 rotate-12 -z-5 animate-pulse delay-700"></div>
            <div className="absolute top-1/3 right-10 w-24 h-24 border border-yellow-500/30 rounded-full -z-5"></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
                <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
                    <div className="overflow-hidden">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-100 tracking-wide animate-fade-in">
                            Spice Up Your Life with
                        </h1>
                        <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mt-4 animate-shimmer"></div>
                    </div>

                    <div className="relative py-6 md:py-8">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 leading-tight animate-scale-in drop-shadow-2xl">
                            Ceylon Golden
                        </h1>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-yellow-500 leading-tight animate-scale-in-delay drop-shadow-2xl">
                            Bark
                        </h1>
                        
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent blur-sm"></div>
                    </div>

                    <div className="relative inline-block mt-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-600/10 to-transparent blur-xl"></div>
                        <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-widest animate-fade-in-up">
                            Where Quality Meets Authenticity
                        </h2>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-8 animate-fade-in-up-delay">
                        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-yellow-600"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse"></div>
                        <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-yellow-600"></div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-yellow-600/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-yellow-600 rounded-full animate-scroll"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes scroll {
                    0% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(16px);
                        opacity: 0;
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }

                .animate-scale-in {
                    animation: scale-in 1.2s ease-out forwards;
                    animation-delay: 0.3s;
                    opacity: 0;
                }

                .animate-scale-in-delay {
                    animation: scale-in 1.2s ease-out forwards;
                    animation-delay: 0.6s;
                    opacity: 0;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                    animation-delay: 1s;
                    opacity: 0;
                }

                .animate-fade-in-up-delay {
                    animation: fade-in-up 1s ease-out forwards;
                    animation-delay: 1.3s;
                    opacity: 0;
                }

                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }

                .animate-scroll {
                    animation: scroll 2s infinite;
                }

                .delay-700 {
                    animation-delay: 700ms;
                }
            `}</style>
        </section>
    );
}