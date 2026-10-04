"use client";

import { toast } from "react-toastify";

import { useApp } from "@/context/AppProvider";

import type { Workout } from "@/types/workout";

type WorkoutActionsProps = {
  workout: Workout;
};

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    addToPlan,
    saveWorkout,
  } = useApp();

  function handleAddToPlan() {
    const added = addToPlan(workout);

    if (added) {
      toast.success(
        "Added to today's plan"
      );
    } else {
      toast.info(
        "Already planned or the 5-lift cap is full"
      );
    }
  }

  function handleSave() {
    const saved = saveWorkout(workout);

    if (saved) {
      toast.success(
        "Saved for later"
      );
    } else {
      toast.info(
        "Already saved"
      );
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">

      <button
        onClick={handleAddToPlan}
        className="acid-btn btn flex-1 rounded-xl font-black uppercase"
      >
        ＋ Add to today&apos;s plan
      </button>

      <button
        onClick={handleSave}
        className="btn flex-1 rounded-xl border-2 border-black bg-white font-black uppercase hover:bg-zinc-100"
      >
        ♡ Save for later
      </button>

    </div>
  );
}