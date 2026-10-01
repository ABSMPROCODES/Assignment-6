import { Icards } from '@/types/cardstype';
import Image from 'next/image';
import Link from 'next/link';

interface Iworkcards {
  Workout: Icards;
}

const Workoutcard = ({ Workout }: Iworkcards) => {
  return (
    <Link href={`/Workout/${Workout.id}`} className="group">
      <div className="flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[#1d2029] bg-[#12141a]">
        
        {/* Top Image */}
        <div className="h-44 w-full bg-[#1a1d26]">
          <Image
            src={Workout.image}
            alt={Workout.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Card Body */}
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            
            {/* Category Tags */}
            <div className="mb-2.5 flex flex-wrap gap-1.5">
              {Workout.muscleGroups?.map((group, i) => (
                <span
                  key={i}
                  className="rounded bg-[#ccff00] px-2 py-0.5 text-[10px] font-extrabold uppercase text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Workout Name */}
            <h3 className="text-base font-extrabold uppercase tracking-tight text-white">
              {Workout.name}
            </h3>

            {/* Equipment */}
            <p className="mt-0.5 text-[11px] font-medium text-[#6c727f]">
              {Workout.equipment}
            </p>
          </div>

          {/* Stats Footer */}
          <div className="mt-5 flex items-center gap-4 text-[11px] font-semibold text-[#8b919d]">
            
            {/* Duration */}
            <div className="flex items-center gap-1">
              <svg
                className="h-3.5 w-3.5 stroke-[#8b919d]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>

              <span>{Workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1">
              <svg
                className="h-3.5 w-3.5 fill-[#8b919d]"
                viewBox="0 0 24 24"
              >
                <path d="M12 23c-4.97 0-9-3.58-9-8 0-4.19 3.23-7.58 7.07-9.72.48-.27 1.08.06 1.08.61v2.16c0 .41.28.77.68.86 2.37.52 4.17 2.62 4.17 5.14 0 1.38-.56 2.63-1.47 3.53-.32.32-.23.87.21.99.31.08.64.03.9-.14A8.94 8.94 0 0 0 18 11c0-.42.48-.68.83-.44C20.8 11.95 22 14.33 22 17c0 3.31-4.48 6-10 6z" />
              </svg>

              <span>{Workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <svg
                className="h-3.5 w-3.5 stroke-[#8b919d]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>

              <span>{Workout.rating}</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default Workoutcard;