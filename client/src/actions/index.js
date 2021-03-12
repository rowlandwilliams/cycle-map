// show hide a layer with given id
export const showHideLayer = (id) => ({ type: "SHOWHIDE", payload: id });

// change sliders in left dropwdown
export const changeSlider = (e, sliderId) => ({
  type: "CHANGE",
  id: sliderId,
  value: e.target.value,
});

// turn animation on / off
export const startStopAnimation = (id) => ({ type: "STARTSTOP", payload: id });

// increment time in animation
export const increment = (time, step, loopLength) => ({
  type: "INCREMENT",
  time: time,
  step: step,
  loopLength: loopLength,
});

// change time value on drag of time slider
export const changeTimeSlider = (time, e) => ({
  type: "SLIDE",
  time: time,
  value: e.target.value,
});
