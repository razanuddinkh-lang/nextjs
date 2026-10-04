export default function Loading({
  label = "Loading workouts…",
}: {
  label?: string;
}) {
  return (
    <div className="flex min-h-64 items-center justify-center gap-3">
      <span className="loading loading-spinner loading-lg" />

      <span className="font-bold">
        {label}
      </span>
    </div>
  );
}