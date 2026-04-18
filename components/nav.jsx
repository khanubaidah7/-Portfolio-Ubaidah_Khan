"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export default function NavBar() {
    const [navIcon, setNavIcon] = useState(false)
    const toggleMenu = () => {
        setNavIcon(!navIcon);
    };

    return (
        <div className=" shadow-xl">
            <div className="flex justify-around sm:justify-around md:justify-around p-3 gap-10 sm:gap-14 md:gap-40 lg:gap-40 xl:gap-40 fixed z-20 bg-white shadow-2xl w-full">
                {/* <h1 className="text-xl text-gray-700 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"><Link href="#">Code.<span style={{ color: "#40E0D0" }}>Log</span></Link></h1> */}
                <div className="links hidden md:flex text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl flex gap-10 p-2 text-gray-700  "  >
                    <Link href="#hero-sec" className="hover:text-[#40E0D0]">Home</Link>
                    <Link href="#work" className="hover:text-[#40E0D0]">Projects</Link>
                    <Link href="#skills" className="hover:text-[#40E0D0]">Skills</Link>
                    <Link href="#myresume" className="hover:text-[#40E0D0]">Resume</Link>
                    <Link href="#about" className="hover:text-[#40E0D0]">About</Link>
                    <Link href="#contact-us" className="hover:text-[#40E0D0]">Hire Me</Link>
                </div>
                <div className="flex md:hidden ">
                    {navIcon ? <RxCross1 className="text-gray-600" size={25} onClick={() => setNavIcon(!navIcon)} /> : <RxHamburgerMenu className="text-gray-600" size={25} onClick={() => setNavIcon(!navIcon)} />  }

                </div>
            </div>
            <div className={`${navIcon ? "block" : "hidden"} md:hidden pt-16 py-4 relative bg-white z-10 `}>
                <ul className="flex flex-col items-center gap-4 text-md">
                    <li onClick={toggleMenu}><Link href="#">Home</Link></li>
                    <li onClick={toggleMenu}><Link href="#work">Works</Link></li>
                    <li onClick={toggleMenu}><Link href="#service">Services</Link></li>
                    <li onClick={toggleMenu}><Link href="#about">About</Link></li>
                    <li onClick={toggleMenu}><Link href="#contact-us">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}