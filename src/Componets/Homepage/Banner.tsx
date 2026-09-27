import Image from 'next/image';
import React from 'react';
import banner from "@/assets/banner.png"

const Banner = () => {
  return (
   <section className="w-full bg-[#0b0d0e] px-4 py-6 md:px-8">
      {/* Rounded Outer Container Card */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between rounded-2xl bg-[#12141a] p-8 md:p-14 lg:flex-row lg:p-16">
        
        {/* Left Content Area */}
        <div className="flex max-w-[620px] flex-col items-start gap-5">
          
          {/* Eyebrow / Category Label */}
          <span className="text-xs font-bold uppercase tracking-widest text-[#ccff00]">
            WORKOUT LIBRARY
          </span>

          {/* Main Title */}
          <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Subtitle / Description */}
          <p className="max-w-[480px] text-base font-normal text-[#8b919d] sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>

          {/* CTA Button */}
          <button className="mt-2 rounded-xl bg-[#ccff00] px-7 py-3.5 text-sm font-black uppercase tracking-wider text-black transition-opacity hover:opacity-90">
            BROWSE WORKOUTS
          </button>

        </div>

        {/* Right Area: Reserved for your image */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          {/* Add your image element here */}
          <Image src={banner} alt="Workout banner" />
        </div>

      </div>
    </section>
  );
};

export default Banner;