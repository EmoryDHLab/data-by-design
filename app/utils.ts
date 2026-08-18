import { chapterMeta as chapterMetaData } from "~/data/chapterMeta";
import { authors } from "./data/projectMeta";
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

// Canonical production host. The dev deployment is served from a subdomain,
// but this branch merges into main, so URLs in metadata always point at the
// production site.
export const HOST_NAME = "https://dataxdesign.io";

export const SITE_DESCRIPTION =
  "An interactive history of data visualization, 1789-1900. Read the online edition of Data by Design, by Lauren Klein (MIT Press, 2026).";

export const pageMetaTags = ({
  title,
  description = SITE_DESCRIPTION,
  path,
  image = "/images/dxd.jpg",
}: {
  title: string;
  description?: string;
  path: string;
  image?: string;
}) => {
  const imageUrl = image.startsWith("http") ? image : `${HOST_NAME}${image}`;
  return [
    { charset: "utf-8" },
    { title },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "description", content: description },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:url", content: `${HOST_NAME}${path}` },
    { name: "og:image", content: imageUrl },
    { name: "og:site_name", content: "Data by Design" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
};

export const chapterMetaTags = (chapter: ChapterTitle) => {
  const metaData: TChapterMeta = chapterMetaData;
  const hostName: string = HOST_NAME;
  // Preface, Introduction, and Epilogue have no blurb of their own, so they
  // fall back to the site description rather than shipping an empty one.
  const chapterDescription =
    chapterMetaData[chapter].description || SITE_DESCRIPTION;
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
    { name: "description", content: chapterDescription },
    { name: "og:description", content: chapterDescription },
    {
      name: "twitter:description",
      content: chapterDescription,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "image", content: chapterMetaData[chapter].image },
    { name: "og:image", content: chapterMetaData[chapter].image },
    { name: "og:image:width", content: chapterMetaData[chapter].imageWidth },
    { name: "og:image:height", content: chapterMetaData[chapter].imageHeight },
    { name: "twitter:image", content: chapterMetaData[chapter].image },
    { name: "og:site_name", content: "Data by Design" },
    {
      name: "citation_title",
      content: `${chapterMetaData[chapter].title}: ${chapterMetaData[chapter].subtitle}`,
    },
    { name: "DC.type", content: "web page" },
    { name: "DC.isPartOf", content: "Data by Design" },
    { name: "citation_authors", content: authors.join("; ") },
    ...authors.map((author) => {
      return { name: "DC.creators", content: author };
    }),
  ];
};
