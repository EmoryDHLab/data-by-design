export default function HomeTitle() {
  return (
    <div className="grid bg-black text-white grid-cols-14 grid-rows-30 font-dubois pt-5">
      <div className="col-start-1 col-end-11 grid grid-cols-5 grid-rows-5">
        <div className="font-bold text-frontTitle col-start-1 col-span-4 row-span-3 z-10 leading-veryTight pl-24">
          <span>DATA BY</span> <span className="ml-32">DESIGN</span>
        </div>
        <div className="text-3xl col-start-4 col-span-2 row-start-4">
          An Interactive History of Data Visualization
          <br />
          1786-1900
        </div>
        <div className="text-xl col-start-2 col-span-2 row-start-5">
          What is the story we tell about the emergence of modern data
          visualization?
        </div>
        <div className="text-xl col-start-4 col-span-2 row-start-5">
          How might we tell that story differently?
        </div>
      </div>
      <div className="flex flex-col items-center middle-full col-start-11 col-span-4 row-span-8 bg-nightingale_blue p-16">
        <div>
          <img src="/images/ch5-08b-amalg.jpg" className="max-w-full" />
        </div>
        <div className="caption text-center mt-10 w-5/6">
          <span className="text-offwhite">
            The Amalgamation of White and Black elements of the population in
            the United States by W.E.B Du Bois. Atlanta University. Library of
            Congress.
          </span>
        </div>
      </div>
    </div>
  );
}
