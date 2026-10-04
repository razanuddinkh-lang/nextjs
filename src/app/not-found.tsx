import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-black px-4 text-white">

      <div className="text-center">

        <p className="text-sm font-black tracking-[.3em] text-[#ccff00]">
          ERROR 404
        </p>

        <h1 className="mt-3 text-7xl font-black">
          LOST REP.
        </h1>

        <p className="mt-4 text-zinc-400">
          That workout or route does not exist.
        </p>

        <Link
          href="/"
          className="acid-btn btn mt-7 rounded-xl font-black"
        >
          Back to FitLog
        </Link>

      </div>

    </main>
  );
}