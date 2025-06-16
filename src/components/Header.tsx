import React from 'react';
import { useHeader } from '../hooks/useHeader';

const Header: React.FC = () => {
  const { visible } = useHeader();

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 shadow transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto py-2 md:px-10 px-2">
        <div className="flex justify-between items-center">
          <img
            alt="Supreme Group"
            className="h-[41px] w-[146px]"
            src="/assets/images/supreme_logo.svg"
          />

          <div className="hidden md:flex justify-center items-center gap-10">
            <button
              type="button"
              className="h-[50px] cursor-pointer px-4 py-2 text-lg border text-black hover:bg-[#00BFFF] rounded-full transition-all bg-[#5CD6FF] border-[#00BFFF]"
            >
              Contact Us
            </button>
            <a href="https://www.linkedin.com/in/abhimanyu-ahuja12/" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/images/linked-in.svg"
                alt="LinkedIn"
                className="cursor-pointer w-6 h-6"
              />
            </a>
            <img
              src="/assets/images/language.svg"
              alt="Language"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;