"use client";

import {
  useMemo,
  useState,
} from "react";

{/*import SortSelect from "@/components/SortSelect";*/}
import Link from "next/link";

import PlanCard from "@/components/PlanCard";

import { useApp } from "@/context/AppProvider";

export default function MyPlanPage() {
  const {
    plan,
    saved,
  } = useApp();

  const [
    tab,
    setTab,
  ] = useState<"plan" | "saved">(
    "plan"
  );

  /*
   * Total minutes.
   */
  const minutes = useMemo(
    () =>
      plan.reduce(
        (total, workout) =>
          total + workout.duration,
        0
      ),
    [plan]
  );

  /*
   * Total calories.
   */
  const calories = useMemo(
    () =>
      plan.reduce(
        (total, workout) =>
          total +
          workout.caloriesBurned,
        0
      ),
    [plan]
  );

  const list =
    tab === "plan"
      ? plan
      : saved;

  return (
    <main className="fit-grid min-h-screen px-4 py-12 lg:px-6 lg:py-16">

      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <div className="mb-9">

          <p className="text-xs font-black tracking-[.25em] text-zinc-400">
            YOUR DAILY LOG
          </p>

          <h1 className="mt-2 text-5xl text-zinc-100 uppercase md:text-5xl font-bold">
            My Plan
          </h1>

          <p className="mt-3 text-zinc-400">
            Cap of five lifts for today.
            Finish them, then load more.
          </p>

        </div>

        {/* Metrics */}

        <div className="grid gap-3 sm:grid-cols-3 border-1 border-zinc-700 rounded-2xl p-2">

          <div className="rounded-2xl border-2 border-black bg-[#2B2D2F] p-5">
            <p className="text-xs font-black text-zinc-200">
              EXERCISES
            </p>

            <p className="mt-2 text-4xl font-black text-[#ccff00]">
              {plan.length}
            </p>
          </div>

          <div className="rounded-2xl border-2 border-black bg-[#2B2D2F] p-5">
            <p className="text-xs text-zinc-200">
              MINUTES
            </p>

            <p className="mt-2 text-4xl text-white font-bold">
              {minutes}
            </p>
          </div>

          <div className="rounded-2xl border-2 border-black bg-[#2B2D2F] font-bold p-5">
            <p className="text-xs text-zinc-200">
              CALORIES
            </p>

            <p className="mt-2 text-4xl text-white">
              {calories}
            </p>
          </div>

        </div>

        {/* Tabs */}

        <div className="flex w-full items-center justify-between mt-10 flex   ">
         <div className="flex border-1 border-zinc-800 p-1 rounded-xl ">
          <button
            onClick={() =>
              setTab("plan")
            }
            className={`px-2 py-1 border-1 border-zinc-700 text-sm text-white font-semibold bg-[#2B2D2F] rounded-xl  ${
              tab === "plan"
                ? "border-b-4 border-black"
                : ""
            }`}
          >
            Today&apos;s Plan (
            {plan.length})
          </button>

          <button
            onClick={() =>
              setTab("saved")
            }
            className={`border-1 border-zinc-700 px-7 py-1 text-sm text-white font-semibold bg-[#2B2D2F] rounded-xl ${
              tab === "saved"
                ? "border-b-4 border-black"
                : ""
            }`}
          >
            Saved ({saved.length})
          </button>
          </div>
          
          {/*<div className=" flex items-center gap-0 ">
            <p className=" text-sm text-zinc-300">Sort By:</p>
             <SortSelect/>
          </div>*/}
        
          

        </div>

        {/* Workout list */}

        <div className="mt-6 space-y-4 ">

          {list.length > 0 ? (
            list.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                saved={tab === "saved"}
              />
            ))
          ) : (
            <div className="rounded-3xl border-2 border-black bg-[#121416] p-10 text-center">

              <p className="text-xs font-black tracking-[.25em] text-zinc-300">
                EMPTY LOG
              </p>

              <h2 className="mt-3 text-2xl text-white uppercase font-bold">
                Nothing here yet
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm text-zinc-300">
                Browse the library and add a
                lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="acid-btn btn mt-6 rounded-3xl font-black"
              >
                Go to workouts
              </Link>

            </div>
          )}

        </div>

      </div>
    </main>
  );
}