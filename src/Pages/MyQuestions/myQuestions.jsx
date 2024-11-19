// IMPORTS
import React, { useState } from 'react';
import { faqs } from '../../data/data.js';

// COMPONENTS
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-white p-10 rounded-xl shadow-md mb-8"
  >
    <div className="flex justify-between items-center">
      <p className="poppins-semibold 2xl:text-16 xl:text-16 lg:text-16 md:text-16 sm:text-16 xs:text-16 ls:text-16 ms:text-16 text-gray-800">{question}</p>
      <span
        className={`flex items-center poppins-semibold justify-center 2xl:w-7 2xl:h-7 xl:w-12 xl:h-12 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-12 sm:h-12 xs:h-10 xs:w-10 ls:w-8 ls:h-8 ms:w-8 ms:h-8 rounded-full ${
          isOpen ? '' : ''
        }`}
      >
        {isOpen ? (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27C21.1797 27 27 21.1797 27 14Z" stroke="#684FFF" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M9.84082 18.1741L18.1847 9.8513" stroke="#684FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.85138 9.84074L18.1847 9.8513L18.1741 18.1846" stroke="#684FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 14C1 21.1797 6.8203 27 14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14Z" stroke="#242536" strokeWidth="2" strokeMiterlimit="10"/>
          <path d="M9.82593 9.8407L18.1487 18.1846" stroke="#242536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.1593 9.85126L18.1487 18.1846L9.81537 18.174" stroke="#242536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        )}
      </span>
    </div>
    {isOpen && <p className="mt-6 text-gray-600 text-14">{answer}</p>}
  </div>
);

const MyQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden py-20 px-6 sm:px-8 lg:px-12">
      {/* Background Images */}
      <img
        src="/pattern-left.png"
        alt="background-shape"
        className="absolute top-0 left-2      2xl:w-36 xl:w-36 lg:w-32 md:w-24 sm:w-20 xs:w-16 ls:w-16 ms:w-16 pointer-events-none z-0"
      />
      <img
        src="/pattern-right.png"
        alt="background-shape"
        className="absolute top-18 right-1 2xl:w-48 xl:w-48 lg:w-32 md:w-32 sm:w-28 xs:w-16 ls:w-16 ms:w-16  pointer-events-none z-0"
      />
      <img
        src="/pattern-center.png"
        alt="background-shape"
        className="absolute bottom-32 left-64 2xl:w-48 xl:w-48 lg:w-32 md:w-32 sm:w-28 xs:w-16 ls:w-16 ms:w-16 pointer-events-none z-0"
      />


      {/* FAQ Content */}
      <div className="max-w-3xl w-full">
        <p className="poppins-bold text-center 2xl:text-40 xl:text-40 lg:text-40 md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl text-gray-900 mb-6">
          Frequently
        </p>
        <p className="poppins-bold text-center 2xl:text-40 xl:text-40 lg:text-40 md:text-3xl sm:text-3xl xs:text-3xl ls:text-3xl ms:text-3xl text-gray-900 mb-12">
          Asked Questions
        </p>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyQuestions;
