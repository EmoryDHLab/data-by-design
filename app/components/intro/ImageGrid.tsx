function Image() {
  return <div className="w-24 h-24 border-black"></div>;
}
export default function ImageGrid() {
  let images = [];
  for (let i = 0; i < 100; i++) {
    images.push(<Image />);
  }
  return (
    <div className="flex flex-col items-center">
      <div className="w-4/5 grid gap-4 grid-cols-10 pb-10">{images}</div>
    </div>
  );
}
