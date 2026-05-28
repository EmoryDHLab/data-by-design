import SiteTitle from "./home/SiteTitle";

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-12 gap-x-6 md:gap-x-12 p-8 md:p-16 lg:p-24 xl:p-32 xl:pt-12 font-neueMontreal bg-offblack text-offwhite">
      <div className="col-span-12  md:col-span-3 flex flex-col">
        <cite className="sr-only">Data by Design</cite>
        <SiteTitle showTag={false} className="" />
        <svg
          width="100%"
          viewBox="0 0 420 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
          className="fill-offwhite"
        >
          <g>
            <foreignObject x={52} y={0} height={200} width={368}>
              <p className="md:text-2xl text-lg font-neueMontrealLight">
                Final version forthcoming in print and online from{" "}
                <a
                  className="underline underline-offset-4 decoration-1 hover:decoration-dashed focus:decoration-2"
                  href="https://mitpress.mit.edu/"
                >
                  The MIT Press
                </a>{" "}
                in Fall 2026.
              </p>
              <p className="md:text-lg text-sm font-neueMontrealLight mt-6">
                Please contact the project director,{" "}
                <a
                  className="underline underline-offset-4 decoration-1 hover:decoration-dashed focus:decoration-2"
                  href="mailto:lauren.klein@emory.edu"
                >
                  Lauren Klein
                </a>
                , with any additional questions.
              </p>
            </foreignObject>
          </g>
        </svg>
      </div>
      {/* SECOND COL */}
      <div className="col-span-12 md:col-span-4 flex flex-col space-y-4 font-neueMontrealLight leading-6 pt-8 md:pt-0 md:px-8 lg:px-12 text-sm md:text-xs">
        <p className="uppercase text-xs font-neueMontreal">Cite as</p>
        <p className="font-neueMontreal">
          Lauren Klein, Tanvi Sharma, Jay Varner, Shiyao Li, Margy Adams,
          Nicholas Yang, Dan Jutan, Jianing Fu, Anna Mola, Zhou Fang, Yang Li,
          and Silas Munro. Data by Design: An Interactive History of Data
          Visualization, 1789-1900. 2025 public beta.
        </p>
        <p>
          Data by Design has been designed and developed by the Emory Digital
          Humanities Lab in collaboration with the Emory Center for Digital
          Scholarship and Polymode.
        </p>
        <p>
          This project has been generously funded by a 2018-2019 NEH-Mellon
          Fellowship for Digital Publication (FEL-257658-18), a 2021-2022 NEH
          Office of Digital Humanities Advancement Grant (HAA-281011-21), and an
          open access publication grant from Emory's Digital Publishing in the
          Humanities initiative, which is supported by the Andrew W. Mellon
          Foundation, the Emory College Office of Faculty, and the Fox Center
          for Humanistic Inquiry.
        </p>
        <p>
          Additional research for this project was completed through fellowships
          from the{" "}
          <a
            className="underline underline-offset-4 decoration-1 hover:decoration-2 focus:decoration-2"
            href="https://www.americanantiquarian.org/"
          >
            American Antiquarian Society
          </a>{" "}
          and the{" "}
          <a
            className="underline underline-offset-3 decoration-1 hover:decoration-2 focus:decoration-2"
            href="https://librarycompany.org/"
          >
            Library Company of Philadelphia
          </a>
          , and the assistance of the Archives and Collections Department at{" "}
          <a
            className="underline underline-offset-3 decoration-1 hover:decoration-2 focus:decoration-2"
            href="https://www.therooms.ca/"
          >
            The Rooms
          </a>
          ."
        </p>
      </div>
      {/* THIRD COL */}
      <div className="col-span-12 md:col-span-5 my-20 md:my-0 flex flex-col space-y-4 pt-8 md:pt-0">
        <p className="uppercase text-xs font-neueMontreal">
          Sign up for project updates
        </p>
        <form
          className="relative w-full max-w-md mb-8"
          action="https://dataxdesign.us22.list-manage.com/subscribe/post?u=6d2b8677087077c76d5d9940a&amp;id=7cff42ff53&amp;f_id=00a6c7e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <div className="relative">
            <input
              placeholder="Enter Email"
              type="email"
              className="w-full bg-transparent border-b border-offwhite pb-2 pr-12 placeholder-stone-400 text-white font-bold tracking-wide text-lg focus:outline-none focus:border-white transition-colors autofill:shadow-[inset_0_0_0_1000px_theme(colors.offblack)] autofill:[-webkit-text-fill-color:theme(colors.white)] autofill:[caret-color:white]"
              name="EMAIL"
              id="mce-EMAIL"
              required
            />
            <button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="absolute right-0 bottom-2 text-offwhite hover:text-white transition-colors"
              aria-label="Subscribe"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div aria-hidden="true" className="sr-only">
            {/*
                Note from MailChimp - example real people should not fill this
                in and expect good things - do not remove this or risk form bot
                sign-ups.
            */}
            <input
              type="text"
              name="b_6d2b8677087077c76d5d9940a_7cff42ff53"
              tabIndex={-1}
              value=""
              readOnly
            />
          </div>
        </form>

        {/* Logos  */}

        <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-row md:flex-wrap gap-4 md:gap-8 pt-12 md:pt-20 items-center justify-items-center">
          <img
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            src="/images/footer/ecds.png"
            alt="Emory Center for Digital Scholarship"
            loading="lazy"
            decoding="async"
          />
          <img
            className="h-6 sm:h-8 md:h-8 w-auto object-contain"
            src="/images/footer/DHlab.svg"
            alt="Digital Humanities Lab"
            loading="lazy"
            decoding="async"
          />
          <img
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            src="/images/footer/polymode.svg"
            alt="Polymode Studio"
            loading="lazy"
            decoding="async"
          />
          <img
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            src="/images/footer/DigitalPublishingHumanities.png"
            alt="Emory Digital Humanities Lab"
            loading="lazy"
            decoding="async"
          />
          <img
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            src="/images/footer/neh.png"
            alt="The National Endowment for the Humanities"
            loading="lazy"
            decoding="async"
          />
          <img
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            src="/images/footer/mellon.jpeg"
            alt="Andrew W. Mellon Foundation"
            loading="lazy"
            decoding="async"
          />
          <img
            className="h-6 sm:h-8 md:h-10 w-auto object-contain col-span-3 sm:col-span-4 md:col-span-1 justify-self-center"
            src="/images/footer/mit.svg"
            alt="MIT Press"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </footer>
  );
}
