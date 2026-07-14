import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names intelligently.
 * Resolves conflicts (e.g. `px-4` vs `px-6`) by keeping the last one.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
