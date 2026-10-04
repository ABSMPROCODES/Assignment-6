"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Workcontext } from '@/context/Workcontext';
import { Icards } from '@/types/cardstype';

const Nav = () => {
  const pathname = usePathname();
  const { myplan, mysaved } = useContext(Workcontext) as {
    myplan: Icards[];
    mysaved: Icards[];
  };
        
  return (
    <nav className="w-full border-b border-[#1a1c22] bg-[#0d0e11] px-4 py-4 sm:px-10 sm:py-5 sticky top-0 z-50 w-full border-b border-neutral-900 bg-[#09090b]/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2">
        
        {/* Left: Brand / Logo */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          {/* Barbell Icon */}
          <svg
            className="h-5 w-5 fill-[#ccff00] -rotate-45 sm:h-6 sm:w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 5v14h2V5H6zm10 0v14h2V5h-2zM3 8v8h2V8H3zm16 0v8h2V8h-2zM8 11v2h8v-2H8z" />
          </svg>

          <span className="text-sm font-black tracking-wider text-white sm:text-base">
            FITLOG
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1 sm:gap-2">
          {/* Workouts */}
          <Link
            href="/"
            className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs transition-colors sm:px-5 sm:py-2.5 sm:text-sm ${
              pathname === "/"
                ? "bg-[#1b270a] font-semibold text-[#ccff00]"
                : "font-medium text-[#8b919d] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/Listed-plan"
            className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs transition-colors sm:px-5 sm:py-2.5 sm:text-sm ${
              pathname === "/Listed-plan"
                ? "bg-[#1b270a] font-semibold text-[#ccff00]"
                : "font-medium text-[#8b919d] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right: Counters / Badges */}
        <div className="flex shrink-0 items-center gap-3.5 sm:gap-6">
          
          {/* Plan */}
          <Link href="/Listed-plan" className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-[#8b919d] sm:text-sm">
              Plan
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-[10px] font-bold text-black sm:h-5 sm:w-5 sm:text-xs">
              {myplan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link href="/Listed-plan" className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-[#8b919d] sm:text-sm">
              Saved
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#30343d] text-[10px] font-medium text-[#8b919d] sm:h-5 sm:w-5 sm:text-xs">
              {mysaved.length}
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Nav;