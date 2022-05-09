export const totalFormat = (amount) => {
  const displayNumber = amount / 1000;
  if (displayNumber > 1) {
    return `${displayNumber.toFixed(1)}k`;
  }
  return amount;
};

export const generatePhotoGroup = (data) => {
  const photosGroup = [[], [], []];
  const photoGroupHeight = [0, 0, 0];
  for (let i = 0; i < data.length; i++) {
    const minHeightValue = Math.min(...photoGroupHeight);
    const minHeightIndex = photoGroupHeight.indexOf(minHeightValue);
    photosGroup[minHeightIndex].push(data[i]);
    photoGroupHeight[minHeightIndex] += (data[i].height / data[i].width);
  }
  return photosGroup;
};
