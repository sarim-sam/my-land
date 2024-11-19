// IMPORTING
import React from 'react';


// FRONTEND
const MyFooter = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-evenly ms:items-start ms:justify-start px-4 bg-[#684fff]">
      <div className="container ms:mx-0 ms:px-0 ls:mx-auto ls:px-6 ">
        {/* Footer Content in Grid */}
        <div className="grid md:w-full 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-16 md:mt-10 sm:mt-10 mb-12">
          
           {/* Logo and Description */}
          <div className="lg:border-b-0 md:border-b-2 sm:border-b-2 xs:border-b-2 ls:border-b-2 ms:border-b-2 sm:border-white sm:pb-4">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <div className="rounded-full p-3 mb-10">
              <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_40_1026)">
                  <path d="M80.5 21.1804C80.9306 33.457 72.6636 43.575 60.9952 44.7442C57.2061 45.104 53.2879 44.7892 48.4656 44.7892C53.3741 39.303 57.6798 34.3564 62.1146 29.4997C64.5689 26.7566 66.8509 24.0135 65.1717 19.9213C63.4925 15.9191 60.2201 15.4244 56.5172 15.5143C48.3794 15.6043 40.2847 15.3794 32.19 15.6492C30.7691 15.6492 28.8315 17.0433 28.1426 18.3474C26.4203 21.6301 25.2578 25.2277 23.6216 29.3198H56.0867C40.6292 46.9028 26.0759 63.4514 11.5226 80C11.2643 79.8201 20.866 57.1107 26.2051 45.2839H0.5C0.973628 43.4851 1.23197 42.226 1.61948 41.0118C5.96825 28.5554 10.4031 16.0989 14.5797 3.59753C15.5269 0.854413 16.7325 0 19.5312 0C32.7067 0.179876 45.8821 0 59.0576 0.0899382C70.683 0.224845 80.0694 9.57841 80.5 21.1804Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_40_1026">
                    <rect width="80" height="80" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              </div>
            </div>
            <p className="poppins-medium 2xl:text-16-1 xl:text-16-1 lg:text-16-1 md:text-16-1 sm:text16-1 xs:text16-1 ls:text16-1 ms:text16-1 sm:pb-4 text-white">We use multi-mic and echo cancellation technology so that everyone can use device.</p>
            <svg width="200" height="100" viewBox="0 0 221 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">
              <circle cx="20.5" cy="20" r="19.5" stroke="white"/>
              <path d="M22.3467 20.7581H21.8467V21.2581V28.5H19.6539V21.2524V20.7524H19.1539H17V18.7212H19.1481H19.6481V18.2212V15.9967C19.6481 14.8099 20.0164 13.951 20.599 13.3877C21.1845 12.8216 22.0424 12.5002 23.1218 12.5002L23.1237 12.5002C23.75 12.4978 24.3761 12.5228 25 12.5751V14.3226H23.8766C23.1716 14.3226 22.6117 14.4864 22.2518 14.9057C21.9061 15.3086 21.8467 15.8357 21.8467 16.2962V18.2269V18.7269H22.3467H24.8388L24.5733 20.7581H22.3467Z" fill="white" stroke="white"/>
            </a>
            <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">
              <circle cx="80.5" cy="20" r="19.5" stroke="white"/>
              <path d="M80.998 16.6518C78.8685 16.6518 77.1498 18.3704 77.1498 20.5C77.1498 22.6296 78.8685 24.3482 80.998 24.3482C83.1275 24.3482 84.8461 22.6296 84.8461 20.5C84.8461 18.3704 83.1275 16.6518 80.998 16.6518ZM80.998 23.0011C79.6208 23.0011 78.497 21.8772 78.497 20.5C78.497 19.1228 79.6208 17.9989 80.998 17.9989C82.3751 17.9989 83.499 19.1228 83.499 20.5C83.499 21.8772 82.3751 23.0011 80.998 23.0011ZM85.0037 15.5973C84.5065 15.5973 84.105 15.9988 84.105 16.496C84.105 16.9933 84.5065 17.3948 85.0037 17.3948C85.5009 17.3948 85.9025 16.9951 85.9025 16.496C85.9026 16.378 85.8795 16.261 85.8343 16.1519C85.7892 16.0428 85.723 15.9437 85.6396 15.8602C85.5561 15.7767 85.4569 15.7105 85.3478 15.6654C85.2387 15.6203 85.1218 15.5972 85.0037 15.5973ZM88.4992 20.5C88.4992 19.4643 88.5085 18.438 88.4504 17.4042C88.3922 16.2033 88.1183 15.1376 87.2402 14.2595C86.3603 13.3796 85.2964 13.1075 84.0956 13.0493C83.06 12.9912 82.0337 13.0006 80.9999 13.0006C79.9642 13.0006 78.9379 12.9912 77.9041 13.0493C76.7033 13.1075 75.6376 13.3814 74.7595 14.2595C73.8796 15.1395 73.6075 16.2033 73.5493 17.4042C73.4912 18.4399 73.5006 19.4662 73.5006 20.5C73.5006 21.5338 73.4912 22.562 73.5493 23.5958C73.6075 24.7967 73.8814 25.8624 74.7595 26.7405C75.6395 27.6204 76.7033 27.8925 77.9041 27.9507C78.9398 28.0088 79.9661 27.9994 80.9999 27.9994C82.0355 27.9994 83.0618 28.0088 84.0956 27.9507C85.2964 27.8925 86.3621 27.6186 87.2402 26.7405C88.1202 25.8605 88.3922 24.7967 88.4504 23.5958C88.5104 22.562 88.4992 21.5357 88.4992 20.5ZM86.8481 24.9242C86.7111 25.2657 86.546 25.5209 86.2815 25.7836C86.0169 26.0481 85.7636 26.2132 85.4221 26.3502C84.4352 26.7423 82.0918 26.6542 80.998 26.6542C79.9041 26.6542 77.5588 26.7423 76.572 26.3521C76.2305 26.2151 75.9753 26.05 75.7126 25.7854C75.4481 25.5209 75.283 25.2676 75.146 24.9261C74.7558 23.9373 74.8439 21.5939 74.8439 20.5C74.8439 19.4061 74.7558 17.0608 75.146 16.0739C75.283 15.7324 75.4481 15.4772 75.7126 15.2146C75.9772 14.9519 76.2305 14.7849 76.572 14.6479C77.5588 14.2577 79.9041 14.3458 80.998 14.3458C82.0918 14.3458 84.4371 14.2577 85.424 14.6479C85.7655 14.7849 86.0207 14.95 86.2833 15.2146C86.5479 15.4791 86.713 15.7324 86.85 16.0739C87.2402 17.0608 87.152 19.4061 87.152 20.5C87.152 21.5939 87.2402 23.9373 86.8481 24.9242Z" fill="white"/>
            </a> 
            <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">
              <circle cx="140.5" cy="20" r="19.5" stroke="white"/>
              <path d="M149.5 13.7818C148.875 14.0747 148.195 14.2855 147.494 14.3676C148.221 13.8982 148.766 13.1565 149.026 12.2818C148.343 12.7229 147.595 13.0322 146.815 13.196C146.489 12.8175 146.095 12.516 145.657 12.3102C145.219 12.1045 144.747 11.9989 144.27 12C142.339 12 140.787 13.6997 140.787 15.7855C140.787 16.0784 140.819 16.3713 140.872 16.6531C137.981 16.4889 135.403 14.9889 133.689 12.6923C133.377 13.2717 133.213 13.9314 133.215 14.6028C133.215 15.9164 133.83 17.0747 134.768 17.7559C134.215 17.7323 133.675 17.5673 133.193 17.2744V17.321C133.193 19.1605 134.39 20.6849 135.985 21.0355C135.686 21.12 135.378 21.1633 135.068 21.1642C134.841 21.1642 134.627 21.1398 134.41 21.1065C134.852 22.6065 136.137 23.696 137.667 23.7315C136.47 24.75 134.97 25.3491 133.342 25.3491C133.05 25.3491 132.78 25.338 132.5 25.3025C134.045 26.3787 135.877 27 137.851 27C144.258 27 147.763 21.2352 147.763 16.2315C147.763 16.0673 147.763 15.9031 147.753 15.7389C148.431 15.1997 149.026 14.5318 149.5 13.7818Z" fill="white"/>
            </a>
            <a href="#" className="hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">
              <circle cx="200.5" cy="20" r="19.5" stroke="white"/>
              <path d="M193.688 15.376C194.896 15.376 195.876 14.3964 195.876 13.188C195.876 11.9796 194.896 11 193.688 11C192.48 11 191.5 11.9796 191.5 13.188C191.5 14.3964 192.48 15.376 193.688 15.376Z" fill="white"/>
              <path d="M197.942 17.0334V29.1724H201.711V23.1694C201.711 21.5854 202.009 20.0514 203.973 20.0514C205.91 20.0514 205.934 21.8624 205.934 23.2694V29.1734H209.705V22.5164C209.705 19.2464 209.001 16.7334 205.179 16.7334C203.344 16.7334 202.114 17.7404 201.611 18.6934H201.56V17.0334H197.942ZM191.8 17.0334H195.575V29.1724H191.8V17.0334Z" fill="white"/>
            </a>
            </svg>
          </div>
          
          
          {/* Resources */}
          <div className="lg:border-0 sm:border-b-2 xs:border-b-2 ls:border-b-2 ms:border-b-2 md:border-b-2 sm:border-white sm:pb-4">
            <p className="poppins-semibold 2xl:text-24 xl:text-24 lg:text-24 md:text-lg sm:text-lg mb-9 sm:mb-12 text-white">Resources</p>
            <ul className="space-y-8">
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Features</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Pricing</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Login</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="lg:border-0 sm:border-b-2 xs:border-b-2 ls:border-b-2 ms:border-b-2 md:border-b-2 sm:border-white sm:pb-4">
            <p className="poppins-semibold 2xl:text-24 xl:text-24 lg:text-24 md:text-lg sm:text-lg mb-9 sm:mb-12 text-white">Legal</p>
            <ul className="space-y-8">
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Terms of Use</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Legal Notice</a></li>
            </ul>
          </div>
          
          {/* Links */}
          <div className="lg:border-0 sm:border-b-2 xs:border-b-2 ls:border-b-2 ms:border-b-2 md:border-b-2 sm:border-white sm:pb-4">
            <p className="poppins-semibold 2xl:text-24 xl:text-24 lg:text-24 md:text-lg sm:text-lg mb-9 sm:mb-12 text-white">Links</p>
            <ul className="space-y-8">
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Feedback</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="sm:mb-8 2xl:text-16-3 xl:text-16-3 lg:text-16-3 md:text-16-3 sm:text-16-3 xs:text16-3 ls:text16-3 ms:text16-3 hover:underline poppins-regular text-white hover:decoration-white hover:decoration-4 hover:underline-offset-4 transition-all duration-300">Legal Notice</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyFooter;