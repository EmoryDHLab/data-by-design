const grays: number[] = [93, 100, 107, 114, 121, 129, 137, 145, 153, 162, 171, 180, 190, 200, 210, 221, 232];

const colors = [
  [86, 146, 138],
  [238, 201, 159],
  [222, 0, 59],
  [58, 15, 49],
  [77, 76, 132]
]

export const randomColor = (fullColor: boolean) => {
  if (fullColor) {
    return colors[Math.floor(Math.random() * colors.length)];
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
