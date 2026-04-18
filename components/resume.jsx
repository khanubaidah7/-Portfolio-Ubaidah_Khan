import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
  return (
    <div id="myresume" data-aos="fade-up" className="min-h-screen flex flex-col justify-center items-center  py-20">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono text-center mb-10 text-black">Resume</h1>

      <p className="text-center text-gray-700 mb-6 px-4 sm:px-20 md:px-40">
        You can download my resume by clicking the button below.
      </p>

      <a
        href="/Abu Ubaidah Khan Resume.pdf"
        download
        className="flex items-center gap-2 bg-[#40E0D0] text-white px-6 py-3 rounded-3xl shadow-lg hover:bg-[#32cfcf] transition-all duration-300"
      >
        <FaDownload />
        Download Resume
      </a>

    </div>
  );
}