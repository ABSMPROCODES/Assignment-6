import React from 'react';
import Image from 'next/image';
import image from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-900 bg-[#0F1115] px-6 py-6 text-neutral-400 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Left Side: Logo Container & Brand Name */}
        <div className="flex items-center gap-2.5">
          {/* Logo container wrapper for your logo component/icon */}
          <div className="flex items-center justify-center">
            <Image src={image} alt="Logo" width={24} height={24} className="h-6 w-6" />
          </div>
          <span className="font-extrabold tracking-wider text-white">
            FITLOG
          </span>
        </div>

        {/* Right Side: Copyright text */}
        <p className="text-xs text-neutral-500 sm:text-sm">
          &copy; 2026 FitLog &mdash; Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;