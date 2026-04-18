"use client";
import AboutUs from "@/components/about";
import ContactUs from "@/components/contact";
import HeroSection from "@/components/hero";
import ResumePage from "@/components/resume";
import ServicesSection from "@/components/services";
import Ourworks from "@/components/works";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    Aos.init({
      easing:"ease-out-back",
      duration: 1600,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,

    });
    Aos.refresh()
  },[]);
  return ( 
    <div className="">
      <HeroSection/>
      <Ourworks/>
      <ServicesSection/>
      <AboutUs/>
      <ResumePage/>
      <ContactUs/>
    </div>
   );
}
