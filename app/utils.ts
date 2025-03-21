import { chapterMeta as chapterMetaData } from "~/data/chapterMeta";
import type { TChapterMeta, ChapterTitle } from "./types/chapterMetaTags";

export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export function* numberRange(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export const spacesToHyphens = (str: string) => {
  return str.replace(/\s/g, "-").toLowerCase();
};

export const random = (min: number, max: number) => {
  min = Math.floor(min);
  max = Math.floor(max) - min;
  return Math.floor(Math.random() * max + min);
};

// Stolen from p5
// https://github.com/processing/p5.js/blob/45ada83739efa51f6747fc037e95d4b7eb9b351f/src/math/calculation.js#L397
export const map = (
  n: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number,
  withinBounds?: boolean
) => {
  const newValue =
    ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newValue;
  }
  if (start2 < stop2) {
    return Math.max(Math.min(newValue, stop2), start2);
  } else {
    return Math.max(Math.min(newValue, start2), stop2);
  }
};

export const chapterMeta = (chapter: ChapterTitle) => {
  const metaData: TChapterMeta = chapterMetaData;
  const hostName: string = "https://dev.dataxdesign.io";
  const imageUrl: string = `${hostName}/${chapterMetaData[chapter].image}`;
  return [
    { charset: "utf-8" },
    { title: `${metaData[chapter].title}: ${metaData[chapter].subtitle}` },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    {
      name: "og:title",
      content: `${chapterMetaData[chapter].title}: ${chapterMetaData[chapter].subtitle}`,
    },
    {
      name: "twitter:title",
      content: `${chapterMetaData[chapter].title}: ${chapterMetaData[chapter].subtitle}`,
    },
    { name: "og:url", content: `${hostName}/chapters/${chapter}` },
    { name: "description", content: chapterMetaData[chapter].description },
    { name: "og:description", content: chapterMetaData[chapter].description },
    {
      name: "twitter:description",
      content: chapterMetaData[chapter].description,
    },
    { name: "image", content: imageUrl },
    { name: "og:image", content: imageUrl },
    { name: "og:image:width", content: chapterMetaData[chapter].imageWidth },
    { name: "og:image:height", content: chapterMetaData[chapter].imageHeight },
    { name: "twitter:image", content: imageUrl },
    { name: "og:site_name", content: "Data by Design" },
  ];
};
