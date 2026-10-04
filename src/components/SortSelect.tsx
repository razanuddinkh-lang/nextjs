"use client";

import type { SortKey } from "@/types/workout";

type SortSelectProps = {
  value: SortKey;
  onChange: (value: SortKey) => void;
};

export default function SortSelect({
  value,
  onChange,
}: SortSelectProps) {
  return (
    <label className="flex items-center gap-2 text-xs font-black uppercase">
      Sort By

      <select
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value as SortKey
          )
        }
        className="select select-sm font-semibold rounded-xl border-1 border-zinc-700 bg-[#121416] text-white"
      >
        <option value="duration">
          Duration
        </option>

        <option value="calories">
          Calories
        </option>

        <option value="rating">
          Rating
        </option>
      </select>
    </label>
  );
}