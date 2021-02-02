const pixelToViewportWidth = (size, width = 1440) => `${(size / width) * 100}vw`;
export default pixelToViewportWidth;
