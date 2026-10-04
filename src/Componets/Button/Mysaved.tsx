"use client";

import { Workcontext } from "@/context/Workcontext";
import { Icards } from "@/types/cardstype";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Mysaved = ({ workout }: { workout: Icards }) => {
  const { mysaved, myplan, setMysaved } = useContext(Workcontext);

  const handleAddToSaved = () => {
    setMysaved((previous) => {
      const alreadyExists =
        previous.some((item) => item.id === workout.id) ||
        myplan.some((item) => item.id === workout.id);

      if (alreadyExists) {
        toast.warning(workout.name + " is already added!", {
          position: "top-right",
          autoClose: 3000,
        });

        return previous;
      }

      toast.success(workout.name + " saved for later!", {
        position: "top-right",
        autoClose: 3000,
      });

      return [...previous, workout];
    });
  };

  return (
    <button
      type="button"
      className="btn flex h-11 items-center gap-2.5 rounded-lg border border-[#303541] px-6 text-[13px] font-medium text-white"
      onClick={handleAddToSaved}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 4h12v17l-6-4-6 4V4z" />
      </svg>

      Save for later
    </button>
  );
};

export default Mysaved;