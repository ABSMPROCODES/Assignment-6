import React from 'react';
import Link from 'next/link';

const Nav = () => {
 
  return (
    <nav className="w-full bg-[#0d0e11] px-8 py-4 border-b border-[#1a1c22]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        
        {/* Left: Brand / Logo */}
        <div className="flex items-center gap-3">
          {/* Barbell Icon */}
          <svg
            className="h-6 w-6 fill-[#ccff00] -rotate-45"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 5v14h2V5H6zm10 0v14h2V5h-2zM3 8v8h2V8H3zm16 0v8h2V8h-2zM8 11v2h8v-2H8z" />
          </svg>
          <span className="text-xl font-black tracking-wider text-white">
            FITLOG
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center gap-2">
          {/* Active Tab */}
          <Link
            href="/Listed-plan"
            className="rounded-full bg-[#1b270a] px-5 py-2 text-sm font-semibold text-[#ccff00]"
          >
            Workouts
          </Link>

          {/* Inactive Tab */}
          <Link
            href="/Listed-plan"
            className="px-5 py-2 text-sm font-semibold text-[#8b919d] transition-colors hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Right: Counters / Badges */}
        <div className="flex items-center gap-6">
          {/* Plan Counter */}
          <button className="rounded-full bg-[#1b270a] px-5 py-2 text-sm font-semibold text-[#ccff00]">
            {`Plan : ${workouts.length}`}
          </button>

          <button className="px-5 py-2 text-sm font-semibold text-[#8b919d] transition-colors hover:text-white">
            Saved
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;