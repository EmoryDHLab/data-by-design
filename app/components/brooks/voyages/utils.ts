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

  // Return black;
  return [0, 0, 0];
}

export const voyageConstants = {
  minEmbark: 1,
  maxEmbark: 1545,
  minDuration: 86400,
  maxDuration: 273369600,
  maxWidth: 30,
  maxOverlap: 300
}
