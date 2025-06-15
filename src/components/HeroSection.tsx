import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative lg:h-screen min-h-[450px] overflow-hidden bg-blue-900">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          poster="/assets/videos/section-1.webp" 
          playsInline 
          loop 
          muted
          className="h-full w-full object-cover object-center"
        >
          <source src="/assets/videos/section-1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="absolute inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:pt-10 gap-2 text-center w-11/12 mx-auto z-20">
        <span className="font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-xl text-white block leading-snug">
          Driven by performance
        </span>
        <h2 className="text-white font-light leading-tight pb-2 text-2xl md:text-3xl lg:text-4xl">
          <span className="font-semibold">
            Soft trims and <span className="text-blue-400">NVH solutions</span>
          </span>
          <br className="hidden md:block" /> 
          for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;