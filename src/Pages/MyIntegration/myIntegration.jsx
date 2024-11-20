// IMPORTS
import React from 'react';


// FRONTEND
const MyIntegration = () => {
  return (
    <div className="relative w-full min-h-[599px] overflow-hidden bg-[#4F46E5] flex items-center justify-center">
      {/* Background GIF */}
      <img 
        src="/myGif.gif" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background Animation"
      />

      {/* Background Image */}
      <img 
        src="/column.png" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background Overlay"
      />

      {/* Centered Frame and Text Container */}
      <div className="relative flex flex-col items-center justify-center text-white space-y-8 md:flex-col lg:flex-row lg:space-y-0 lg:space-x-8">
        {/* Frame Image */}
        <img 
          src="/frame.png" 
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
          alt="Frame"
        />

        {/* Text Content */}
        <div className="flex flex-col items-center text-center md:items-center lg:items-start lg:text-left max-w-xl">
          <p className="sxl:text-40 lg:text-40 md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl poppins-bold mb-4">
            Integrated with your favourite apps
          </p>
          <p className="poppins-regular mb-8">
            Lorem ipsum dolor sit amet consectetur. Tortor sed aliquam sed id  enim donec pharetra. Sit a quam sed ante nisl eget mauris amet.
          </p>
          <button className="bg-white text-12 poppins-semibold text-[#684fff] sxl:px-9 sxl:py-3 lg:px-9 lg:py-3 md:px-7 md:py-4 sm:px-6 sm:py-3 xs:px-6 xs:py-3 ls:px-6 ls:py-3 ms:px-6 ms:py-3 rounded-full hover:bg-[#684fff] hover:text-white hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyIntegration;
