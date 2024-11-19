// IMPORTS
import React, { useState } from 'react';
import { testimonials } from '../../data/data.js';
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify/icons-mdi/arrow-left';
import arrowRight from '@iconify/icons-mdi/arrow-right';


// FRONTEND
// TestimonialCard.
const TestimonialCard = ({ name, title, image, icon, quote }) => {
  return (
    <div className="group max-w-md p-8 m-6 rounded-[30px] shadow-lg bg-white relative transform transition-transform duration-300 hover:scale-105 hover:bg-[#684fff] hover:text-white active:scale-110 will-change-transform">
      <div className="flex items-center gap-4 mb-4 relative">
        <div className="relative">
          <img
            src={image}
            alt={`${name}`}
            className="w-16 h-16 rounded-full shadow-[0_0_0_2px_#f8f9ff] transition-shadow duration-600 group-hover:shadow-[0_0_0_2px_white]"
          />
        <div className="absolute -top-16 -right-8 w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-black">
          <img
            src={icon}
            alt="icon"
            className="w-14 h-14 transition-transform duration-300"
          />
        </div>
        </div>
        <div>
          <p className="text-28 md:text-28md sm:text-28sm xs:text-28sm ls:text-28sm ms:text-28sm poppins-semibold mb-2 transition-colors duration-600 group-hover:text-white">
            {name}
          </p>
          <p className="text-16-1 poppins-medium transition-colors duration-600 group-hover:text-white">
            {title}
          </p>
        </div>
      </div>
      <p className="text-16-2 text-gray-700 poppins-regular transition-colors duration-600 group-hover:text-white">
        {quote}
      </p>
    </div>
  );
};


// Testimonials.
export const Testimonials = ({ startIndex, direction }) => {
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleTestimonials.map((testimonial, index) => (
        <div key={index} className={`testimonial-card ${direction}`}>
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
};

// MyTestimonials.
const MyTestimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const handleNext = () => {
    if (startIndex + 3 < testimonials.length) {
      setDirection('slide-next');
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection('slide-prev');
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div
      className="relative w-full min-h-[55vh] bg-[#FFFFFF] overflow-hidden flex flex-col items-start justify-start mt-14">
    <img
      src="/myGroup.png"
      alt="Background"
      className="absolute inset-0 left-5 z-0 max-w-full max-h-[580px] hidden sm:hidden md:block"
    />

<div className='2xl:hidden xl:hidden lg:hidden md:hidden sm:block'>
  <img src="/decorator-first.png"  className='absolute left-1/2 transform -translate-x-1/2'/>
  <img src="/decorator-second.png" className='absolute bottom-[-8rem] left-1/2 transform -translate-x-1/2'/>
  </div>

  <div className="flex 2xl:h-28 flex-col lg:flex-row md:flex-col sm:flex-col xs:flex-col ls:flex-col ms:flex-col items-center justify-around w-full mx-2 sm:mx-4 mb-8 z-10 2xl:-mx-16">
  {/* Heading */}
  <p className="poppins-bold text-center sm:text-left w-full sm:w-auto 2xl:text-40 xl:text-40 lg:text-40 md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl mb-4 sm:mb-0">
    What Our Client Said about us
  </p>

  {/* Navigation Buttons */}
  <div className="flex gap-4 sm:gap-6">
    {/* LEFT BUTTON */}
    <button onClick={handlePrev} className="2xl:w-20 2xl:h-20 xl:w-20 xl:h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-16 sm:h-16 xs:w-16 xs:h-16 ls:w-16 ls:h-16 ms:w-16 ms:h-16 rounded-full bg-[#F8F9FF] hover:bg-[#f4f4fa] flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
      <Icon icon={arrowLeft} width="40" height="40" className="text-[#836fff]" />
    </button>

    {/* RIGHT BUTTON */}
    <button onClick={handleNext} className="2xl:w-20 2xl:h-20 xl:w-20 xl:h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-16 sm:h-16 xs:w-16 xs:h-16 ls:w-16 ls:h-16 ms:w-16 ms:h-16 rounded-full bg-[#684fff] hover:bg-[#836fff] flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
      <Icon icon={arrowRight} width="40" height="40" className="text-[#ffffff]" />
    </button>
  </div>
</div>

      {/* Testimonials */}
      <Testimonials startIndex={startIndex} direction={direction} />
    </div>
  );
};

export default MyTestimonials;