import ImageModal from "~/components/layout/ImageModal";

export default function HomeTitle() {
  return (
    <div className="sm:grid bg-black text-white sm:grid-cols-14 sm:grid-rows-30 font-dubois pt-10 sm:pt-5">
      <div className="flex flex-col items-center col-start-11 col-span-4 bg-nightingale_blue sm:p-16 pb-5 pt-10">
        <div className="flex flex-col items-center">
          <ImageModal
            src="/images/ch5-08b-amalg.jpg"
            className="w-3/5 sm:w-full"
          />
        </div>
        <div className="caption text-center sm:pt-10 py-5 w-5/6 sm:text-lg sm:w-full text-sm">
          <span className="text-offwhite">
            The Amalgamation of White and Black elements of the population in
            the United States by W.E.B Du Bois. Atlanta University. Library of
            Congress.
          </span>
        </div>
      </div>
      <div className="sm:row-start-1 sm:col-start-1 sm:col-end-11 sm:grid sm:grid-cols-5 sm:grid-rows-5 pl-6 sm:pl-0 sm:row-span-8">
        <div className="py-10 font-bold text-5xl sm:text-frontTitle sm:col-start-1 sm:col-span-4 sm:row-span-3 z-10 leading-veryTight sm:pl-24">
          <span className="sm:hidden">DATA BY DESIGN</span>
          <span className="hidden sm:inline">DATA BY</span>{" "}
          <span className="hidden sm:ml-32 sm:inline">DESIGN</span>
        </div>
        <div className="sm:text-3xl text-xl font-semibold sm:font-normal col-start-4 col-span-2 row-start-4">
          An Interactive History
          <br /> of Data Visualization
          <br />
          1786-1900
        </div>
        <div className="flex py-10 pb-15 sm:p-0 sm:contents justify-between col-start-4 pr-8">
          <div className="sm:text-xl text-sm sm:col-start-2 sm:col-span-2 sm:row-start-5">
            What is the story we tell
            <br /> about the emergence of
            <br /> modern data visualization?
          </div>
          <div className="sm:text-xl text-sm sm:col-start-4 sm:col-span-2 sm:row-start-5">
            How might we tell that
            <br /> story differently?
          </div>
        </div>
      </div>
    </div>
  );
}
