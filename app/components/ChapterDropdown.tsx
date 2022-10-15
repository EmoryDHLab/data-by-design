import { Link } from "@remix-run/react";

export default function ChapterDropdown() {
  return (
    <div className="absolute z-20 top-10 border divide-y text-white">
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <Link to="/chapters/peabody/">The Work of Knowledge</Link>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <Link to="/chapters/playfair/">Visualization as Argument</Link>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <Link to="/chapters/dubois/">Between Data and Truth</Link>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <Link to="/chapters/brooks/">Every Datapoint a Person</Link>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <Link to="/chapters/willard/">Narratives of Possession</Link>
      </div>
      <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
        <Link to="/chapters/labour/">Labour</Link>
      </div>
    </div>
  );
}
