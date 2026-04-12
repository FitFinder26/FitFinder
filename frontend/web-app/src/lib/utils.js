import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Parses a monolithic product description into an elegant array of features.
 * Splits by sentence boundaries and handles material composition strings.
 */
export function parseDescription(description) {
  if (!description || typeof description !== "string") return [];

  // 1. Clean up common formatting artifacts and extra whitespace
  const cleanStr = description.trim().replace(/\s\s+/g, ' ');

  // 2. Split by major sentence markers (., !, ?) followed by space
  let parts = cleanStr.split(/(?<=[.!?])\s+/);

  // 3. Refinement loop to handle complex strings (like material compositions)
  const features = [];
  
  parts.forEach(part => {
    let segment = part.trim();
    if (!segment) return;

    // Remove trailing dot for cleaner display in lists
    if (segment.endsWith('.')) {
      segment = segment.slice(0, -1);
    }

    // Special logic for material lists (e.g., "57% Cotton 38% Polyester 5% Spandex")
    // If we detect multiple percentage symbols, it's likely a composite line.
    if ((segment.match(/%/g) || []).length > 1) {
      const materials = segment.split(/(?=\d+%)/).map(m => m.trim());
      features.push(...materials.filter(Boolean));
    } else {
      features.push(segment);
    }
  });

  // 4. Final cleaning: Capitalize first letter and filter any junk
  return features
    .filter(f => f.length > 3) // Ignore very short fragments
    .map(f => f.charAt(0).toUpperCase() + f.slice(1));
}
