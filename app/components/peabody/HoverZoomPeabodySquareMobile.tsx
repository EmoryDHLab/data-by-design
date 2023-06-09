import SlideShow from "../layout/SlideShow";
import type { ChapterFigure } from "~/types/figureType";

interface Props {
  figure: ChapterFigure;
}

export const Caption = ({ children }) => {
  return (
    <figcaption
      className="font-dubois text-center my-3 w-3/4 mx-auto"
    >
      {children}
    </figcaption>
  )
}


const Image = ({ figure, className, children }: Props) => {
  return(
    <svg
      viewBox="0 0 244.56 242.88"
      role="img"
      // aria-labelledby={figure.filename}
      className={`mx-12 mb-6 drop-shadow-lg ${className ?? ""}`}
    >
      <image
        role="presentation"
        href={`/images/${figure.chapter}/${figure.fileName}.jpg`}
        width="100%"
      />
      {children}
    </svg>
  );
}


export default function HoverZoomPeabodySquareMobile({ figures }: Props) {
  return (
    <SlideShow
      className="block md:hidden bg-peabodyPrimary w-full py-10"
    >
      <figure className="">
        <Image figure={figures[0]} />
        <Caption>
          For example, by cross-referencing the table of events of the seventeenth century, pictured just below, to its corresponding chart
        </Caption>
      </figure>
      <figure className="">
        <Image figure={figures[0]}>
          <g>
            <rect
              x={142}
              y={9}
              width={31}
              height={31}
              fill="none"
              stroke="black"
              strokeWidth={3}
            />
            <rect
              x={145}
              y={13}
              width={25}
              height={25}
              fill="none"
              stroke="gold"
              strokeWidth={3}
            />
          </g>
        </Image>
        <Caption>
          the founding of Jamestown in 1607; that is the large red square in the first row on the right—red to signal England’s involvement, and its full-square shading to indicate its heightened significance.
        </Caption>
      </figure>
      <figure className="">
        <Image figure={figures[0]}>
          <g>
            <rect
              x={205}
              y={30}
              width={31}
              height={31}
              fill="none"
              stroke="black"
              strokeWidth={3}
            />
            <rect
              x={208}
              y={33}
              width={25}
              height={25}
              fill="none"
              stroke="gold"
              strokeWidth={3}
            />
          </g>
        </Image>
        <Caption>
          One can also identify, in the last square on the right, one row from the top, the settlement of Plymouth in 1620. The square is nearly entirely red—again, because of England’s involvement and because of its heightened significance—save for a small teal square in the middle-right position.
        </Caption>
      </figure>
      <figure className="">
        <Image figure={figures[0]}>
          <g>
            <rect
              x={221}
              y={39}
              width={14}
              height={14}
              fill="none"
              stroke="black"
              strokeWidth={2}
            />
            <rect
              x={223}
              y={41}
              width={10}
              height={10}
              fill="none"
              stroke="gold"
              strokeWidth={2}
            />
          </g>
        </Image>
        <Caption>
          Teal corresponds to action by the Dutch; indeed, this registers the first enslaved Africans arriving in Virginia in that same year.
        </Caption>
      </figure>
      <figure className="">
        <Image figure={figures[1]}>
          <g>
            <rect
              x={162}
              y={80}
              width={68}
              height={68}
              fill="none"
              stroke="black"
              strokeWidth={3}
            />
            <rect
              x={165}
              y={83}
              width={62}
              height={62}
              fill="none"
              stroke="gold"
              strokeWidth={3}
            />
          </g>
        </Image>
        <Caption>
          {figures[1].caption}
        </Caption>
      </figure>
    </SlideShow>
  );
}
