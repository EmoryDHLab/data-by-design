export default function Navbar() {
  return (
    <div className="w-full bg-black flex justify-evenly pb-2 pt-2">
      <div className="font-william text-white text-2xl">
        <a href="/">Data by Design</a>
      </div>
      <div className="flex justify-between w-2/5">
        <div className="font-sans text-white text-xl">
          <div>
            <a href="/" className="nuxt-link-active">
              Home
            </a>
          </div>
        </div>
        <div className="font-sans text-white text-xl">
          <div>Chapters</div>
          <div className="absolute z-20 top-10 border divide-y invisible">
            <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
              <a href="/chapters/peabody/" className="">
                The Work of Knowledge
              </a>
            </div>
            <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
              <a
                href="/chapters/playfair/"
                className="nuxt-link-exact-active nuxt-link-active"
                aria-current="page"
              >
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
            <div className="bg-black text-lg hover:bg-playfairPrimary pl-2 pr-3 pb-0.5 pt-0.5">
              <a href="/chapters/sandbox/" className="">
                Sandbox
              </a>
            </div>
          </div>
        </div>
        <div className="font-sans text-white text-xl">
          <div>
            <a href="/sandbox" className="">
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
