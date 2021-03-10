export const setColourByDistance = (distance, tripColours) => {
  switch (true) {
    case distance < 500:
      return tripColours[0]; // purple to yellow scale
    case distance < 1000:
      return tripColours[1];
    case distance < 2000:
      return tripColours[2];
    case distance < 3000:
      return tripColours[3];
    case distance < 4000:
      return tripColours[4];
    case distance < 5000:
      return tripColours[5];
    case distance < 10000:
      return tripColours[6];
    case distance < 20000:
      return tripColours[7];
    default:
      return tripColours[8];
  }
};
