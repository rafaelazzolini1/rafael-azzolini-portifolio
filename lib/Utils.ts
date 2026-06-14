type ClassValue = string | number | boolean | undefined | null | ClassValue[]

/**
 * Merges class names conditionally — no external dependency needed.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat(Infinity as 1)
    .filter(Boolean)
    .join(' ')
}