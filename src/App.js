import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FiMic } from "react-icons/fi";
import { IoIosPlayCircle } from "react-icons/io";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center h-screen relative">
        {/* Left Arrow */}
        <div
          className="absolute left-1/4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          title="Previous"
          onClick={() => console.log("Left arrow clicked")}
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#f0f0f0] shadow-[4px_4px_10px_#d0d0d0,_-4px_-4px_10px_#ffffff] hover:scale-105 transition duration-300">
            <FaArrowLeft size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Right Arrow */}
        <div
          className="absolute right-1/4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          title="Next"
          onClick={() => console.log("Right arrow clicked")}
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#f0f0f0] shadow-[4px_4px_10px_#d0d0d0,_-4px_-4px_10px_#ffffff] hover:scale-105 transition duration-300">
            <FaArrowRight size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Your Existing Card */}
        <div className="bg-gray-200 w-80 h-[350px] rounded-3xl shadow-[10px_10px_20px_#b8b8b8,_-10px_-10px_20px_#ffffff] flex flex-col py-5 px-6 items-center transition-transform hover:scale-[1.03] duration-300 ease-in-out">
          {/* Top Icon Row */}
          <div className="flex w-full justify-between items-center">
            <div className="w-10 h-10 content-center justify-center flex items-center ">
              <FiMic
                size={25}
                className="text-black hover:text-black transition-colors duration-300 cursor-pointer"
                title="Record"
              />
            </div>
            <IoIosPlayCircle
              size={35}
              className="text-gray-600 hover:text-white transition-colors duration-300 cursor-pointer"
              title="Play"
            />
          </div>

          {/* Letter Display */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <p className="text-gray-900 text-[11rem] font-extrabold leading-none mt-4 select-none">
              ت
            </p>
            <p className="mt-8 text-gray-700  text-xl font-medium font-serif tracking-wide">
              Taa
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
