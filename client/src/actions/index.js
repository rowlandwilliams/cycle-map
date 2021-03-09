export const showHideLayer = (id) => ({ type: "SHOWHIDE", payload: id });

export const changeSlider = (e) => ({
  type: "CHANGE",
  payload: e.target.value,
});
