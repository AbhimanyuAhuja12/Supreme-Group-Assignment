import React from 'react';
import { footerLinks } from '../constants/footerConstants';

const Footer: React.FC = () => {
  return (
    <footer className="relative lg:py-20 py-10 px-3 lg:px-10 bg-white overflow-hidden  bg-gradient-to-r from-blue-50/40 to-blue-100/60">
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-60">
        <div className="relative">
          <svg width="223" height="399" viewBox="0 0 223 399" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 lg:w-56 h-auto">
            <path d="M328.148 29.0941C337.817 33.3132 369.01 47.7078 385.826 57.8833V162.947H369.683C365.899 162.947 354.213 108.761 284.764 61.1924C259.456 43.9023 227.254 30.8314 198.247 30.8314C169.239 30.8314 146.79 38.7732 128.125 54.5742C109.544 70.3751 100.127 90.2297 100.127 114.138C100.127 133.248 108.787 150.455 126.191 165.843C143.511 181.23 176.975 195.79 226.497 209.44C304.102 231.115 356.651 257.835 384.145 289.603C411.386 321.37 425.007 356.777 425.007 395.659C425.007 434.541 415.001 468.79 395.075 495.76C375.064 522.729 351.186 543.99 323.524 559.46C295.694 574.93 260.044 582.706 216.66 582.706C192.025 582.706 166.549 579.232 140.232 572.2C113.916 565.251 86.338 555.489 58.592 540.929C39.5062 530.836 8.39706 513.05 0.914062 508.251V389.868H19.3273C20.1681 393.095 21.3452 397.314 23.3631 402.443C41.0196 445.13 65.2342 481.53 97.1 507.507C129.218 533.732 168.651 551.518 208.925 551.518C243.061 551.518 270.638 541.591 291.658 521.653C312.594 501.716 323.103 479.214 323.103 453.899C323.103 428.585 313.434 407.324 294.012 389.951C274.674 372.661 239.697 356.033 189.334 340.067C140.401 324.431 103.994 309.54 80.1161 295.311C56.2378 281.082 37.0679 261.558 22.7745 236.74C8.39706 211.839 1.33445 186.607 1.33445 161.044C1.33445 116.454 18.9069 78.4824 54.0518 47.2114C89.2807 16.0232 137.121 0.387695 197.658 0.387695C230.365 0.387695 275.515 6.09589 328.316 28.9287L328.148 29.0941Z" fill="#003DA0" fillOpacity="0.04"/>
          </svg>
          <svg width="420" height="503" viewBox="0 0 420 503" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-20 sm:right-24 md:right-28 lg:right-32 w-40 sm:w-48 md:w-56 lg:w-64 h-auto">
            <path d="M400.116 794.748C294.008 794.748 199.504 754.791 118.368 675.455C38.6615 597.526 -0.771389 500.487 0.994262 386.984C2.67583 282.665 49.7599 180 130.223 105.298C206.567 34.3175 303.93 -2.57895 404.404 1.22651C514.21 -2.33077 611.741 36.7993 694.307 117.707C771.911 193.816 811.765 292.51 809.578 403.282C805.206 624.743 626.455 768.11 460.484 790.529C439.969 793.342 419.874 794.665 400.116 794.665V794.748ZM390.194 35.6411C303.761 35.6411 220.524 69.063 154.438 130.529C80.869 198.945 37.8207 292.592 36.2232 387.646C34.5416 491.387 70.5273 579.988 143.171 650.968C231.202 737.004 336.384 772.411 455.776 756.362C607.285 735.929 770.482 605.054 774.434 402.785C776.452 300.203 741.139 212.595 669.504 142.359C594.001 68.3185 505.13 32.4975 405.076 35.972H404.404H403.731C399.275 35.8066 394.735 35.7238 390.278 35.7238L390.194 35.6411Z" fill="#003DA0" fillOpacity="0.04"/>
          </svg>
        </div>
      </div>

      <div className="container flex flex-col gap-10 max-w-7xl mx-auto lg:px-32 md:px-5 p-0 relative z-10">
        <div>
          <img alt="Logo" className="h-[63px] w-[226px]" src="/assets/images/footer-logo.svg" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h6 className="font-semibold uppercase text-gray-800">{section.title}</h6>
              <ul className="mt-6 grid sm:gap-5 gap-3 list-none">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="xl:text-base text-sm text-gray-600 hover:text-gray-900 block whitespace-nowrap opacity-70 hover:opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:opacity-100 transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="md:pt-16 pt-8 flex gap-3 md:flex-row flex-col justify-between items-center text-sm -mx-3 lg:-mx-10 px-3 lg:px-10 py-6 ">
          <h6 className="whitespace-nowrap text-gray-700">©2025. All Rights Reserved.</h6>
          <h6 className="md:block hidden whitespace-nowrap text-gray-700">Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;