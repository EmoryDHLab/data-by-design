import { Outlet } from "react-router";

export default function ChapterPage() {
  return (
    <div className="bg-offwhite text-xl space-y-5 flex flex-col items-center">
      <Outlet />
    </div>
  );
}
