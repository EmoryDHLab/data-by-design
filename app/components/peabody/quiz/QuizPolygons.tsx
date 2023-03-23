export function TopPolygon({ index, color, x, y, size }) {
  return (
    <polygon
      points={`${x} ${y}, ${x} ${y + size}, ${x + size} ${y}`}
      fill={color}
    />
  )
}

export function FullPolygon({ index, color, x, y, size }) {
  return (
    <polygon
      points={`${x} ${y}, ${x} ${y + size}, ${x + size} ${y + size}, ${x + size} ${y}`}
      fill={color}
    />
  )
}


export function BottomPolygon({ index, color, x, y, size }) {
  return (
    <polygon
      points={`${x + size} ${y}, ${x} ${y + size}, ${x + size} ${y + size}`}
      fill={color}
    />
  )
}