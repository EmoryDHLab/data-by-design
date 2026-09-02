export const missing = (figure: string) => {
  return {
    chapter: "",
    fileName: "missing",
    title: figure,
    cleanTitle: figure,
    artist: "",
    creditLine: "",
    caption: "",
    sourceUrl: "",
    altText: "",
    sensitiveAltText: null,
    altTextLong: null,
    cleanAltText: "",
    cleanSensitiveAltText: null,
    cleanAltTextLong: null,
    sensitive: false,
    frontPage: false,
    year: 0,
    width: 330,
    height: 407,
    iiif: false,
  };
};
