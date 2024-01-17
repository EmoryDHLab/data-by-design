import { Outlet } from "react-router";

export default function ChapterPage() {
  return (
    <div className="bg-offwhite text-lg flex leading-5 flex-col items-center md:min-w-[100vw]">
      <Outlet />
    </div>
  );
}
