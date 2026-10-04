import Link from "next/link";

import type { Workout } from "@/types/workout";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({
  workout,
}: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border-1 border-gray-900 bg-[#1C1C1C]  shadow-[4px_4px_0_#000] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]"
    >
      {/* Image */}

      <div className="relative h-52 overflow-hidden bg-zinc-200">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#ccff00] px-2.5 py-1 text-[10px] font-black uppercase">
          {workout.muscleGroups[0]}
        </span>
      </div>

      {/* Content */}

      <div className="p-4">

        {/* Categories */}

        <div className="mb-2 flex flex-wrap gap-1">
          {workout.muscleGroups.map(
            (muscle) => (
              <span
                key={muscle}
                className="bg-[#ccff00] rounded-full border border-black px-2 py-0.5 text-[9px] font-black uppercase"
              >
                {muscle}
              </span>
            )
          )}
        </div>

        {/* Name */}

        <h3 className="text-lg text-white font-bold uppercase leading-tight">
          {workout.name}
        </h3>

        {/* Equipment */}

        <p className="mt-1 text-xs text-zinc-300">
          {workout.equipment}
        </p>

        {/* Stats */}

        <div className="text-zinc-300 mt-4 grid grid-cols-3 border-t border-zinc-700 pt-3 text-xs font-bold">
          <span>
            ◷ {workout.duration}m
          </span>

          <span>
            🔥 {workout.caloriesBurned} kcal
          </span>

          <span>
            ★ {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}