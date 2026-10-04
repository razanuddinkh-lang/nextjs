import type { Workout } from "@/types/workout";

export const API_URLS = [
  "https://api.abcz.workers.dev/api/fitlog",
  "https://api.api-store.workers.dev/api/fitlog",
];

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getWorkouts(): Promise<Workout[]> {
  let lastError: unknown;

  for (const url of API_URLS) {
    try {
      return await fetchJson<Workout[]>(url);
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError instanceof Error) {
    throw lastError;
  }

  throw new Error("Unable to load workouts");
}

export async function getWorkout(
  id: string | number
): Promise<Workout | null> {
  let lastError: unknown;

  for (const baseUrl of API_URLS) {
    try {
      const data = await fetchJson<Workout>(
        `${baseUrl}/${id}`
      );

      return data;
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    throw lastError;
  }

  return null;
}