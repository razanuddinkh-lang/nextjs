import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black px-4 py-8 text-white lg:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 md:flex-row md:items-center">

        <div className="">
          <Logo />
        </div>

        <p className="text-xs text-zinc-400">
          © 2026 FitLog — Workout Library.
          Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}