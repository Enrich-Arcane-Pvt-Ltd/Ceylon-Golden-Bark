"use client"

import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Services from "./components/Services";
import OurStory from "./components/OurStory";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main >
        <Hero />
        <AboutUs />
        <Products />
        <Services />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}
