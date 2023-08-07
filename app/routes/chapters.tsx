import { Outlet } from "react-router";

export default function ChapterPage() {
  return (
    <main className="bg-offwhite text-base flex flex-col items-center chapter-body md:min-w-[100vw]">
      <Outlet />
    </main>
  );
}
