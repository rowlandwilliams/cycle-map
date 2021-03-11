export const startStopAnimation = (id) => ({ type: "STARTSTOP", payload: id });

export const showHideLayer = (id) => ({ type: "SHOWHIDE", payload: id });

export const changeSlider = (e, sliderId) => ({
  type: "CHANGE",
  id: sliderId,
  value: e.target.value,
});

export const increment = (time, step, loopLength) => ({
  type: "INCREMENT",
  time: time,
  step: step,
  loopLength: loopLength,
});

export const setTest = (time, e) => ({
  type: "TEST",
  time: time,
  value: e.target.value,
});
