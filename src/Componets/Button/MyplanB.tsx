"use client";

import { Workcontext } from "@/context/Workcontext";
import { Icards } from "@/types/cardstype";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const MyplanB = ({ workout }: { workout: Icards }) => {
  const { myplan, setMyplan } = useContext(Workcontext);

  const handleAddToPlan = () => {
    console.log("Add to today's plan button clicked");

    setMyplan( [...myplan, workout]);

    toast.success(workout.name + " added to today's plan!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <button
      type="button"
      className="btn flex h-8 items-center gap-2 rounded-lg bg-[#ccff00] px-4 text-[11px] font-bold text-black"
      onClick={handleAddToPlan}
    >
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M12 14v4M10 16h4" />
      </svg>

      Add to today's plan
    </button>
  );
};

export default MyplanB;