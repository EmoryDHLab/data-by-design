export const visWidth = (windowWidth = window.innerWidth) => {
  return (windowWidth / 3) * 2;
};

export const visHeight = (windowHeight = window.innerHeight) => {
  return (windowHeight / 7) * 5;
};

export const visSize = (
  windowHeight = window.innerHeight,
  windowWidth = window.innerWidth
) => {
  return {
    width: visWidth(windowWidth),
    height: visHeight(windowHeight),
  };
};

export const versionWidth = (windowWidth = window.innerWidth) => {
  return visWidth(windowWidth) / 5;
};

export const versionHeight = (windowHeight = window.innerHeight) => {
  return visHeight(windowHeight) / 8;
};

export const versionSpacing = (windowWidth = window.innerWidth) => {
  return versionWidth(windowWidth) / 2;
};

export const versionMidX = (index: number, windowWidth: number) => {
  return versionX(index) + versionWidth(windowWidth) / 2;
};

export const versionBottomY = (windowHeight: number) => {
  return versionHeight(windowHeight) / 3 + versionHeight(windowHeight);
};

export const VIS_SIZE = visSize();

export const VERSION_WIDTH = versionWidth(window.innerWidth);
export const VERSION_HEIGHT = versionHeight(window.innerHeight);
export const VERSION_SPACING = versionSpacing(window.innerWidth);

export const versionX = (index: number, windowWidth = window.innerWidth) => {
  return (
    versionWidth(windowWidth) * index +
    versionSpacing(windowWidth) * (1 + index)
  );
};

export const versionY = (windowHeight = window.innerHeight) => {
  return versionHeight(windowHeight) / 3;
};

export const nodeX = (offset: number, windowWidth = window.innerWidth) => {
  return visWidth(windowWidth) * offset;
};

export const nodeY = (offset: number, windowHeight = window.innerHeight) => {
  return visHeight(windowHeight) * offset;
};
