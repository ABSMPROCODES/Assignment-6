"use client";

import { Workcontext} from "@/context/Workcontext";
import { Icards } from "@/types/cardstype";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface MyplanBProps {
  workout: Icards;
}

const MyplanB: React.FC<MyplanBProps> = ({ workout }) => {
  const { myplan, setMyplan } = useContext(Workcontext) as {
    myplan: Icards[];
    setMyplan: React.Dispatch<React.SetStateAction<Icards[]>>;
  };

  const handleAddToPlan = (): void => {
    // 1. Check if the exercise is already in today's plan
    const isAlreadyAdded: boolean = myplan.some(
      (item: Icards) => item.id === workout.id
    );

    if (isAlreadyAdded) {
      const warnToastId = `warn-${workout.id}`;
      if (!toast.isActive(warnToastId)) {
        toast.warning(`${workout.name} is already added!`, {
          toastId: warnToastId,
          position: "top-right",
          autoClose: 3000,
        });
      }
      return;
    }

    // 2. Trigger success notification before state dispatch
    const successToastId = `success-${workout.id}`;
    if (!toast.isActive(successToastId)) {
      toast.success(`${workout.name} added to today's plan!`, {
        toastId: successToastId,
        position: "top-right",
        autoClose: 3000,
      });
    }

    // 3. Update state purely with zero side effects
    setMyplan((previous: Icards[]): Icards[] => {
      if (previous.some((item: Icards) => item.id === workout.id)) {
        return previous;
      }
      return [...previous, workout];
    });
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
      Add to today's plan
    </button>
  );
};

export default MyplanB;