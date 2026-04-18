"use client";

export default function ContactUs(){

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            alert("Message Sent Successfully");
            e.target.reset();
        } else {
            alert("Something went wrong");
        }
    };

    return(
        <div id="contact-us" className="py-2">
            <h1 className="text-black text-center text-2xl sm:text-3xl md:text-4xl sm:text-5xl xl:text-6xl  mt-20 sm:mt-20 md:mt-24 lg:mt-24 xl:mt-32" style={{ fontFamily: "monospace" }}>Hire Me</h1>
            <div className="flex justify-center">
            <div className="flex flex-col ">

            {/* FORM START */}
            <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 flex  justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-6 mt-12 sm:mt-16 md:mt-20 lg:mt-22 xl:mt-22">
                
                <div data-aos="fade-right" className="" >
                    <h1 className="text-md sm:text-md md:text-xl lg:text-xl xl:text-xl text-gray-600">First Name</h1>
                    <input type="text" name="firstName" className="border-2 text-gray-500 h-10 w-[66vw] sm:w-[68vw] md:w-[33vw] lg:w-[26vw] xl:w-[26vw] rounded-3xl focus:border-[#40E0D0] pl-4 outline-none" required />
                </div>

                <div data-aos="fade-left" className="" >
                    <h1 className="text-md sm:text-md md:text-xl lg:text-xl xl:text-xl text-gray-600 ">Last Name</h1>
                    <input type="text" name="lastName" required className="border-2 text-gray-500 h-10 w-[66vw] sm:w-[68vw] md:w-[33vw] lg:w-[26vw] xl:w-[26vw] rounded-3xl focus:border-[#40E0D0] pl-4 outline-none"/>
                </div>

                <div data-aos="fade-right">
                    <h1 className="text-md sm:text-md md:text-xl lg:text-xl xl:text-xl text-gray-600 ">Email</h1>
                    <input type="email" name="email" required className="border-2 text-gray-500 h-10 w-[66vw] sm:w-[68vw] md:w-[33vw] lg:w-[26vw] xl:w-[26vw] rounded-3xl focus:border-[#40E0D0] pl-4 outline-none"/>
                </div>

                <div data-aos="fade-left">
                    <h1 className="text-md sm:text-md md:text-xl lg:text-xl xl:text-xl text-gray-600 ">Subject</h1>
                    <input type="text" name="subject" required className="border-2 text-gray-500 h-10 w-[66vw] sm:w-[68vw] md:w-[33vw] lg:w-[26vw] xl:w-[26vw] rounded-3xl focus:border-[#40E0D0] pl-4 outline-none"/>
                </div>
                
            </div>

            <div data-aos="fade-up" className="msg mt-2 sm:mt-2 md:mt-4 lg:-6 xl:mt-6">
                <h1 className="text-md sm:text-md md:text-xl lg:text-xl xl:text-xl text-gray-600 ">Message</h1>
                <textarea name="message" required className="border-2 text-gray-500 rounded-3xl w-full sm:w-[68vw] md:w-full lg:w-full xl:w-full pl-4 pt-4 focus:border-[#40E0D0] outline-none" rows={5} placeholder="Write your message or questions here..."></textarea>
                
                <div className="border-2  text-[11px] sm:text-[11px] md:text-[12px] lg:text-[14px] xl:text-[18px] mt-2 sm:mt-2 md:mt-4 lg:mt-4 xl:mt-4 bg-[#40E0D0] border-[#40E0D0] shadow-md h-9  sm:h-9 md:h-10 lg:h-10 xl:h-12 w-28 sm:w-28 md:w-32 lg:w-40 xl:w-44  rounded-3xl text-center">
                        <button type="submit" className=" p-2 hover:text-white w-full">Send Message</button>
                </div>
            </div>

            </form>
            {/* FORM END */}

          </div>
            </div>
        </div>
    )
}