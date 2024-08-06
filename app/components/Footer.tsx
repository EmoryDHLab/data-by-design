import SiteTitle from "./home/SiteTitle";
import { authorsString } from "~/data/projectMeta";

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-12  md:gap-x-12 px-8 md:p-32 md:pt-12 font-neueMontreal bg-offblack text-offwhite">
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
              <p className="text-2xl font-neueMontrealLight">
                Final version forthcoming in print and online from{" "}
                <a
                  className="underline underline-offset-4 decoration-1 hover:decoration-2 focus:decoration-2"
                  href="https://mitpress.mit.edu/"
                >
                  The MIT Press
                </a>{" "}
                in Fall 2025.
              </p>
              <p className="text-lg font-neueMontrealLight mt-6">
                Please contact the project director,{" "}
                <a
                  className="underline underline-offset-4 decoration-1 hover:decoration-2 focus:decoration-2"
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
      <div className="col-span-12 md:col-span-4 flex flex-col space-y-4 font-neueMontrealLight leading-6 md:px-12 text-sm md:text-xs">
        <p className="uppercase font-neueMontreal">Cite as</p>
        <p className="font-neueMontreal">
          {authorsString}. Data by Design: An Interactive History of Data
          Visualization, 1789-1900. 2024 public beta.
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
      <div className="col-span-12 md:col-span-5 flex flex-col space-y-16 pt-12 md:pt-0 p-4 md:p-0">
        <p className="uppercase">Sign up for project updates:</p>
        <form
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-baseline validate mb-8"
          action="https://dataxdesign.us22.list-manage.com/subscribe/post?u=6d2b8677087077c76d5d9940a&amp;id=7cff42ff53&amp;f_id=00a6c7e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <input
            placeholder="Email address here"
            type="email"
            className="required email bg-transparent focus:bg-transparent active:bg-transparent autofill:bg-transparent active:text-offblack focus:bg-playfairPrimary border-b-2 border-offwhite placeholder-offwhite font-neueMontrealLight tracking font-light text-2xl w-full text-white"
            name="EMAIL"
            id="mce-EMAIL"
            required
          />
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

          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            value="Subscribe"
            className={`button border border-offwhite rounded-3xl px-5 py-4 text-center me-2 mb-2 hover:bg-offwhite cursor-pointer hover:text-offblack`}
          />
        </form>
        <div className="flex flex-col md:flex-row flex-wrap space-y-6 items-start">
          <div className="font-dubois md:text-3xl xl:text-4xl mt-6 md:mr-8">
            DH Lab
          </div>
          <img
            className="h-auto w-full md:h-10 md:mr-8 xl:h-12 md:w-auto"
            src="/images/footer/ecds.png"
            alt="Emory Center for Digital Scholarship"
          />
          <div className="font-dubois md:text-3xl md:mr-8 xl:text-4xl">
            Polymode
          </div>
          <img
            className="h-auto w-full md:h-10 xl:h-12 md:w-auto md:mr-8"
            src="/images/footer/DigitalPublishingHumanities.png"
            alt="Emory Digital Humanities Lab"
          />
          <img
            className="h-auto w-full md:h-10 xl:h-12 md:w-auto md:mr-8"
            src="/images/footer/neh.png"
            alt="The National Endowment for the Humanities"
          />
          <img
            className="h-auto w-full md:h-10 xl:h-12 md:w-auto md:mr-8"
            src="/images/footer/mellon.jpeg"
            alt="Andrew W. Mellon Foundation"
          />
          <img
            className="h-auto w-1/2 md:h-10 xl:h-12 md:w-auto md:mr-8"
            src="/images/footer/mit.svg"
            alt="MIT Press"
          />
        </div>
      </div>
    </footer>
  );
}
