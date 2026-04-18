import { FaFileExcel, FaChartBar } from "react-icons/fa";
import { SiMysql, SiPython } from "react-icons/si";

export default function SkillsSection() {
  return (
    <div id="skills" className="py-2">
      <h1 data-aos="fade-up" className="text-black text-2xl sm:text-3xl md:text-4xl sm:text-5xl xl:text-6xl text-center mt-20 sm:mt-20 md:mt-24 lg:mt-24 xl:mt-32" style={{ fontFamily: "monospace" }}>
        Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

        {/* Excel 90% */}
        <div data-aos="zoom-in-right" className="sr1 ml-2 sm:ml-4 md:ml-6 lg:ml-10 xl:ml-10 mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-24 flex items-center gap-4">
          <FaFileExcel className="w-16 sm:w-18 md:w-20 lg:w-28 xl:w-28 h-16 sm:h-18 md:h-20 lg:h-28 xl:h-28" color="#40E0D0" />
          <div className="flex flex-col w-full sm:w-[37vw] md:w-[37vw] lg:w-[37vw] xl:w-[37vw]">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl pt-2">Excel</h1>
            <div className="bg-gray-300 rounded-full h-4 mt-2">
              <div className="bg-[#40E0D0] h-4 rounded-full" style={{ width: "80%" }}></div>
            </div>
            <p className="text-gray-600 mt-1">80%</p>
          </div>
        </div>

        {/* SQL 90% */}
        <div data-aos="zoom-in-left" className="sr2 ml-2 sm:ml-4 md:ml-6 lg:ml-10 xl:ml-10 mt-10 sm:mt-12 md:mt-20 lg:mt-24 xl:mt-24 flex items-center gap-4">
          <SiMysql className="w-16 sm:w-18 md:w-20 lg:w-28 xl:w-28 h-16 sm:h-18 md:h-20 lg:h-28 xl:h-28" color="#40E0D0" />
          <div className="flex flex-col w-full sm:w-[37vw] md:w-[37vw] lg:w-[37vw] xl:w-[37vw]">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl pt-2">SQL</h1>
            <div className="bg-gray-300 rounded-full h-4 mt-2">
              <div className="bg-[#40E0D0] h-4 rounded-full" style={{ width: "90%" }}></div>
            </div>
            <p className="text-gray-600 mt-1">90%</p>
          </div>
        </div>

        {/* Python 80% */}
        <div data-aos="zoom-in-right" className="sr3 ml-2 sm:ml-4 md:ml-6 lg:ml-10 xl:ml-10 mt-10 sm:mt-12 md:mt-20 lg:mt-24 xl:mt-24 flex items-center gap-4">
          <SiPython className="w-16 sm:w-18 md:w-20 lg:w-28 xl:w-28 h-16 sm:h-18 md:h-20 lg:h-28 xl:h-28" color="#40E0D0" />
          <div className="flex flex-col w-full sm:w-[37vw] md:w-[37vw] lg:w-[37vw] xl:w-[37vw]">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl pt-2">Python</h1>
            <div className="bg-gray-300 rounded-full h-4 mt-2">
              <div className="bg-[#40E0D0] h-4 rounded-full" style={{ width: "80%" }}></div>
            </div>
            <p className="text-gray-600 mt-1">80%</p>
          </div>
        </div>

        {/* Power BI 80% */}
        <div data-aos="zoom-in-left" className="sr4 ml-2 sm:ml-4 md:ml-6 lg:ml-10 xl:ml-10 mt-10 sm:mt-12 md:mt-20 lg:mt-24 xl:mt-24 flex items-center gap-4">
          <FaChartBar className="w-16 sm:w-18 md:w-20 lg:w-28 xl:w-28 h-16 sm:h-18 md:h-20 lg:h-28 xl:h-28" color="#40E0D0" />
          <div className="flex flex-col w-full sm:w-[37vw] md:w-[37vw] lg:w-[37vw] xl:w-[37vw]">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl pt-2">Power BI</h1>
            <div className="bg-gray-300 rounded-full h-4 mt-2">
              <div className="bg-[#40E0D0] h-4 rounded-full" style={{ width: "80%" }}></div>
            </div>
            <p className="text-gray-600 mt-1">80%</p>
          </div>
        </div>

      </div>
    </div>
  );
}