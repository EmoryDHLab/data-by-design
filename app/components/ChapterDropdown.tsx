export default function ChapterDropdown() {
  return (
    <div className="absolute z-20 top-10 border divide-y text-white">
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <a href="/chapters/peabody/" className="">
          The Work of Knowledge
        </a>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <a href="/chapters/playfair/" className="">
          Visualization as Argument
        </a>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <a href="/chapters/dubois/" className="">
          Between Data and Truth
        </a>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <a href="/chapters/brooks/" className="">
          Every Datapoint a Person
        </a>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <a href="/chapters/willard/" className="">
          Narratives of Possession
        </a>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <a href="/chapters/labour/" className="">
          Labour
        </a>
      </div>
    </div>
  );
}
