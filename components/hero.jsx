"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <div id="hero-sec" className="">
      <div className="hero-bg h-[90vh] w-[100%] brightness-100">
        <div className="flex flex-col justify-center items-center">
          {/* Typewriter Effect on Heading */}
          <h1 data-aos="zoom-in-up" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center pt-32 sm:pt-32 md:pt-32 lg:pt-32 xl:pt-40 text-white">I am Abu Ubaidah Khan</h1>
          <h1  data-aos="zoom-in-up" className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-2 sm:pt-4 md:pt-8 lg:pt-10 xl:pt-8 text-black">
            {" "}
            <span className="text-white">
              <Typewriter
                words={["Data Analyst","Transforming Data Into Decisions","Making Data Speak"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </h1>

          {/* <h1  data-aos="zoom-in-up" className="text-[11px] sm:text-sm md:text-sm lg:text-md xl:text-xl text-center pt-2 sm:pt-2 md:pt-2 lg:pt-2 xl:pt-6">
            Turning data into insights
          </h1> */}

          {/* <div  data-aos="zoom-in-up" className="pt-2 sm:pt-2 md:pt-2 lg:pt-2 xl:pt-6">
            <button
              className="border-2 h-8 sm:h-8 md:h-10 lg:h-10 xl:h-10 w-32 text-[10px] sm:text-[11px] md:text-[12px] lg:text-md xl:text-md sm:w-32 md:w-32 lg:w-40 xl:w-40 rounded-3xl brightness-125 hover:brightness-100"
              style={{ backgroundColor: "#40E0D0", borderColor: "#40E0D0" }}
            >
              <Link href="#work">Explore Projects</Link>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
