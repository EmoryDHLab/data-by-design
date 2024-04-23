function Image() {
  return <div className="w-24 h-24 border border-black"></div>;
}
export default function ImageGrid() {
  let images = [];
  for (let i = 0; i < 10; i++) {
    images.push(<Image />);
  }
  return <div className="grid-rows-10">{images}</div>;
}
