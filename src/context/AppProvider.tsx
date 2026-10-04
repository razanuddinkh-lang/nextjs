"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Workout } from "@/types/workout";

type AppContextValue = {
  plan: Workout[];
  saved: Workout[];
  done: number[];

  addToPlan: (workout: Workout) => boolean;
  saveWorkout: (workout: Workout) => boolean;

  removeFromPlan: (id: number) => void;
  removeSaved: (id: number) => void;

  markDone: (id: number) => void;
};

const AppContext =
  createContext<AppContextValue | null>(null);

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const DONE_KEY = "fitlog-done";

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [done, setDone] = useState<number[]>([]);

  /*
   * Load saved data after browser starts.
   */
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem(PLAN_KEY);
      const savedWorkouts = localStorage.getItem(SAVED_KEY);
      const savedDone = localStorage.getItem(DONE_KEY);

      if (savedPlan) {
        setPlan(JSON.parse(savedPlan));
      }

      if (savedWorkouts) {
        setSaved(JSON.parse(savedWorkouts));
      }

      if (savedDone) {
        setDone(JSON.parse(savedDone));
      }
    } catch {
      console.log("Could not read localStorage");
    }
  }, []);

  /*
   * Save Today's Plan.
   */
  useEffect(() => {
    localStorage.setItem(
      PLAN_KEY,
      JSON.stringify(plan)
    );
  }, [plan]);

  /*
   * Save Saved workouts.
   */
  useEffect(() => {
    localStorage.setItem(
      SAVED_KEY,
      JSON.stringify(saved)
    );
  }, [saved]);

  /*
   * Save completed workouts.
   */
  useEffect(() => {
    localStorage.setItem(
      DONE_KEY,
      JSON.stringify(done)
    );
  }, [done]);

  const value = useMemo<AppContextValue>(
    () => ({
      plan,
      saved,
      done,

      /*
       * Add workout to today's plan.
       *
       * Maximum = 5
       */
      addToPlan: (workout: Workout) => {
        if (
          plan.some((item) => item.id === workout.id)
        ) {
          return false;
        }

        if (plan.length >= 5) {
          return false;
        }

        setPlan((previous) => [
          ...previous,
          workout,
        ]);

        return true;
      },

      /*
       * Save workout.
       */
      saveWorkout: (workout: Workout) => {
        if (
          saved.some((item) => item.id === workout.id)
        ) {
          return false;
        }

        setSaved((previous) => [
          ...previous,
          workout,
        ]);

        return true;
      },

      /*
       * Remove from Today's Plan.
       */
      removeFromPlan: (id: number) => {
        setPlan((previous) =>
          previous.filter(
            (workout) => workout.id !== id
          )
        );
      },

      /*
       * Remove from Saved.
       */
      removeSaved: (id: number) => {
        setSaved((previous) =>
          previous.filter(
            (workout) => workout.id !== id
          )
        );
      },

      /*
       * Mark workout as completed.
       */
      markDone: (id: number) => {
        setDone((previous) => {
          if (previous.includes(id)) {
            return previous;
          }

          return [...previous, id];
        });
      },
    }),
    [plan, saved, done]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useApp must be used inside AppProvider"
    );
  }

  return context;
}