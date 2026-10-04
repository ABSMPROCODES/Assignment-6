"use client";

import { Workcontext } from "@/context/Workcontext";
import { Icards } from "@/types/cardstype";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const MyplanB = ({ workout }: { workout: Icards }) => {
  const { myplan, setMyplan } = useContext(Workcontext);

  const handleAddToPlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

   

    // Already in the plan -> warn only
    if (myplan.some((item) => item.id === workout.id)) {
     
      toast.warning(`${workout.name} is already added!`, {
        toastId: warnId,
        position: "top-right",
       
      });
      return;
    }

    // Not in the plan -> add + success only
    // (toast is called OUTSIDE the state updater so React Strict Mode
    // can't run it twice)
    setMyplan((prev) =>
      prev.some((item) => item.id === workout.id) ? prev : [...prev, workout]
    );

   
  };

  return (
    <button
      type="button"
      className="btn flex h-10 items-center gap-2 rounded-lg bg-[#ccff00] px-5 text-[12px] font-bold text-black"
      onClick={handleAddToPlan}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M10 16h4" />
      </svg>
      Add to today&apos;s plan
    </button>
  );
};

export default MyplanB;