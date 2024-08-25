import Header from "@/components/Header";

import Hero from "@/sections/Hero";
import Brands from "@/sections/Brands";
import Features from "@/sections/Features";
import Producs from "@/sections/Products";
import Prices from "@/sections/Prices";
import Testimonials from "@/sections/Testimonials";
import Sign_Up from "@/sections/Sign-Up";

export default function Home() {
  return (
    <article className="">
      <div className="hero__wrap">
        <Header />
        <Hero />
      </div>
      <Brands />
      <Features />
      <Producs />
      <Prices />
      <Testimonials />
      <Sign_Up />
    </article>
  );
}
