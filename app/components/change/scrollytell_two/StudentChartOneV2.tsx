import { useContext, useEffect, useState } from "react";
import { ScrollytellContext } from "~/scrollytellContext";
import Map from "./Map";

interface Props {
  className?: string;
  width: number;
  height: number;
}

const StudentChartOneV2 = ({ className, width, height }: Props) => {
  const largeText = 30;
  const smallText = 16;
  const regularText = 24;
  const marginLeft = 20;
  const padding = 90;
  const sectionBreak = padding / 3;
  const smallTextLineHeight = smallText + 6;
  const sectionOneHeight = (largeText + 5) * 3;
  const sectionTwoHeight = (regularText + 4) * 3 + sectionBreak;
  const sectionThreeHeight = smallTextLineHeight * 7 + sectionBreak;
  const sectionFourHeight = smallText * 2;
  const sectionFiveHeight = smallTextLineHeight * 4;
  const topOffset =
    height / 2 -
    (sectionOneHeight +
      sectionTwoHeight +
      sectionThreeHeight +
      sectionFourHeight +
      sectionFiveHeight) /
      2;

  const { scrollProgress } = useContext(ScrollytellContext);

  return (
    <g className={`${className} transition-opacity duration-1000`}>
      {/* CHART */}
      <g
        className={`${
          scrollProgress >= 1.25 && scrollProgress <= 3.25
            ? "opacity-100"
            : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <g>
          <text
            x={marginLeft}
            y={topOffset}
            className={`text-black font-powerWide transition-opacity duration-1000 opacity-100
            }`}
            textAnchor=""
            dominantBaseline="hanging"
            fontSize={largeText}
          >
            <tspan x={marginLeft}>
              A STATISTICAL CHART, ILLUSTRATING THE CONDITION
            </tspan>
            <tspan x={marginLeft} dy={largeText + 5}>
              OF THE DESCENDANTS OF FORMER AFRICAN SLAVES
            </tspan>
            <tspan x={marginLeft} dy={largeText + 5}>
              NOW RESIDENT IN THE UNITED STATES OF AMERICA.
            </tspan>
          </text>
        </g>
        <g>
          <text
            y={topOffset + sectionOneHeight}
            fontSize={regularText}
            className="font-powerLightNarrow text-changePrimary fill-changePrimary-translucent tracking-wider"
          >
            <tspan x={marginLeft * 2} dy={regularText + 4}>
              UNE SÉRIE DE CARTES EST DIAGRAMMES STATISTIQUES MONTRANT LA
              CONDITION
            </tspan>
            <tspan x={marginLeft} dy={regularText + 4}>
              PREÉSENTE DES DESCENDANTS DES ANCIENS ESCLAVES AFRICANS
              ACTUELLEMENT
            </tspan>
            <tspan x={marginLeft} dy={regularText + 4}>
              ÉRABLIS DANS LES ETAS UNIS D'AMÉRIQUE.
            </tspan>
          </text>
        </g>

        <g>
          <text
            x={width / 4}
            y={topOffset + sectionOneHeight + sectionTwoHeight}
            textAnchor="middle"
            dominantBaseline="hanging"
            fontSize={smallText}
            className={`uppercase font-powerWide tracking-tighter transition-opacity duration-1000 opacity-100`}
          >
            <tspan x={width / 6}>PREPARED AND EXECUTED BY,</tspan>
            <tspan x={width / 6} dy={smallTextLineHeight}>
              NEGRO STUDENTS UND THE
            </tspan>
            <tspan x={width / 6} dy={smallTextLineHeight}>
              DIRECTION OF
            </tspan>
            <tspan x={width / 6} dy={smallTextLineHeight}>
              ATLANTA UNIVERSITY,
            </tspan>
            <tspan x={width / 6} dy={smallTextLineHeight}>
              ATLANTA, GA.
            </tspan>
            <tspan x={width / 6} dy={smallTextLineHeight}>
              UNITED STATES OF AMERICA
            </tspan>
          </text>
        </g>
        <g className={`transition-opacity duration-1000 opacity-100`}>
          <image
            x={width / 3.175}
            y={topOffset + sectionOneHeight + sectionTwoHeight - 12}
            width={regularText * 7 * 1.75}
            href="/images/change/extras/map.png"
          />
          <image
            x={width / 3.175}
            y={topOffset + sectionOneHeight + sectionTwoHeight - 12}
            width={regularText * 7 * 1.75}
            href="/images/change/extras/map_all.png"
            className={`transition-opacity duration-1000 ${
              scrollProgress >= 2.25 ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* <Map /> */}
        </g>
        <g>
          <text
            x={width / 4}
            y={topOffset + sectionOneHeight + sectionTwoHeight}
            textAnchor="middle"
            dominantBaseline="hanging"
            fontSize={smallText}
            className={`uppercase font-powerWide tracking-tighter transition-opacity duration-1000 opacity-100 fill-changePrimary`}
          >
            <tspan x={width * 0.83}>PRÉPARÉES ET EXECUTÉES PAR</tspan>
            <tspan x={width * 0.83} dy={smallTextLineHeight}>
              DES ÉTUDIANTS NÉGRES SOUS
            </tspan>
            <tspan x={width * 0.83} dy={smallTextLineHeight}>
              LA DIRECTION DE L' UNIVERSITÉ
            </tspan>
            <tspan x={width * 0.83} dy={smallTextLineHeight}>
              D' ATLANTA,
            </tspan>
            <tspan x={width * 0.83} dy={smallTextLineHeight}>
              ETAT DE GÊORGIE.
            </tspan>
            <tspan x={width * 0.83} dy={smallTextLineHeight}>
              ETATS UNS D' AMERIQUE.
            </tspan>
          </text>
        </g>

        <g>
          <path
            d={`M13.94 27.108C21.248 27.108 27.116 21.204 27.116 13.932C27.116 6.768 21.356 0.827998 13.94 0.827998C6.74 0.827998 0.836 6.516 0.836 13.932C0.836 21.204 6.704 27.108 13.94 27.108ZM6.812 23.58L9.548 15.444L2.924 10.98H11.06L13.94 2.196L16.892 10.98H25.028L18.404 15.444L21.14 23.58L13.94 18.396L6.812 23.58Z`}
            fill="black"
            transform={`translate(${width * 0.495 - smallText * 6.25}, ${
              topOffset +
              sectionOneHeight +
              sectionTwoHeight +
              sectionThreeHeight -
              2.5
            }) scale(0.59)`}
          />

          <text
            x={width * 0.5}
            y={
              topOffset +
              sectionOneHeight +
              sectionTwoHeight +
              sectionThreeHeight
            }
            fill="black"
            fontSize={smallText}
            className="uppercase font-powerWide"
            textAnchor="middle"
            dominantBaseline="hanging"
          >
            Atlanta University
          </text>
        </g>

        <g>
          <text
            x={width / 2}
            y={
              topOffset +
              sectionOneHeight +
              sectionTwoHeight +
              sectionThreeHeight +
              sectionFourHeight
            }
            textAnchor="middle"
            dominantBaseline="hanging"
            fontSize={smallText}
            className={`uppercase font-powerWide transition-opacity duration-1000 opacity-100`}
          >
            <tspan x={width / 2}>
              THE UNIVERSITY WAS FOUNDED IN 1867. IT HAS INSTRUCTED 6000 NEGRO
              STUDENTS
            </tspan>
            <tspan
              className="fill-changePrimary"
              x={width / 2}
              dy={regularText}
            >
              L'UNIVERSITÉ A ÉTÉ FONDÉE EN 1867. ELLE A DONNÉL" INSTRUCTION A'
              6000 ÉTUDIANTS NEGRES.
            </tspan>
            <tspan x={width / 2} dy={regularText}>
              IT HAS GRADUATED 330 NEGROES AMONG WHOM ARE:
            </tspan>
            <tspan
              className="fill-changePrimary"
              x={width / 2}
              dy={regularText}
            >
              ELLE A DÉLIVRE DES DIPLOMES A 330 NÉGRES DONT:
            </tspan>
          </text>
        </g>
      </g>
    </g>
  );
};

export default StudentChartOneV2;
