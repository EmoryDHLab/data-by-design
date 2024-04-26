export default function FakePage() {
  return (
    <div className="w-[50vw] flex flex-col items-center">
      <div className="border-2 border-dashed border-black w-64 h-96 flex flex-col items-center justify-around bg-neutral-300">
        <div className="w-48 h-24 bg-white border-4 border-black"> </div>
        <div className="space-y-2">
          <div className="flex">
            <span className="text-5xl font-bold font-dubois pr-2">B</span>
            <div className="grow space-y-2">
              <div className="h-2 bg-slate-500"></div>
              <div className="h-2 bg-slate-500"></div>
              <div className="h-2 bg-slate-500"></div>
            </div>
          </div>
          <div className="h-2 w-48 bg-slate-500"></div>
          <div className="h-2 w-48 bg-slate-500"></div>
          <div className="h-2 w-48 bg-slate-500"></div>
          <div className="h-2 w-48 bg-slate-500"></div>
          <div className="h-2 w-48 bg-slate-500"></div>
          <div className="h-2 w-48 bg-slate-500"></div>
          <div className="h-2 w-48 bg-slate-500"></div>
          <div className="h-2 w-48 bg-slate-500"></div>
        </div>
      </div>
    </div>
  );
}
