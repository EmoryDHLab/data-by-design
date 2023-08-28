import colors from "~/data/brooks/colors.json";
import grays from "~/data/brooks/grays.json";

export const randomColor = (fullColor: boolean) => {
  if (fullColor) {
    return [
      colors.reds[Math.floor(Math.random() * colors.reds.length)],
      colors.greens[Math.floor(Math.random() * colors.greens.length)],
      colors.blues[Math.floor(Math.random() * colors.blues.length)],
    ];
  }

  const tone = grays[Math.floor(Math.random() * grays.length)];
  return [tone, tone, tone];
}

export const voyageConstants = {
  minEmbark: 1,
  maxEmbark: 1545,
  minDuration: 86400,
  maxDuration: 273369600,
  maxWidth: 30,
  maxOverlap: 300
}
