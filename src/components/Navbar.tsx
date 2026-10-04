"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useApp } from "@/context/AppProvider";

export default function Navbar() {
  const { plan, saved } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 text-white backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={42}
            height={42}
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />

          <span className="text-lg font-black tracking-tight sm:text-xl">
            FITLOG
          </span>
        </Link>

        {/* Desktop / Tablet Navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          <Link
            href="/#library"
            className="text-sm font-bold text-zinc-300 transition-colors hover:text-[#ccff00] lg:text-base  rounded-3xl   py-1  hover:bg-zinc-700 sm:px-3"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-bold text-zinc-300 transition-colors hover:text-[#ccff00] lg:text-base  rounded-3xl   py-1  hover:bg-zinc-700 sm:px-3"
          >
            My Plan
          </Link>
        </div>

        {/* Desktop / Tablet Counters */}
        <div className="hidden items-center gap-2 sm:gap-3 md:flex">

          <Link
            href="/my-plan"
            className="rounded-3xl bg-[#ccff00] px-3 py-2 text-xs font-black text-black transition hover:bg-white sm:px-4"
          >
            Plan ({plan.length})
          </Link>

          <Link
            href="/my-plan"
            className="rounded-3xl border-none  px-3 py-2 text-xs font-black text-white transition hover:border-[#ccff00] hover:text-[#ccff00] sm:px-4"
          >
            Saved ({saved.length})
          </Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 text-white transition hover:border-[#ccff00] hover:text-[#ccff00] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-2xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-zinc-800 bg-black px-4 py-5 md:hidden">

          <div className="flex flex-col gap-3">

            <Link
              href="/#library"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-4 py-3 text-sm font-black text-white transition hover:bg-zinc-900 hover:text-[#ccff00]"
            >
              WORKOUT
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-4 py-3 text-sm font-black text-white transition hover:bg-zinc-900 hover:text-[#ccff00]"
            >
              MY PLAN
            </Link>

            <div className="mt-2 grid grid-cols-2 gap-3 border-t border-zinc-800 pt-4">

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-[#ccff00] px-3 py-3 text-center text-xs font-black text-black transition hover:bg-white"
              >
                PLAN ({plan.length})
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="rounded-md border border-zinc-600 px-3 py-3 text-center text-xs font-black text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                SAVED ({saved.length})
              </Link>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}