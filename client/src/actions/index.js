export const showHideLayer = (id) => ({ type: "SHOWHIDE", payload: id });

export const changeSlider = (e) => ({
  type: "CHANGE",
  value: e.target.value,
});
