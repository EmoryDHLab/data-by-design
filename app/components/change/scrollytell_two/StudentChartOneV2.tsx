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
  const mapWidth = width / 3;
  const sectionBreak = padding / 3;
  const smallTextLineHeight = smallText + 8;
  const sectionOneHeight = (largeText + 5) * 3;
  const sectionTwoHeight = (regularText + 4) * 3 + sectionBreak;
  // Map viewbox is 0 0 2563 1778.13
  const mapAspectRatio = 1778.13 / 2563;
  const mapHeight = mapWidth * mapAspectRatio;
  const sectionThreeHeight = Math.max(
    mapHeight,
    smallTextLineHeight * 7 + sectionBreak,
  );

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
          <Map
            width={mapWidth}
            x={(width - mapWidth) / 2}
            y={40}
            showColleges={scrollProgress >= 2.25}
          />
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
