type dimensions = { width: number; height: number };
type tiles = dimensions & { scaleFactors: number[] };
export type TInfo = {
  "@context": "http://iiif.io/api/image/3/context.json";
  protocol: "http://iiif.io/api/image";
  width: number;
  height: number;
  sizes: dimensions[];
  tiles: tiles[];
  id: "http://iip.readux.io/iiif/3/FaldaHighlight_0001.tiff";
  type: "ImageService3";
  profile: "level2";
  maxWidth: number;
  maxHeight: number;
};
