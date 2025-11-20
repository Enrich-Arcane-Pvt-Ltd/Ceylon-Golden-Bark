import Image from "next/image";
import MotionWrapper from "./MotionWrapper";

export default function OurStory() {
    return (
        <section className="py-20 relative w-full min-h-screen">
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

            <div className="container mx-auto px-0 sm:px-2">
                <div className="grid grid-cols-1 xl:grid-cols-3 w-full min-h-screen">
                    <div className="xl:col-span-2 h-full flex flex-col justify-center">
                        <MotionWrapper variant="fadeLeft">
                            <div className="flex flex-row items-center w-full xl:ml-20 ml-0 justify-center xl:justify-start">
                                <h1 className="uppercase text-brown font-bold xl:text-6xl md:text-4xl text-2xl xl:mr-2 lg:mr-2">
                                    Our Story
                                </h1>
                                <Image
                                    src="/Images/cinnamon.png"
                                    width={50}
                                    height={500}
                                    alt="About"
                                    className="object-cover rounded-xl cursor-pointer transition-transform duration-700 group-hover:scale-95"
                                />
                            </div>
                        </MotionWrapper>

                        <MotionWrapper variant="fadeLeft">
                            <div className="xl:ml-20 ml-0 leading-[2.5] py-8 xl:leading-10 text-justify px-4 xl:text-xl lg:px-20 xl:px-4">
                                <p className="text-cinnamon-100">
                                    Welcome to{" "}
                                    <span className="italic text-gold-400 font-bold">
                                        Ceylon Golden Bark
                                    </span>
                                    , your trusted partner for authentic Ceylon Cinnamon exports.
                                    Rooted in the lush landscapes of Sri Lanka, we take pride in
                                    offering the world's finest cinnamon—celebrated for its gentle
                                    aroma, delicate flavor, and remarkable health benefits. Our
                                    story is shaped by generations of expertise in cultivating and
                                    crafting premium Ceylon Cinnamon. What began as a passion for
                                    sharing Sri Lanka's natural treasures has grown into a mission
                                    to deliver products that honor purity, tradition, and
                                    uncompromising quality. Today, we proudly extend this heritage
                                    through our signature creations:{" "}
                                        <strong className="italic text-gold-400 font-bold">
                                            Ceylon Cinnamon-Infused Sugar{" "}
                                        </strong>
                                    and{" "}
                                    <strong className="italic text-gold-400 font-bold">
                                        Ceylon Cinnamon-Infused Coffee
                                    </strong>
                                    . Each product is crafted with care—infusing the warm,
                                    aromatic essence of true Ceylon Cinnamon into everyday
                                    essentials. Whether sweetening your recipes with a natural
                                    cinnamon touch or starting your morning with a rich, aromatic
                                    brew, our infused products bring the finest of Sri Lankan
                                    cinnamon directly to your table. At Ceylon Golden Bark, we
                                    believe in authenticity, sustainability, and preserving the
                                    legacy of true Ceylon Cinnamon—one product at a time.
                                </p>
                            </div>
                        </MotionWrapper>
                    </div>

                    <MotionWrapper variant="fadeRight">
                        <div className="xl:col-span-1 h-full xl:flex justify-end items-center relative hidden">
                            <div className="w-72 h-96 absolute rounded-3xl shadow-xl rotate-12 overflow-hidden">
                                <Image
                                    src="/Images/story-2.jpg"
                                    alt="Our Story"
                                    fill
                                    className="object-cover rounded-3xl cursor-pointer transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            <div className="w-72 h-96 absolute top-[25%] left-[10%] rounded-3xl shadow-xl -rotate-12 overflow-hidden">
                                <Image
                                    src="/Images/story-1.jpg"
                                    alt="Our Story"
                                    fill
                                    className="object-cover rounded-3xl cursor-pointer transition-transform duration-700 hover:scale-110"
                                />
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}
