import { notFound } from "next/navigation";

import { getWorkout } from "@/lib/api";

import WorkoutActions from "@/components/WorkoutActions";

export const dynamic = "force-dynamic";

export default async function WorkoutDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  /*
   * Only numeric IDs are valid.
   */
  if (!/^\d+$/.test(id)) {
    notFound();
  }

  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }

  if (!workout) {
    notFound();
  }

  return (
    <main className="fit-grid min-h-screen px-4 py-10 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT IMAGE */}

          <div className="overflow-hidden rounded-3xl border-2 border-black bg-zinc-200 shadow-[6px_6px_0_#000]">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[420px] w-full object-cover lg:min-h-[720px]"
            />
          </div>

          {/* RIGHT CONTENT */}

          <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000] md:p-10">

            {/* Categories */}

            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map(
                (muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-black px-3 py-1 text-xs font-black uppercase text-white"
                  >
                    {muscle}
                  </span>
                )
              )}
            </div>

            {/* Title */}

            <h1 className="text-4xl font-black uppercase leading-none md:text-6xl">
              {workout.name}
            </h1>

            {/* Description */}

            <p className="mt-5 text-zinc-600">
              {workout.description}
            </p>

            {/* Specs */}

            <div className="mt-8 overflow-hidden rounded-2xl border-2 border-black">

              <div className="grid grid-cols-2 md:grid-cols-3">

                {[
                  [
                    "Equipment",
                    workout.equipment,
                  ],
                  [
                    "Difficulty",
                    workout.difficulty,
                  ],
                  [
                    "Sets",
                    String(workout.sets),
                  ],
                  [
                    "Reps",
                    workout.reps,
                  ],
                  [
                    "Duration",
                    `${workout.duration} min`,
                  ],
                  [
                    "Calories",
                    `${workout.caloriesBurned} kcal`,
                  ],
                  [
                    "Rating",
                    String(workout.rating),
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-r border-black p-4"
                  >
                    <p className="text-[9px] font-black text-zinc-500">
                      {label}
                    </p>

                    <p className="mt-1 text-sm font-black">
                      {value}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* Instructions */}

            <div className="mt-8">

              <h2 className="text-xl font-black uppercase">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">

                {workout.instructions.map(
                  (instruction, index) => (
                    <li
                      key={instruction}
                      className="flex gap-3"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#ccff00] text-xs font-black">
                        {index + 1}
                      </span>

                      <span className="text-sm leading-6 text-zinc-700">
                        {instruction}
                      </span>
                    </li>
                  )
                )}

              </ol>
            </div>

            {/* Buttons */}

            <div className="mt-9">
              <WorkoutActions
                workout={workout}
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}