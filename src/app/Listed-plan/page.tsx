"use client";

import { Workcontext } from "@/context/Workcontext";
import { Icards } from "@/types/cardstype";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

interface Iworkcontext {
  myplan: Icards[];
  setMyplan: React.Dispatch<React.SetStateAction<Icards[]>>;
  mysaved: Icards[];
  setMysaved: React.Dispatch<React.SetStateAction<Icards[]>>;
}

const ListedPlan = () => {
  const { myplan, setMyplan, mysaved, setMysaved } =
    useContext(Workcontext) as Iworkcontext;

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [completed, setCompleted] = useState<number[]>([]);

  const currentWorkouts = activeTab === "plan" ? myplan : mysaved;

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.duration - b.duration;
    }

    return b.duration - a.duration;
  });

  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const toggleComplete = (id: number) => {
    setCompleted((previous) => {
      if (previous.includes(id)) {
        return previous.filter((item) => item !== id);
      }

      return [...previous, id];
    });
  };

  const removeWorkout = (id: number) => {
    if (activeTab === "plan") {
      setMyplan((previous) =>
        previous.filter((workout) => workout.id !== id)
      );
    } else {
      setMysaved((previous) =>
        previous.filter((workout) => workout.id !== id)
      );
    }

    setCompleted((previous) =>
      previous.filter((item) => item !== id)
    );
  };

  return (
    <section className="min-h-screen bg-[#0b0d0e] px-6 py-8 text-white">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-extrabold uppercase tracking-tight">
            MY PLAN
          </h1>

          <p className="mt-1 text-xs text-[#6c727f]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-[#1d2029] bg-[#12141a]">
          {/* Exercises */}
          <div className="border-r border-[#1d2029] px-4 py-5">
            <p className="text-[10px] font-medium text-[#6c727f]">
              Exercises
            </p>

            <p className="mt-1 text-2xl font-extrabold text-[#ccff00]">
              {totalExercises}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-r border-[#1d2029] px-4 py-5">
            <p className="text-[10px] font-medium text-[#6c727f]">
              Minutes
            </p>

            <p className="mt-1 text-2xl font-extrabold text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="px-4 py-5">
            <p className="text-[10px] font-medium text-[#6c727f]">
              Calories
            </p>

            <p className="mt-1 text-2xl font-extrabold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-5 flex items-center justify-between">
          {/* Tabs */}
          <div className="flex rounded-lg border border-[#1d2029] bg-[#12141a] p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-[10px] font-medium transition ${
                activeTab === "plan"
                  ? "bg-[#1c2029] text-white"
                  : "text-[#6c727f]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-[10px] font-medium transition ${
                activeTab === "saved"
                  ? "bg-[#1c2029] text-white"
                  : "text-[#6c727f]"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#6c727f]">
              Sort By
            </span>

            <select
              value={sortOrder}
              onChange={(event) =>
                setSortOrder(event.target.value as "asc" | "desc")
              }
              className="rounded-lg border border-[#1d2029] bg-[#12141a] px-3 py-2 text-[10px] text-white outline-none"
            >
              <option value="asc">Duration ↑</option>
              <option value="desc">Duration ↓</option>
            </select>
          </div>
        </div>

        {/* Workout List */}
        {sortedWorkouts.length > 0 ? (
          <div className="mt-4 space-y-2">
            {sortedWorkouts.map((workout) => {
              const isCompleted = completed.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className="flex items-center justify-between rounded-xl border border-[#1d2029] bg-[#12141a] px-3 py-3"
                >
                  {/* Left */}
                  <div className="flex min-w-0 items-center gap-3">
                    {/* Image */}
                  <div className="h-12 w-24 shrink-0 overflow-hidden rounded-lg bg-[#1a1d26]">
                     <Image
                        src={workout.image}
                        alt={workout.name}
                        width={96}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                   </div>

                    {/* Info */}
                    <div className="min-w-0">
                      <h3 className="truncate text-xs font-extrabold uppercase text-white">
                        {workout.name}
                      </h3>

                      <p className="mt-0.5 text-[10px] text-[#6c727f]">
                        {workout.equipment}
                      </p>

                      {/* Stats */}
                      <div className="mt-1.5 flex items-center gap-3 text-[9px] text-[#8b919d]">
                        {/* Duration */}
                        <div className="flex items-center gap-1">
                          <svg
                            className="h-3 w-3 stroke-[#ccff00]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 3" />
                          </svg>

                          <span>{workout.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-1">
                          <svg
                            className="h-3 w-3 fill-[#ccff00]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 23c-4.97 0-9-3.58-9-8 0-4.19 3.23-7.58 7.07-9.72.48-.27 1.08.06 1.08.61v2.16c0 .41.28.77.68.86 2.37.52 4.17 2.62 4.17 5.14 0 1.38-.56 2.63-1.47 3.53-.32.32-.23.87.21.99.31.08.64.03.9-.14A8.94 8.94 0 0 0 18 11c0-.42.48-.68.83-.44C20.8 11.95 22 14.33 22 17c0 3.31-4.48 6-10 6z" />
                          </svg>

                          <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          <svg
                            className="h-3 w-3 stroke-[#ccff00]"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>

                          <span>{workout.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="ml-4 flex shrink-0 items-center gap-2">
                    <Link
                      href={`/Workout/${workout.id}`}
                      className="rounded-full border border-[#303540] px-4 py-2 text-[9px] font-medium text-white transition hover:bg-[#1a1d26]"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done */}
                    {activeTab === "plan" && (
                      <button
                        onClick={() => toggleComplete(workout.id)}
                        className={`rounded-full px-4 py-2 text-[9px] font-bold transition ${
                          isCompleted
                            ? "bg-[#1c2029] text-[#ccff00]"
                            : "bg-[#ccff00] text-black hover:bg-[#d9ff4a]"
                        }`}
                      >
                        {isCompleted ? "✓ Done" : "✓ Mark as Done"}
                      </button>
                    )}

                    {/* Remove */}
                    <button
                      onClick={() => removeWorkout(workout.id)}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-[#6c727f] transition hover:bg-[#1a1d26] hover:text-white"
                      aria-label={`Remove ${workout.name}`}
                    >
                      ×
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-4 flex min-h-[190px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252934] bg-[#0d1014] text-center">
            <h2 className="text-sm font-extrabold uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-1 text-[10px] text-[#6c727f]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/Workout"
              className="mt-4 rounded-full bg-[#ccff00] px-5 py-2.5 text-[10px] font-bold text-black transition hover:bg-[#d9ff4a]"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListedPlan;