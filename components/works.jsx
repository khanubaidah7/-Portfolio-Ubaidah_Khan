"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Ourworks() {

    const [preview, setPreview] = useState(false);
    const [images, setImages] = useState([]);
    const [zoomed, setZoomed] = useState(null);

    const openPreview = (imgs) => {
        setImages(imgs);
        setPreview(true);
    };

    const closePreview = () => {
        setPreview(false);
    };

    return (

        <div id="work" className="py-2">

            <h1 data-aos="fade-up" className="text-black text-2xl sm:text-3xl md:text-4xl sm:text-5xl xl:text-6xl text-center mt-20 sm:mt-20 md:mt-24 lg:mt-24 xl:mt-32" style={{ fontFamily: "monospace" }}>Projects</h1>


            {/* Project 1 */}

            <div data-aos="fade-up-right" className="pr1 mt-14 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-20 flex">

                <div>
                    <Image src="/traveling impact.png" alt="pic" width={300}
                        height={400} className="ml-4 sm:ml-4 md:ml-20 lg:ml-20 xl:ml-20 h-[200px] sm:h-[230px] md:h-[250px] lg:h-[270px] xl:h-[300px] w-[205px] sm:w-[230px] md:w-[250px] lg:w-[270px] xl:w-[300px] brightness-100 shadow-2xl" />
                </div>

                <div className="ml-10 sm:ml-10 md:ml-20 lg:ml-32 xl:ml-32 flex flex-col justify-center">

                    <h1 className="text-lg sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">Pakistan Covid Analysis</h1>

                    <p className="text-[10px] sm:text-[10px] md:text-[13px] lg:text-md xl:text-lg mt-2 sm:mt-2 md:mt-4 lg:mt-4 xl:mt-4">
                        This project analyzes the spread and impact of COVID-19 in Pakistan using confirmed cases&#44; deaths&#44; recoveries&#44; and travel history data.
                    </p>

                    <div className="flex gap-3">

                        <div className="border-2 text-[9px] md:text-[10px] lg:text-[11px] xl:text-[15px] mt-4 bg-[#40E0D0] border-[#40E0D0] shadow-md h-8 lg:h-9 xl:h-11 w-28 xl:w-40 rounded-3xl text-center">
                            <button className="p-2 hover:text-white">
                                <Link href="https://github.com/khanubaidah7/pakistan-covid-analysis" target="_blank">
                                    Check Project
                                </Link>
                            </button>
                        </div>

                        <div className="border-2 text-[9px] md:text-[10px] lg:text-[11px] xl:text-[15px] mt-4 bg-black text-white shadow-md h-8 lg:h-9 xl:h-11 w-28 xl:w-40 rounded-3xl text-center">
                            <button className="p-2"
                                onClick={() => openPreview([
                                    "/overall situation dashboard.png",
                                    "/city wise situation.png",
                                    "/traveling impact.png"
                                ])}>
                                Preview
                            </button>
                        </div>

                    </div>

                </div>

            </div>


            {/* Project 2 */}

            <div data-aos="fade-up-right" className="pr2 justify-end mt-14 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-32 flex">

                <div className="ml-4 sm:ml-10 md:ml-20 lg:ml-32 xl:ml-32 flex flex-col justify-center">

                    <h1 className="text-lg sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">E commerce Sales Data Analysis</h1>

                    <p className="text-[10px] sm:text-[10px] md:text-[13px] lg:text-md xl:text-lg mt-2 sm:mt-2 md:mt-4 lg:mt-4 xl:mt-4">
                        To analyze sales and business performance for better data-driven decisions.
                    </p>

                    <div className="flex gap-3">

                        <div className="border-2 text-[9px] md:text-[10px] lg:text-[11px] xl:text-[15px] mt-4 bg-[#40E0D0] border-[#40E0D0] shadow-md h-8 lg:h-9 xl:h-11 w-28 xl:w-40 rounded-3xl text-center">
                            <button className="p-2 hover:text-white">
                                <Link href="https://github.com/khanubaidah7/E-commerce-Sales-Data-Analysis" target="_blank">
                                    Check Project
                                </Link>
                            </button>
                        </div>

                        <div className="border-2 text-[9px] md:text-[10px] lg:text-[11px] xl:text-[15px] mt-4 bg-black text-white shadow-md h-8 lg:h-9 xl:h-11 w-28 xl:w-40 rounded-3xl text-center">
                            <button className="p-2"
                                onClick={() => openPreview([
                                    "/sales summary.png",
                                    "/product summary.png",
                                    "/region performance.png",
                                    "/high value customer.png",
                                    "/late delivery impact and payment method popularity.png",
                                ])}>
                                Preview
                            </button>
                        </div>

                    </div>

                </div>

                <div>
                    <Image src="/high value customer.png" alt="pic" width={300}
                        height={400} className="mr-16 sm:ml-4 md:ml-20 lg:ml-20 xl:ml-20 h-[200px] sm:h-[230px] md:h-[250px] lg:h-[270px] xl:h-[300px] w-[205px] sm:w-[230px] md:w-[250px] lg:w-[270px] xl:w-[300px] shadow-2xl" />
                </div>

            </div>
            <div data-aos="fade-up-right" className="pr1 mt-14 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-20 flex">

                <div>
                    <Image src="/job details.png" alt="pic" width={300}
                        height={400} className="ml-4 sm:ml-4 md:ml-20 lg:ml-20 xl:ml-20 h-[200px] sm:h-[230px] md:h-[250px] lg:h-[270px] xl:h-[300px] w-[205px] sm:w-[230px] md:w-[250px] lg:w-[270px] xl:w-[300px] brightness-100 shadow-2xl" />
                </div>

                <div className="ml-10 sm:ml-10 md:ml-20 lg:ml-32 xl:ml-32 flex flex-col justify-center">

                    <h1 className="text-lg sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">HR Analytics - Employee Attrition</h1>

                    <p className="text-[10px] sm:text-[10px] md:text-[13px] lg:text-md xl:text-lg mt-2 sm:mt-2 md:mt-4 lg:mt-4 xl:mt-4">
                        Explored employee data to uncover patterns of attrition and created insightful visualizations to support data-driven HR decisions.
                    </p>

                    <div className="flex gap-3">

                        <div className="border-2 text-[9px] md:text-[10px] lg:text-[11px] xl:text-[15px] mt-4 bg-[#40E0D0] border-[#40E0D0] shadow-md h-8 lg:h-9 xl:h-11 w-28 xl:w-40 rounded-3xl text-center">
                            <button className="p-2 hover:text-white">
                                <Link href="https://github.com/khanubaidah7/pakistan-covid-analysis" target="_blank">
                                    Check Project
                                </Link>
                            </button>
                        </div>

                        <div className="border-2 text-[9px] md:text-[10px] lg:text-[11px] xl:text-[15px] mt-4 bg-black text-white shadow-md h-8 lg:h-9 xl:h-11 w-28 xl:w-40 rounded-3xl text-center">
                            <button className="p-2"
                                onClick={() => openPreview([
                                    "/overview.png",
                                    "/job details.png",
                                    "/promotion salary and attrition.png"
                                ])}>
                                Preview
                            </button>
                        </div>

                    </div>

                </div>

            </div>


            {/* MODAL */}

            {preview && (

                <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">

                    <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">

                        <button
                            onClick={closePreview}
                            className="absolute top-3 right-4 text-2xl font-bold"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-center mb-6">
                            Project Images
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            {images.map((img, index) => (

                                <img
                                    key={index}
                                    src={img}
                                    onClick={() => setZoomed(img)}
                                    className="cursor-pointer rounded-lg shadow-lg hover:scale-105 transition"
                                />

                            ))}

                        </div>

                    </div>

                </div>

            )}


            {/* ZOOM */}

            {zoomed && (

                <div
                    onClick={() => setZoomed(null)}
                    className="fixed inset-0 bg-black/90 flex justify-center items-center z-[60]"
                >

                    <img
                        src={zoomed}
                        className="max-h-[90%] max-w-[90%] rounded-lg"
                    />

                </div>

            )}

        </div>

    )
}