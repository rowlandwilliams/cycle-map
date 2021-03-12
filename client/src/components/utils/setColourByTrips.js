export const setColourByTrips = (ntrips, colours) => {
  switch (true) {
    case ntrips < 1:
      return colours[0]; // purple to yellow scale
    case ntrips < 2:
      return colours[1];
    case ntrips < 3:
      return colours[2];
    case ntrips < 4:
      return colours[3];
    case ntrips < 5:
      return colours[4];
    case ntrips < 6:
      return colours[5];
    case ntrips < 7:
      return colours[6];
    case ntrips < 8:
      return colours[7];
    default:
      return colours[8];
  }
};
