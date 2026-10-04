"use client";

import { Workcontext, WorkContextType } from "@/context/Workcontext";
import { Icards } from "@/types/cardstype";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface MysavedProps {
  workout: Icards;
}

const Mysaved: React.FC<MysavedProps> = ({ workout }) => {
  const { mysaved, setMysaved }: WorkContextType = useContext(Workcontext);

  const handleSaveForLater = (): void => {
    // 1. Check if workout is already saved
    const isAlreadySaved: boolean = mysaved.some((item: Icards) => item.id === workout.id);

    if (isAlreadySaved) {
      const warnToastId = `save-warn-${workout.id}`;
      if (!toast.isActive(warnToastId)) {
        toast.warning(`${workout.name} is already saved!`, {
          toastId: warnToastId,
          position: "top-right",
          autoClose: 3000,
        });
      }
      return;
    }

    // 2. Prevent duplicate success toasts
    const successToastId = `save-success-${workout.id}`;
    if (!toast.isActive(successToastId)) {
      toast.success(`${workout.name} saved for later!`, {
        toastId: successToastId,
        position: "top-right",
        autoClose: 3000,
      });
    }

    // 3. Update state cleanly with functional duplicate prevention
    setMysaved((previous: Icards[]): Icards[] => {
      if (previous.some((item: Icards) => item.id === workout.id)) {
        return previous;
      }
      return [...previous, workout];
    });
  };

  return (
    <button
      type="button"
      className="btn flex h-10 items-center gap-2 rounded-lg border border-neutral-700 bg-transparent px-5 text-[12px] font-bold text-white hover:bg-neutral-800"
      onClick={handleSaveForLater}
    >
      <svg
        className="h-4 w-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
      Save for later
    </button>
  );
};

export default Mysaved;