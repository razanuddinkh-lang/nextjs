
import Link from "next/link";

import {
  ArrowDownIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

import HomeClient from "@/components/HomeClient";

export default function Home() {
  return (
    <main>

      {/* Hero */}

      <section className=" bg-slate-950 m-5 px-4 py-14 text-white lg:px-6 lg:py-19 border-1 border-zinc-800 rounded-2xl ">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="mb-5 text-xs font-black tracking-[.3em] text-[#ccff00] pb-5">
              WORKOUT LIBRARY
            </p>

            <h1 className="scale-y-180 max-w-3xl font-black uppercase leading-[.9]  lg:text-3xl ">
              TRAIN WITH INTENT. LOG
              <br />
              
                EVERY SET.
              
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400">
              FitLog is a dark, no-nonsense gym
              companion: pick a lift, lock it into
              today&apos;s plan, and watch the
              week&apos;s work add up.
            </p>

            <Link
              href="#library"
              className="acid-btn btn mt-8 rounded-xl px-6 font-black"
            >
              <BoltIcon className="h-5 w-5" />

              Browse workouts

              <ArrowDownIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Hero image */}

          <div className="overflow-hidden">
            <img
              src="/banner.png "
              alt="FitLog workout"
              className=" w-[300px] object-cover lg:h-[380px] ml-35"
            />
          </div>

        </div>
      </section>

      {/* Library */}

      <HomeClient />
    </main>
  );
}
