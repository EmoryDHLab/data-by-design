export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
}

export function* numberRange(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export const spacesToHyphens = (str: string) => {
  return str.replace(/\s/g, "-").toLowerCase();
}

export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (min - max) + min);
}

// Stolen from p5
// https://github.com/processing/p5.js/blob/45ada83739efa51f6747fc037e95d4b7eb9b351f/src/math/calculation.js#L397
export const map = (n: number, start1: number, stop1: number, start2: number, stop2: number, withinBounds?: boolean) => {
  const newValue = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newValue;
  }
  if (start2 < stop2) {
    return Math.max(Math.min(newValue, stop2), start2)
  } else {
    return Math.max(Math.min(newValue, start2), stop2)
  }
};