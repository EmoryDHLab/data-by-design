import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

export default function ChapterPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) document.getElementById(hash.replace("#", ""))?.scrollIntoView({ block: "start" });
  })

  return (
    <div className="bg-offwhite text-base flex flex-col items-center chapter-body" data-step={111}>
      <Outlet />
    </div>
  );
}
