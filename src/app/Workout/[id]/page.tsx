import { Icards } from '@/types/cardstype';
import Image from 'next/image';
import React from 'react';

interface Iworkcards {
  params: Promise<{ id: string }>;
}

const getwork = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
};

const page = async ({ params }: Iworkcards) => {
  const { id } = await params;

  const workouts = await getwork();

  const workout = workouts.find(
    (workout: Icards) => String(workout.id) === id
  );

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#0b0d0e] px-6 py-8 md:px-12 md:py-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-2">

        {/* Left Image */}
        <div className="h-[515px] w-full overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Details */}
        <div className="pt-0">
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white">
            {workout.name}
          </h1>

          <p className="mt-1.5 max-w-[500px] text-sm leading-5 text-[#8b919d]">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex gap-2">
            {workout.muscleGroups?.map((group, i) => (
              <span
                key={i}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-extrabold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-5 overflow-hidden rounded-xl border border-[#252934] bg-[#151820]">

            <div className="flex items-center justify-between border-b border-[#252934] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b919d]">
                Equipment
              </span>
              <span className="text-[11px] text-white">
                {workout.equipment}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252934] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b919d]">
                Difficulty
              </span>
              <span className="text-[11px] text-white">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252934] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b919d]">
                Sets
              </span>
              <span className="text-[11px] text-white">
                {workout.sets}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252934] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b919d]">
                Reps
              </span>
              <span className="text-[11px] text-white">
                {workout.reps}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252934] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b919d]">
                Duration
              </span>
              <span className="text-[11px] text-white">
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252934] px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b919d]">
                Calories
              </span>
              <span className="text-[11px] text-white">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b919d]">
                Rating
              </span>
              <span className="text-[11px] text-white">
                {workout.rating}
              </span>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wide text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3 pl-5 text-[11px] leading-4 text-[#a0a5ae]">
              {workout.instructions?.map((instruction, i) => (
                <li key={i} className="pl-1">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-3">

            <button className="flex h-8 items-center gap-2 rounded-lg bg-[#ccff00] px-4 text-[11px] font-bold text-black">
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

            <button className="flex h-8 items-center gap-2 rounded-lg border border-[#303541] px-4 text-[11px] font-medium text-white">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 4h12v17l-6-4-6 4V4z" />
              </svg>

              Save for later
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default page;