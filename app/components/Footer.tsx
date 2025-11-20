import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-black via-brown to-cinnamon-900 text-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16">
                    <div className="space-y-6 animate-fade-in-left">
                        <div className="flex items-center space-x-3 group">
                            <div className="w-12 h-12 bg-cinnamon-200 rounded-lg flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                                <span className="text-cinnamon-900 font-bold text-xl">
                                    <Image
                                        src="/Images/logo-2.png"
                                        alt="Hero Background"
                                        className="w-full h-full object-cover rounded-lg cursor-pointer"
                                        fill
                                        priority
                                    />
                                </span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-cream">Ceylon Golden Bark</h3>
                                <p className="text-gold-100 text-sm">Crafted with care</p>
                            </div>
                        </div>

                        <p className="text-parchment/90 leading-relaxed text-sm max-w-sm">
                            Bringing warmth and quality to every creation. Experience the difference of artisanal excellence.
                        </p>

                        <div className="flex space-x-3">
                            {['facebook', 'instagram', 'twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-9 h-9 bg-cinnamon-700/50 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                    aria-label={social}
                                >
                                    <span className="text-cream text-sm font-semibold capitalize">
                                        {social[0].toUpperCase()}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 md:col-span-1 xl:col-span-2">
                        <h4 className="text-xl font-semibold text-gold-400 mb-6 flex items-center">
                            <span className="w-8 h-0.5 bg-gold-400 mr-3"></span>
                            Get in Touch
                        </h4>

                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                            <a
                                href="mailto:info@ceylongoldenbark.com"
                                className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300"
                            >
                                <div className="w-12 h-12 bg-gold-500/20 group-hover:bg-gold-500/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                    <Mail className="w-5 h-5 text-gold-400" />
                                </div>
                                <div>
                                    <p className="text-parchment/70 text-xs uppercase tracking-wider mb-1">Email</p>
                                    <p className="text-cream font-medium group-hover:text-gold-400 transition-colors">
                                        info@ceylongoldenbark.com
                                    </p>
                                </div>
                            </a>

                            <a
                                href="tel:+94741909228"
                                className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300"
                            >
                                <div className="w-12 h-12 bg-gold-500/20 group-hover:bg-gold-500/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                    <Phone className="w-5 h-5 text-gold-400" />
                                </div>
                                <div>
                                    <p className="text-parchment/70 text-xs uppercase tracking-wider mb-1">Phone</p>
                                    <p className="text-cream font-medium group-hover:text-gold-400 transition-colors">
                                        +94 74 1909228
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-start space-x-4 lg:col-span-2">
                                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-gold-400" />
                                </div>
                                <div>
                                    <p className="text-parchment/70 text-xs uppercase tracking-wider mb-1">Address</p>
                                    <p className="text-cream font-medium">
                                        123 Artisan Street, Creative District<br />
                                        <span className="text-parchment/80">New York, NY 10001</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-cinnamon-700/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <p className="text-parchment/70 text-sm text-center sm:text-left">
                        © {year} Ceylon Golden Bark. All rights reserved.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-gold-600/10 to-transparent rounded-tl-full pointer-events-none"></div>
        </footer>

    );
};

export default Footer;