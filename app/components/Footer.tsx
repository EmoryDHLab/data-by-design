import SiteTitle from "./home/SiteTitle";
import SocialLinks from "./SocialLinks";
import { trackPreorderClick } from "~/analytics";
import { classNames } from "~/utils";

// The funder and collaborator logos share everything but their height, so the
// common part lives here. No hover: they aren't links, and nothing about a
// credit row needs to react to the cursor.
const LOGO = "w-auto object-contain";

// The source links in the credits paragraph. One constant rather than three
// copies, which is how they drifted apart in the first place. The underline
// sits just off the baseline — this paragraph is set small, so a wider gap
// detaches the rule from its words — and goes dashed under the cursor rather
// than thickening, matching the links in the first column.
//
// offset-2 rather than the 3 that was here before: Tailwind's scale is
// 0/1/2/4/8, so underline-offset-3 was never a class and emitted nothing.
const CREDIT_LINK =
  "underline underline-offset-2 decoration-1 hover:decoration-dashed focus:decoration-dashed";

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-12 gap-x-6 md:gap-x-12 p-8 md:p-16 lg:p-24 xl:p-32 xl:pt-12 font-neueMontreal bg-offblack text-offwhite">
      <div className="col-span-12  md:col-span-3 flex flex-col pt-8 md:pt-0">
        <cite className="sr-only">Data by Design</cite>
        <SiteTitle showTag={false} className="" />
        {/* Plain HTML, not a foreignObject inside a viewBox svg. In an svg
            scaled to width="100%" the copy was geometry rather than text: the
            420-unit viewBox multiplied every size by columnWidth/420, so the
            paragraphs shrank on narrow columns — worst at md, where a 3-of-12
            column is at its tightest just as the classes step up — and grew
            past their set sizes on wide ones. The 320-unit box clipped them on
            top of that. The icons below already sit outside the svg for this
            reason; the copy belongs out here with them.

            Flush left on mobile, so this lines up with the Cite as column.
            From md the inset returns, which is where it aligns with the
            "Design" line of the wordmark: 12.38% is the 52 user units the
            foreignObject was inset by as a share of the 420-unit viewBox, so
            it holds that alignment at any width. The icons use the same
            figure. */}
        <div className="md:ps-[12.38%]">
          <p className="md:text-lg text-base font-power tracking-wide ">
            An Interactive History of Data Visualization, 1789-1900
          </p>
          <p className="md:text-xl text-lg font-neueMontrealLight mt-4">
            Expanded version available in print as{" "}
            <cite>
              Data by Design: Visualization and Power from Abolition to the
              Dawn of Data Science
            </cite>{" "}
            (
            <a
              className="underline underline-offset-4 decoration-1 hover:decoration-dashed focus:decoration-2"
              href="https://mitpress.mit.edu/9780262056182/data-by-design/"
              onClick={() => trackPreorderClick("MIT Press", "footer")}
            >
              MIT Press
            </a>
            , 2026).
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
        </div>
        {/* mt-auto drops the icons to the foot of the column, level with the
            bottom of the footer on wide screens; the padding is what keeps
            them clear of the copy when the column is only as tall as its
            content. The inset matches the copy above. */}
        <div className="mt-auto pt-10 md:ps-[12.38%]">
          <SocialLinks />
        </div>
      </div>
      {/* SECOND COL */}
      <div className="col-span-12 md:col-span-4 flex flex-col space-y-4 font-neueMontrealLight leading-6 pt-2 md:pt-0 md:px-8 lg:px-12 text-sm md:text-xs">
        <p className="uppercase text-xs font-neueMontreal">Cite as</p>
        <p className="font-neueMontreal">
          Lauren Klein, Tanvi Sharma, Jay Varner, Margy Adams, Shiyao Li,
          Nicholas Yang, Dan Jutan, Jianing Fu, Anna Mola, Zhou Fang, Yang Li,
          and Silas Munro. <cite>Data by Design: An Interactive History of
          Data Visualization, 1789-1900.</cite> MIT Press, 2026.
        </p>
        <p>
          Data by Design has been designed and developed by the Emory Digital
          Humanities Lab in collaboration with the Emory Center for Digital
          Scholarship and Polymode.
        </p>
        <p>
          This project has been generously funded by a 2018–2019 National
          Endowment for the Humanities (NEH) and Andrew W. Mellon Foundation
          Fellowship for Digital Publication (FEL-257658-18), a 2021–2022 NEH
          Office of Digital Humanities Advancement Grant (HAA-281011-21), and
          a 2023–2024 Emory College of Arts and Sciences Chronos Fellowship,
          funded by the Abraham J. & Phyllis Katz Foundation. This book is
          freely available in an open access edition thanks to the generous
          support of Emory University and the Andrew W. Mellon Foundation.
        </p>
        <p>
          Additional research for this project was completed through fellowships
          from the{" "}
          <a
            className={CREDIT_LINK}
            href="https://www.americanantiquarian.org/"
          >
            American Antiquarian Society
          </a>{" "}
          and the{" "}
          <a className={CREDIT_LINK} href="https://librarycompany.org/">
            Library Company of Philadelphia
          </a>
          , and the assistance of the Archives and Collections Department at{" "}
          <a className={CREDIT_LINK} href="https://www.therooms.ca/">
            The Rooms
          </a>
          .
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
              className="absolute right-0 bottom-2 text-offwhite hover:text-changePrimary transition-colors duration-200"
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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-row md:flex-wrap gap-4 md:gap-8 pt-4 md:pt-6 items-center justify-items-center">
          <img
            className={classNames("h-8 sm:h-10 md:h-12", LOGO)}
            src="/images/footer/ecds.png"
            alt="Emory Center for Digital Scholarship"
            loading="lazy"
            decoding="async"
          />
          <img
            className={classNames("h-6 sm:h-8 md:h-8", LOGO)}
            src="/images/footer/DHlab.svg"
            alt="Digital Humanities Lab"
            loading="lazy"
            decoding="async"
          />
          <img
            className={classNames("h-8 sm:h-10 md:h-12", LOGO)}
            src="/images/footer/polymode.svg"
            alt="Polymode Studio"
            loading="lazy"
            decoding="async"
          />
          <img
            className={classNames("h-8 sm:h-10 md:h-12", LOGO)}
            src="/images/footer/DigitalPublishingHumanities.png"
            alt="Emory Digital Humanities Lab"
            loading="lazy"
            decoding="async"
          />
          <img
            className={classNames("h-8 sm:h-10 md:h-12", LOGO)}
            src="/images/footer/neh.png"
            alt="The National Endowment for the Humanities"
            loading="lazy"
            decoding="async"
          />
          <img
            className={classNames("h-8 sm:h-10 md:h-12", LOGO)}
            src="/images/footer/mellon.jpeg"
            alt="Andrew W. Mellon Foundation"
            loading="lazy"
            decoding="async"
          />
          <img
            className={classNames(
              "h-6 sm:h-8 md:h-10 col-span-3 sm:col-span-4 md:col-span-1 justify-self-center",
              LOGO
            )}
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
