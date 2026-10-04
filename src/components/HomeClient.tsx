"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { toast } from "react-toastify";

import WorkoutCard from "./WorkoutCard";
import SortSelect from "./SortSelect";
import Loading from "./Loading";

import type {
  SortKey,
  Workout,
} from "@/types/workout";

import { API_URLS } from "@/lib/api";

export default function HomeClient() {
  const [workouts, setWorkouts] =
    useState<Workout[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [sort, setSort] =
    useState<SortKey>("duration");

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadWorkouts() {
      let lastError =
        "Unable to load workout data.";

      for (const url of API_URLS) {
        try {
          const response = await fetch(url, {
            cache: "no-store",
          });

          if (!response.ok) {
            throw new Error(
              `API error: ${response.status}`
            );
          }

          const data =
            (await response.json()) as Workout[];

          setWorkouts(data);
          setLoading(false);

          return;
        } catch {
          lastError =
            "Unable to load workout data.";
        }
      }

      setError(lastError);
      setLoading(false);

      toast.error(lastError);
    }

    loadWorkouts();
  }, []);

  const sortedWorkouts = useMemo(() => {
    const copied = [...workouts];

    copied.sort((a, b) => {
      if (sort === "duration") {
        return a.duration - b.duration;
      }

      if (sort === "calories") {
        return (
          a.caloriesBurned -
          b.caloriesBurned
        );
      }

      return a.rating - b.rating;
    });

    return copied;
  }, [workouts, sort]);

  return (
    <section
      id="library"
      className="fit-grid px-4 py-16 lg:px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs font-black tracking-[.25em] text-zinc-400">
              12 LIFTS / ONE LIBRARY
            </p>

            <h2 className="font-bold mt-2 text-4xl text-white  uppercase md:text-4xl">
              The Library
            </h2>

            <p className="mt-2 text-zinc-400">
              Twelve lifts covering every major
              muscle group.
            </p>
          </div>

          {!loading && !error && (
            <SortSelect
              value={sort}
              onChange={setSort}
            />
          )}
        </div>

        {/* Loading */}

        {loading && <Loading />}

        {/* Error */}

        {!loading && error && (
          <div className="rounded-2xl border-2 border-black bg-white p-8 text-center font-bold">
            {error}
          </div>
        )}

        {/* Cards */}

        {!loading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedWorkouts.map(
              (workout) => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}