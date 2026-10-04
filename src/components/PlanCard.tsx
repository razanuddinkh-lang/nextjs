"use client";

import Link from "next/link";

import { toast } from "react-toastify";

import type { Workout } from "@/types/workout";

import { useApp } from "@/context/AppProvider";

type PlanCardProps = {
  workout: Workout;
  saved?: boolean;
};

export default function PlanCard({
  workout,
  saved = false,
}: PlanCardProps) {
  const {
    removeFromPlan,
    removeSaved,
    markDone,
    done,
  } = useApp();

  const isDone = done.includes(
    workout.id
  );

  function handleDone() {
    markDone(workout.id);

    toast.success(
      "Workout marked as done"
    );
  }

  function handleRemove() {
    if (saved) {
      removeSaved(workout.id);

      toast.success(
        "Removed from saved"
      );
    } else {
      removeFromPlan(workout.id);

      toast.success(
        "Workout removed"
      );
    }
  }

  return (
    <article
      className={`flex flex-col gap-4 rounded-2xl border-2 border-black bg-[#2b2d2f] p-3 shadow-[3px_3px_0_#000] sm:flex-row sm:items-center ${
        isDone ? "opacity-60" : ""
      }`}
    >

      {/* Image */}

      <img
        src={workout.image}
        alt={workout.name}
        className="h-28 w-full rounded-xl object-cover sm:h-24 sm:w-32"
      />

      {/* Information */}

      <div className="min-w-0 flex-1">

        <div className="flex flex-wrap gap-1">
          {workout.muscleGroups.map(
            (muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-black px-2 py-0.5 text-[9px] font-bold text-white"
              >
                {muscle}
              </span>
            )
          )}
        </div>

        <h3 className="mt-2 text-white font-bold uppercase">
          {workout.name}
        </h3>

        <p className="text-xs text-zinc-300">
          {workout.equipment}
        </p>

        <div className="mt-2 text-xs font-bold text-zinc-100">
          <span className="text-[#ccff00]">◷</span> {workout.duration} min
          {" · "}
          🔥 {workout.caloriesBurned} kcal
          {" · "}
          <span className="text-[#ccff00]">★</span> {workout.rating}
        </div>
      </div>

      {/* Actions */}

      <div className="flex gap-3 sm:w-48 sm:justify-end">

        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-sm  border-zinc-600 rounded-3xl bg-black text-zinc-100"
        >
          View Details
        </Link>

        {!saved && (
          <button
            disabled={isDone}
            onClick={handleDone}
            className="btn btn-sm rounded-3xl border-none bg-[#ccff00] font-bold disabled:opacity-70"
          >
            ✓{" "}
            {isDone
              ? "Done"
              : "Mark as Done"}
          </button>
        )}

        <button
          onClick={handleRemove}
          className="btn btn-sm btn-square rounded-lg border-black bg-black text-white"
          aria-label="Remove workout"
        >
         <span className="text-2xl"> ×</span>
        </button>

      </div>
    </article>
  );
}