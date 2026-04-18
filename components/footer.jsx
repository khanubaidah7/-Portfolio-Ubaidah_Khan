import Link from "next/link"
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footerr(){
    return(
        <div className="mt-14 sm:mt-20 md:mt-32 lg:mt-40 xl:mt-40 pt-10 sm:pt-10 md:pt-20 lg:pt-20 xl:pt-20 text-gray-300 bg-[#333333]">
            
            {/* Centered Content */}
            <div className="flex flex-col items-center justify-center text-center">
                
                <h1 className="text-md sm:text-md md:text-xl lg:text-2xl xl:text-2xl">
                    Contact Details
                </h1>

                <div className="flex items-center gap-2 pt-4">
                    <IoCall />
                    <p className="text-[11px] sm:text-[13px] md:text-sm lg:text-sm xl:text-sm">
                        03178376433
                    </p>
                </div>

                <div className="flex items-center gap-2 pt-4">
                    <IoIosMail />
                    <p className="text-[11px] sm:text-[13px] md:text-sm lg:text-sm xl:text-sm">
                        khanubaidah7@gmail.com
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-12 pt-6 text-xl">
                    <Link href="https://github.com/khanubaidah7"  target="_blank"><FaGithub /></Link>
                    <Link href="https://www.instagram.com/ubaidahkhan.76/" target="_blank"><FaInstagram /></Link>
                    <Link href="https://www.linkedin.com/in/abu-ubaidah-khan-0755953b0/" target="_blank"><FaLinkedin /></Link>
                </div>

            </div>

            <hr  className="mt-10 sm:mt-10 md:mt-20 lg:mt-20 xl:mt-20
            mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 ml-10 sm:ml-12 md:ml-18 lg:ml-20 xl:ml-24 mr-10 sm:mr-12 md:mr-18 lg:mr-20 xl:mr-24 "/>

            <div className="cc text-md sm:text-md md:text-xl lg:text-2xl xl:text-2xl text-center pb-2 sm:pb-2 md:pb-2 lg:pb-4 xl:pb-4">
                <h1>
                    &copy; 2026 <Link href="#"><span style={{color:"#40E0D0"}}>Portfolio</span></Link> All rights reserved.
                </h1>
            </div>

        </div>
    )
}